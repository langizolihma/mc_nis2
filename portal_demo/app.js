(function () {
  "use strict";
  let data = null;
  let serverMode = false;
  const titles = {
    overview: ["PROGRAMVEZETŐI NÉZET", "Auditfelkészültség"], actions: ["AKCIÓIRÁNYÍTÁS", "Feladatok"],
    approvals: ["EMBERI KONTROLL", "Jóváhagyások"], evidence: ["AUDITNYOM", "Evidenciák"], ai: ["PROPOSAL-ONLY", "AI-javaslatok"]
  };
  const state = { priority: "ALL", query: "", reviewItem: null };
  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
  const formatDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Intl.DateTimeFormat("hu-HU", {year:"numeric",month:"long",day:"numeric"}).format(new Date(value + "T12:00:00")) : value;
  const safeSharePointUrl = (value) => {
    try {
      const url = new URL(String(value));
      return url.protocol === "https:" && url.hostname === "metalcom.sharepoint.com" && url.pathname.startsWith("/sites/NIS2/") ? url.href : "";
    } catch (_error) {
      return "";
    }
  };

  function showToast(message, isError) {
    const toast = byId("toast"); toast.textContent = message; toast.classList.toggle("error", Boolean(isError)); toast.classList.add("show");
    window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 4200);
  }

  async function loadData() {
    try {
      const response = await fetch("/api/snapshot", {headers:{"Accept":"application/json"}});
      if (!response.ok) throw new Error("snapshot unavailable");
      data = await response.json(); serverMode = true;
    } catch (_error) {
      data = window.NIS2_DEMO_DATA; serverMode = false;
    }
    if (!data) throw new Error("A portál adatforrása nem érhető el.");
    byId("runtime-mode").textContent = serverMode ? "HELYI MVP · ÉLŐ REPOSITORY-NÉZET" : "OFFLINE BEMUTATÓ SNAPSHOT";
    byId("runtime-detail").textContent = serverMode ? "· review-tervezetek helyi auditnaplóval" : "· minden művelet szimuláció";
  }

  function switchView(name) {
    document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `view-${name}`));
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === name));
    byId("page-eyebrow").textContent = titles[name][0]; byId("page-title").textContent = titles[name][1];
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function renderOverview() {
    const s = data.summary;
    byId("as-of-date").textContent = formatDate(data.meta.as_of); byId("deadline-date").textContent = formatDate(s.action_plan_deadline);
    byId("days-left").textContent = s.days_to_deadline; byId("countdown-ring").style.setProperty("--pct", `${Math.max(6, Math.min(100, (90 - s.days_to_deadline) / 90 * 100))}%`);
    const metrics = [["Összes akció",s.total_actions,"19 követelménycsalád","teal"],["P0 prioritás",s.p0_actions,"azonnali fókusz","red"],["Folyamatban",s.in_progress,"emberi review szükséges","blue"],["Pótlandó evidencia",s.open_human_tasks,"nyitott emberi feladat","amber"]];
    byId("metric-grid").innerHTML = metrics.map(([label,value,note,color]) => `<article class="metric-card ${color}"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`).join("");
    const max = Math.max(...Object.values(s.priority_counts));
    byId("priority-bars").innerHTML = ["P0","P1","P2"].map((p) => `<div class="bar-row"><span>${p}</span><div class="bar-track"><div class="bar-fill ${p.toLowerCase()}" style="width:${(s.priority_counts[p] || 0) / max * 100}%"></div></div><b>${s.priority_counts[p] || 0}</b></div>`).join("");
    byId("gate-list").innerHTML = data.gate_legend.map((g) => `<div class="gate-row"><span class="gate-code">${g.id}</span><div><strong>${g.name}</strong><small>${g.description}</small></div><b>${s.gate_counts[g.id]}</b></div>`).join("");
  }

  function renderActions() {
    const query = state.query.toLocaleLowerCase("hu-HU");
    const rows = data.actions.filter((a) => (state.priority === "ALL" || a.priority === state.priority) && [a.id,a.title,a.task,a.owner].join(" ").toLocaleLowerCase("hu-HU").includes(query));
    byId("actions-body").innerHTML = rows.map((a) => `<tr><td><span class="action-id">${escapeHtml(a.id)}</span></td><td><strong>${escapeHtml(a.title)}</strong></td><td><span class="priority ${a.priority.toLowerCase()}">${a.priority}</span></td><td>${escapeHtml(formatDate(a.target_date))}</td><td>${escapeHtml(a.owner)}</td><td>${a.gates.map((g) => `<span class="gate-chip">${escapeHtml(g.slice(0,2))}</span>`).join("") || "–"}</td><td><span class="status-chip">${escapeHtml(a.status)}</span></td><td><button class="row-button" data-action="${escapeHtml(a.id)}">Részletek →</button></td></tr>`).join("") || `<tr><td colspan="8">Nincs a szűrésnek megfelelő feladat.</td></tr>`;
  }

  function renderApprovals() {
    const items = data.approval_queue.slice(0, 15);
    const auth = data.portal_auth_readiness || {status:"NOT_CONFIGURED",pending_gates:[],hard_errors:0};
    byId("portal-auth-status").textContent = auth.status;
    byId("portal-auth-detail").textContent = auth.hard_errors
      ? `Fail-closed · ${auth.hard_errors} hard error`
      : `${(auth.pending_gates || []).join(" · ") || "nincs függő kapu"} · valós bejelentkezés még kikapcsolva`;
    byId("approval-count").textContent = data.approval_queue.length; byId("approval-nav-count").textContent = data.approval_queue.length;
    byId("approval-list").innerHTML = items.map((item) => `<article class="approval-card"><div class="approval-code">${escapeHtml(item.gates[0].slice(0,2))}</div><div><h3>${escapeHtml(item.action_id)} · ${escapeHtml(item.title)}</h3><div class="approval-meta">${escapeHtml(item.approver)} · ${escapeHtml(formatDate(item.target_date))} · ${escapeHtml(item.gates.map(g=>g.slice(0,2)).join(" / "))}</div></div><div class="demo-actions"><button class="primary" data-review="${escapeHtml(item.action_id)}">Review-tervezet</button></div></article>`).join("");
    const drafts = (data.review_drafts || []).slice().reverse().slice(0, 8);
    byId("review-draft-count").textContent = drafts.length;
    byId("review-draft-list").innerHTML = drafts.length ? drafts.map((item) => `<article class="draft-card"><div><span>${escapeHtml(item.status)}</span><strong>${escapeHtml(item.action_id)} · ${escapeHtml(item.gate)}</strong></div><p>${escapeHtml(item.note)}</p><small>${escapeHtml(item.actor_display)} · ${escapeHtml(item.created_at)} · ${escapeHtml(item.draft_id)}</small></article>`).join("") : `<p class="empty-note">Még nincs helyi review-tervezet. Ezeknek nincs formális jóváhagyási hatásuk.</p>`;
  }

  function renderEvidence() {
    const tasks = Array.isArray(data.sharepoint_tasks) && data.sharepoint_tasks.length ? data.sharepoint_tasks : data.deferred_tasks;
    const readiness = data.sharepoint_live_readiness || {status:"NOT_CONFIGURED",pending_gates:[],hard_errors:0};
    byId("sharepoint-readiness-status").textContent = readiness.status;
    byId("sharepoint-readiness-detail").textContent = readiness.hard_errors
      ? `Fail-closed · ${readiness.hard_errors} hard error`
      : `${(readiness.pending_gates || []).join(" · ") || "nincs függő kapu"} · hálózat és visszaírás tiltva`;
    byId("deferred-count").textContent = tasks.length; byId("evidence-nav-count").textContent = data.summary.open_human_tasks;
    byId("evidence-grid").innerHTML = tasks.map((item) => {
      const safeUrl = safeSharePointUrl(item.evidence_url);
      const link = safeUrl
        ? `<a class="evidence-link" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.evidence_label || "Kapcsolódó dokumentum")} ↗</a>`
        : `<span class="evidence-link unavailable">Kapcsolódó dokumentum nem érhető el</span>`;
      return `<article class="evidence-card"><div class="evidence-top"><span class="evidence-id">${escapeHtml(item.id)}</span><span class="risk-chip ${item.status.includes("ACCEPTED_RISK") ? "accepted" : ""}">${escapeHtml(item.status)}</span></div><h3>${escapeHtml(item.related)}</h3><p>${escapeHtml(item.required)}</p>${link}<div class="evidence-footer"><span>Felelős: ${escapeHtml(item.owner)}</span><span>${escapeHtml(item.gate)}</span></div></article>`;
    }).join("");
  }

  function renderAi() {
    const pilot = data.agent_pilot || {status:"NOT_AVAILABLE",proposals:[],metrics:{}};
    byId("pilot-status").textContent = `${pilot.pilot_id || "A-042"} · ${pilot.status}`;
    byId("pilot-metrics").textContent = pilot.metrics.events_seen !== undefined ? `${pilot.metrics.events_seen} esemény · ${pilot.metrics.proposals_created} proposal · téves riasztás: még nem mért` : "Pilotkimenet nem érhető el";
    const pilotCards = (pilot.proposals || []).map((item) => ({action_id:item.proposal_id,title:item.agent_role,proposal:(item.proposed_changes || []).join("; "),source_ref:(item.source_refs || []).join("; "),agent_role:item.agent_role,status:item.status}));
    byId("ai-grid").innerHTML = [...pilotCards, ...data.ai_proposals].map((item) => `<article class="ai-card"><div class="ai-card-top"><span class="proposal-chip">${escapeHtml(item.status)}</span><span class="action-id">${escapeHtml(item.action_id)}</span></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.proposal)}</p><div class="source-line"><span>Forrás: ${escapeHtml(item.source_ref)}</span><span>${escapeHtml(item.agent_role)}</span></div><div class="ai-actions"><button data-ai-note="${escapeHtml(item.action_id)}">Emberi review szükséges</button></div></article>`).join("");
  }

  function openDrawer(actionId) {
    const a = data.actions.find((item) => item.id === actionId); if (!a) return;
    byId("drawer-content").innerHTML = `<span class="proposal-chip">${escapeHtml(a.status)}</span><h2>${escapeHtml(a.id)} · ${escapeHtml(a.title)}</h2><p class="drawer-lead">${escapeHtml(a.task)}</p><div class="detail-grid"><div><span>Prioritás</span><strong>${escapeHtml(a.priority)}</strong></div><div><span>Határidő</span><strong>${escapeHtml(formatDate(a.target_date))}</strong></div><div><span>Felelős</span><strong>${escapeHtml(a.owner)}</strong></div><div><span>Jóváhagyó</span><strong>${escapeHtml(a.approver)}</strong></div></div><div class="detail-block"><span>ELVÁRT EREDMÉNY</span><p>${escapeHtml(a.deliverable)}</p></div><div class="detail-block"><span>ELFOGADÁSI EVIDENCIA</span><p>${escapeHtml(a.evidence)}</p></div><div class="detail-block"><span>FORRÁSKÖVETÉS</span><p>${escapeHtml(a.source_ref)} · ${escapeHtml(a.source_confidence)}</p></div><div class="detail-block"><span>EMBERI KAPU</span><p>${escapeHtml(a.gates.join(" · ") || "G1 szakmai review")}</p></div>`;
    byId("action-drawer").classList.add("open"); byId("drawer-backdrop").classList.add("open"); byId("action-drawer").setAttribute("aria-hidden","false");
  }
  function closeDrawer(){byId("action-drawer").classList.remove("open");byId("drawer-backdrop").classList.remove("open");byId("action-drawer").setAttribute("aria-hidden","true");}

  function openReviewModal(actionId) {
    const item = data.approval_queue.find((entry) => entry.action_id === actionId); if (!item) return;
    state.reviewItem = item; byId("review-action").value = item.action_id;
    byId("review-gate").innerHTML = item.gates.map((gate) => `<option value="${escapeHtml(gate)}">${escapeHtml(gate)}</option>`).join("");
    byId("review-modal").classList.add("open"); byId("review-modal").setAttribute("aria-hidden","false"); byId("review-actor").focus();
  }
  function closeReviewModal(){byId("review-modal").classList.remove("open");byId("review-modal").setAttribute("aria-hidden","true");state.reviewItem=null;}

  async function submitReviewDraft(event) {
    event.preventDefault();
    if (!serverMode) { showToast("Offline snapshot módban review-tervezet nem menthető.", true); return; }
    const payload = {action_id:byId("review-action").value,gate:byId("review-gate").value,actor_display:byId("review-actor").value,decision:byId("review-decision").value,note:byId("review-note").value};
    try {
      const response = await fetch("/api/review-drafts", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      const result = await response.json(); if (!response.ok) throw new Error((result.details || [result.error]).join(" "));
      data.review_drafts = [...(data.review_drafts || []), result.record]; renderApprovals(); closeReviewModal(); byId("review-form").reset();
      showToast("A review-tervezet helyi auditnyommal elmentve. Nem minősül jóváhagyásnak.");
    } catch (error) { showToast(`A tervezet nem menthető: ${error.message}`, true); }
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const nav = event.target.closest("[data-view]"); if (nav) switchView(nav.dataset.view);
      const go = event.target.closest("[data-go]"); if (go) switchView(go.dataset.go);
      const row = event.target.closest("[data-action]"); if (row) openDrawer(row.dataset.action);
      const review = event.target.closest("[data-review]"); if (review) openReviewModal(review.dataset.review);
      const ai = event.target.closest("[data-ai-note]"); if (ai) showToast("Az AI-kimenet PROPOSAL. Formális hatása csak hitelesített emberi review után lehet.");
      const filter = event.target.closest("[data-priority]"); if (filter) { state.priority=filter.dataset.priority; document.querySelectorAll(".filter").forEach((b)=>b.classList.toggle("active",b===filter)); renderActions(); }
    });
    byId("action-search").addEventListener("input", (event) => {state.query=event.target.value;renderActions();});
    byId("drawer-close").addEventListener("click",closeDrawer);byId("drawer-backdrop").addEventListener("click",closeDrawer);
    byId("review-cancel").addEventListener("click",closeReviewModal);byId("review-form").addEventListener("submit",submitReviewDraft);
    document.addEventListener("keydown",(event)=>{if(event.key==="Escape"){closeDrawer();closeReviewModal();}});
    byId("presentation-button").addEventListener("click",()=>{document.body.classList.toggle("presentation");byId("presentation-button").textContent=document.body.classList.contains("presentation")?"Navigáció mutatása":"Prezentációs mód";});
  }

  async function init() {
    try { await loadData(); renderOverview(); renderActions(); renderApprovals(); renderEvidence(); renderAi(); bindEvents(); }
    catch (error) { document.body.innerHTML = `<p class="fatal-error">${escapeHtml(error.message)}</p>`; }
  }
  init();
})();
