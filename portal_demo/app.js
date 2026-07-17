(function () {
  "use strict";
  const data = window.NIS2_DEMO_DATA;
  if (!data) {
    document.body.innerHTML = "<p style='padding:2rem;font-family:sans-serif'>A demo-adatfájl hiányzik. Futtasd újra a portál snapshot generálását.</p>";
    return;
  }

  const titles = {
    overview: ["PROGRAMVEZETŐI NÉZET", "Auditfelkészültség"], actions: ["AKCIÓIRÁNYÍTÁS", "Feladatok"],
    approvals: ["EMBERI KONTROLL", "Jóváhagyások"], evidence: ["AUDITNYOM", "Evidenciák"], ai: ["PROPOSAL-ONLY", "AI-javaslatok"]
  };
  const state = { priority: "ALL", query: "" };
  const byId = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value ?? "").replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
  const formatDate = (value) => /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Intl.DateTimeFormat("hu-HU", {year:"numeric",month:"long",day:"numeric"}).format(new Date(value + "T12:00:00")) : value;

  function showToast(message) {
    const toast = byId("toast"); toast.textContent = message; toast.classList.add("show");
    window.clearTimeout(showToast.timer); showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3300);
  }

  function switchView(name) {
    document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `view-${name}`));
    document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === name));
    byId("page-eyebrow").textContent = titles[name][0]; byId("page-title").textContent = titles[name][1];
    window.scrollTo({top:0,behavior:"smooth"});
  }

  function renderOverview() {
    const s = data.summary;
    byId("as-of-date").textContent = formatDate(data.meta.as_of);
    byId("deadline-date").textContent = formatDate(s.action_plan_deadline);
    byId("days-left").textContent = s.days_to_deadline;
    byId("countdown-ring").style.setProperty("--pct", `${Math.max(6, Math.min(100, (90 - s.days_to_deadline) / 90 * 100))}%`);
    const metrics = [
      ["Összes akció",s.total_actions,"19 követelménycsalád","teal"],
      ["P0 prioritás",s.p0_actions,"azonnali fókusz","red"],
      ["Folyamatban",s.in_progress,"emberi review szükséges","blue"],
      ["Pótlandó evidencia",s.open_human_tasks,"nyitott emberi feladat","amber"]
    ];
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
    const items = data.approval_queue.slice(0, 12);
    byId("approval-count").textContent = data.approval_queue.length;
    byId("approval-nav-count").textContent = data.approval_queue.length;
    byId("approval-list").innerHTML = items.map((item) => `<article class="approval-card"><div class="approval-code">${escapeHtml(item.gates[0].slice(0,2))}</div><div><h3>${escapeHtml(item.action_id)} · ${escapeHtml(item.title)}</h3><div class="approval-meta">${escapeHtml(item.approver)} · ${escapeHtml(formatDate(item.target_date))} · ${escapeHtml(item.gates.map(g=>g.slice(0,2)).join(" / "))}</div></div><div class="demo-actions"><button data-demo="reject">Visszaküldés</button><button class="primary" data-demo="approve">Jóváhagyás</button></div></article>`).join("");
  }

  function renderEvidence() {
    byId("deferred-count").textContent = data.deferred_tasks.length;
    byId("evidence-nav-count").textContent = data.summary.open_human_tasks;
    byId("evidence-grid").innerHTML = data.deferred_tasks.map((item) => `<article class="evidence-card"><div class="evidence-top"><span class="evidence-id">${escapeHtml(item.id)}</span><span class="risk-chip ${item.status.includes("ACCEPTED_RISK") ? "accepted" : ""}">${escapeHtml(item.status)}</span></div><h3>${escapeHtml(item.related)}</h3><p>${escapeHtml(item.required)}</p><div class="evidence-footer"><span>Felelős: ${escapeHtml(item.owner)}</span><span>${escapeHtml(item.gate)}</span></div></article>`).join("");
  }

  function renderAi() {
    byId("ai-grid").innerHTML = data.ai_proposals.map((item) => `<article class="ai-card"><div class="ai-card-top"><span class="proposal-chip">${escapeHtml(item.status)}</span><span class="action-id">${escapeHtml(item.action_id)}</span></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.proposal)}</p><div class="source-line"><span>Forrás: ${escapeHtml(item.source_ref)}</span><span>${escapeHtml(item.agent_role)}</span></div><div class="ai-actions"><button data-demo="forward">Ember elé terjesztés</button><button data-demo="details">Források</button></div></article>`).join("");
  }

  function openDrawer(actionId) {
    const a = data.actions.find((item) => item.id === actionId); if (!a) return;
    byId("drawer-content").innerHTML = `<span class="proposal-chip">${escapeHtml(a.status)}</span><h2>${escapeHtml(a.id)} · ${escapeHtml(a.title)}</h2><p class="drawer-lead">${escapeHtml(a.task)}</p><div class="detail-grid"><div><span>Prioritás</span><strong>${escapeHtml(a.priority)}</strong></div><div><span>Határidő</span><strong>${escapeHtml(formatDate(a.target_date))}</strong></div><div><span>Felelős</span><strong>${escapeHtml(a.owner)}</strong></div><div><span>Jóváhagyó</span><strong>${escapeHtml(a.approver)}</strong></div></div><div class="detail-block"><span>ELVÁRT EREDMÉNY</span><p>${escapeHtml(a.deliverable)}</p></div><div class="detail-block"><span>ELFOGADÁSI EVIDENCIA</span><p>${escapeHtml(a.evidence)}</p></div><div class="detail-block"><span>FORRÁSKÖVETÉS</span><p>${escapeHtml(a.source_ref)} · ${escapeHtml(a.source_confidence)}</p></div><div class="detail-block"><span>EMBERI KAPU</span><p>${escapeHtml(a.gates.join(" · ") || "G1 szakmai review")}</p></div>`;
    byId("action-drawer").classList.add("open"); byId("drawer-backdrop").classList.add("open"); byId("action-drawer").setAttribute("aria-hidden","false");
  }
  function closeDrawer(){byId("action-drawer").classList.remove("open");byId("drawer-backdrop").classList.remove("open");byId("action-drawer").setAttribute("aria-hidden","true");}

  document.addEventListener("click", (event) => {
    const nav = event.target.closest("[data-view]"); if (nav) switchView(nav.dataset.view);
    const go = event.target.closest("[data-go]"); if (go) switchView(go.dataset.go);
    const row = event.target.closest("[data-action]"); if (row) openDrawer(row.dataset.action);
    const demo = event.target.closest("[data-demo]"); if (demo) showToast("Bemutató mód: a művelet nem változtatta meg a nyilvántartást. Valódi döntéshez név szerinti ember és evidencia szükséges.");
    const filter = event.target.closest("[data-priority]"); if (filter) { state.priority=filter.dataset.priority; document.querySelectorAll(".filter").forEach((b)=>b.classList.toggle("active",b===filter)); renderActions(); }
  });
  byId("action-search").addEventListener("input", (event) => {state.query=event.target.value;renderActions();});
  byId("drawer-close").addEventListener("click",closeDrawer);byId("drawer-backdrop").addEventListener("click",closeDrawer);
  document.addEventListener("keydown",(event)=>{if(event.key==="Escape")closeDrawer();});
  byId("presentation-button").addEventListener("click",()=>{document.body.classList.toggle("presentation");byId("presentation-button").textContent=document.body.classList.contains("presentation")?"Navigáció mutatása":"Prezentációs mód";});

  renderOverview(); renderActions(); renderApprovals(); renderEvidence(); renderAi();
})();
