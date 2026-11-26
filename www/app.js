/* Pomorix – Focus. Study. Achieve. */
(function () {
  'use strict';

  /* ================= ícones ================= */
  const P = {
    home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h13V10"/><path d="M10 19.5v-5h4v5"/>',
    tasks: '<rect x="4" y="4" width="16" height="16" rx="3.5"/><path d="m8.5 12.2 2.4 2.4 4.6-5"/>',
    stats: '<path d="M7 20v-6M12 20V5M17 20v-9"/>',
    gym: '<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" transform="translate(1.2 1.2) scale(.9)"/>',
    pause: '<path d="M9 5.5v13M15 5.5v13" stroke-width="2.6"/>',
    reset: '<path d="M20 12a8 8 0 1 1-2.7-6"/><path d="M20 4v4.6h-4.6"/>',
    skip: '<path d="M5 5.5 11.5 12 5 18.5zM13 5.5 19.5 12 13 18.5z"/>',
    play: '<path d="M8 5.5v13l11-6.5z" class="x"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    chev: '<path d="m9 6 6 6-6 6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.6 2H4.4z"/><path d="M10 21h4"/>',
    spark: '<path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z"/>',
    star: '<path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/>',
    tomato: '<circle cx="12" cy="13.6" r="7.6"/><path d="M8.3 7.6c1.3.7 2.5.5 3.7-.7 1.2 1.2 2.4 1.4 3.7.7M12 6.9V3.8M12 6.9C10.5 5.2 8.8 4.8 7.2 5.3"/>',
    user: '<circle cx="12" cy="8.2" r="3.7"/><path d="M5 20.5c.8-3.9 3.6-5.7 7-5.7s6.2 1.8 7 5.7"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    trash: '<path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l.8 12.5h9.4L17.5 7M10 11v5M14 11v5"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5" stroke-width="2.6"/>',
    checkc: '<circle cx="12" cy="12" r="10"/><path d="m7.5 12.3 3 3 6-6.3" stroke-width="2.2"/>',
    bars: '<path d="M5 20V12M10 20V6M15 20V10M20 20V3" stroke-width="3.2"/>',
    barsm: '<path d="M4 20v-6M9 20V8M14 20v-9M19 20V4" stroke-width="3"/>',
    playbox: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M10 8.8v6.4l5-3.2z" class="x"/>',
    dumb: '<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>'
  };
  const ico = (n, cls) =>
    `<svg class="i ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true">${P[n].replace(/class="x"/g, 'fill="currentColor" stroke="none"')}</svg>`;
  const icoF = (n) => `<svg class="i f" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;

  /* ================= util ================= */
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const dkey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const todayKey = () => dkey(new Date());
  const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const DAYS_FULL = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
  const todayIdx = () => (new Date().getDay() + 6) % 7;
  const mondayOf = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; };
  const weekKey = () => dkey(mondayOf(new Date()));
  const weekDates = () => { const m = mondayOf(new Date()); return Array.from({ length: 7 }, (_, i) => { const d = new Date(m); d.setDate(m.getDate() + i); return d; }); };
  const uid = () => Math.random().toString(36).slice(2, 9);
  const num = (v, def) => { const n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : def; };
  const fmt = (n, d) => Number(n).toLocaleString('pt-BR', { maximumFractionDigits: d == null ? 1 : d });

  /* ================= estado ================= */
  const KEY = 'pomorix.v1';
  const DEF = () => ({
    onboarded: false,
    name: 'Estudante',
    settings: { focus: 25, short: 5, long: 15, cycles: 4, goal: 40, sound: true, vibrate: true, notify: true, auto: false, daily: true, dailyTime: '19:00', gym: true, gymTime: '17:00' },
    timer: { mode: 'focus', running: false, endAt: 0, left: 25 * 60000, cycle: 0 },
    tasks: [
      { id: uid(), t: 'Estudar Matemática', d: true },
      { id: uid(), t: 'Ler um capítulo de Física', d: false },
      { id: uid(), t: 'Revisar Química', d: false },
      { id: uid(), t: 'Fazer exercícios', d: false }
    ],
    stats: { days: {}, tasks: {} },
    gym: { days: {}, prog: {} },
    body: { weight: null, height: null, hist: [] },
    lastReminder: null
  });
  let S;
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    const d = DEF();
    S = raw ? Object.assign(d, raw, { settings: Object.assign(d.settings, raw.settings), timer: Object.assign(d.timer, raw.timer) }) : d;
  } catch (e) { S = DEF(); }
  let reT;
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } clearTimeout(reT); reT = setTimeout(() => scheduleDaily(), 1500); };

  let page = 'home';
  let selDay = todayIdx();
  let showAllTasks = false;
  let lastDay = todayKey();

  /* ================= timer ================= */
  const modeName = { focus: 'Foco', short: 'Pausa', long: 'Pausa Longa' };
  const dur = (m) => (m === 'focus' ? S.settings.focus : m === 'short' ? S.settings.short : S.settings.long) * 60000;
  const tLeft = () => (S.timer.running ? Math.max(0, S.timer.endAt - Date.now()) : S.timer.left);
  const clock = (ms) => { const s = Math.ceil(ms / 1000); return `${pad(Math.floor(s / 60))}:${pad(s % 60)}`; };
  const R = 112, C = 2 * Math.PI * R;

  const LN = () => (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications) || null;
  async function notifSchedule(id, title, body, at) {
    try {
      const ln = LN(); if (!ln || !S.settings.notify) return;
      await ln.schedule({ notifications: [{ id, title, body, schedule: { at: new Date(at), allowWhileIdle: true } }] });
    } catch (e) { /* ignore */ }
  }
  async function notifCancel(id) { try { const ln = LN(); if (ln) await ln.cancel({ notifications: [{ id }] }); } catch (e) { /* ignore */ } }
  async function notifPerm() { try { const ln = LN(); if (ln) await ln.requestPermissions(); } catch (e) { /* ignore */ } }
  async function scheduleDaily() {
    try {
      const ln = LN(); if (!ln) return;
      const ids = []; for (let i = 0; i < 7; i++) { ids.push({ id: 100 + i }, { id: 200 + i }); }
      await ln.cancel({ notifications: ids });
      if (!S.settings.notify) return;
      const now = new Date(), list = [];
      const pend = S.tasks.filter((t) => !t.d);
      for (let i = 0; i < 7; i++) {
        const d = new Date(now); d.setDate(now.getDate() + i);
        if (S.settings.daily && pend.length) {
          const [h, m] = (S.settings.dailyTime || '19:00').split(':').map(Number);
          const at = new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m, 0);
          if (at > now) {
            const names = pend.slice(0, 3).map((t) => t.t).join(', ') + (pend.length > 3 ? '…' : '');
            list.push({ id: 100 + i, title: 'Tarefas pendentes 📝', body: `Você tem ${pend.length} tarefa${pend.length > 1 ? 's' : ''} pendente${pend.length > 1 ? 's' : ''}: ${names}. Comece com 1 Pomodoro!`, schedule: { at, allowWhileIdle: true } });
          }
        }
        if (S.settings.gym) {
          const wi = (d.getDay() + 6) % 7, day = S.gym.days[wi];
          if (day && day.ex.length) {
            const [h, m] = (S.settings.gymTime || '17:00').split(':').map(Number);
            const at = new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m, 0);
            if (at > now) list.push({ id: 200 + i, title: 'Hora do treino 💪', body: `Hoje: ${day.name || 'Treino de ' + DAYS_FULL[wi].split('-')[0]} · ${day.ex.length} exercício${day.ex.length > 1 ? 's' : ''}. Foco é a chave!`, schedule: { at, allowWhileIdle: true } });
          }
        }
      }
      if (list.length) await ln.schedule({ notifications: list });
    } catch (e) { /* ignore */ }
  }

  function endText(mode) {
    if (mode === 'focus') return ['Hora de fazer uma pausa!', `Você estudou por ${S.settings.focus} minutos. Descanse por ${S.settings.short} minutos.`];
    return ['Pausa concluída!', `Pronto para voltar ao foco? Vamos para mais ${S.settings.focus} minutos.`];
  }

  function startTimer() {
    if (S.timer.running) return;
    if (S.timer.left <= 0) S.timer.left = dur(S.timer.mode);
    S.timer.running = true;
    S.timer.endAt = Date.now() + S.timer.left;
    save(); notifPerm();
    const [t, b] = endText(S.timer.mode);
    notifSchedule(1, t, b, S.timer.endAt);
    updateTimer(); beep(0.12, 660);
  }
  function pauseTimer() {
    if (!S.timer.running) return;
    S.timer.left = tLeft(); S.timer.running = false; save(); notifCancel(1); updateTimer();
  }
  function resetTimer() {
    S.timer.running = false; S.timer.left = dur(S.timer.mode); save(); notifCancel(1); updateTimer();
  }
  function nextMode(afterFocus) {
    if (afterFocus) return (S.timer.cycle % S.settings.cycles === 0) ? 'long' : 'short';
    return 'focus';
  }
  function skipTimer() {
    const wasFocus = S.timer.mode === 'focus';
    S.timer.running = false; notifCancel(1);
    S.timer.mode = wasFocus ? (((S.timer.cycle + 1) % S.settings.cycles === 0) ? 'long' : 'short') : 'focus';
    S.timer.left = dur(S.timer.mode); save(); updateTimer();
  }
  function finishTimer() {
    const was = S.timer.mode;
    const [t, b] = endText(was);
    if (was === 'focus') {
      const k = todayKey(); const d = S.stats.days[k] || { p: 0, min: 0 };
      d.p += 1; d.min += S.settings.focus; S.stats.days[k] = d;
      S.timer.cycle += 1;
    }
    S.timer.mode = was === 'focus' ? nextMode(true) : 'focus';
    S.timer.left = dur(S.timer.mode);
    S.timer.running = false;
    S.lastReminder = { t, b, at: Date.now() };
    if (was === 'focus' && S.timer.mode === 'long') S.lastReminder.b = `Você estudou por ${S.settings.focus} minutos. Ciclo completo! Descanse por ${S.settings.long} minutos.`;
    save();
    if (S.settings.sound) { beep(0.25, 880); setTimeout(() => beep(0.25, 1100), 320); setTimeout(() => beep(0.35, 1320), 640); }
    if (S.settings.vibrate && navigator.vibrate) navigator.vibrate([250, 120, 250, 120, 400]);
    if (S.settings.auto) startTimer();
    render();
    if (document.visibilityState !== 'hidden') openReminder(S.lastReminder);
  }

  let audioCtx;
  function beep(len, freq) {
    if (!S.settings.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = 'sine'; o.frequency.value = freq; o.connect(g); g.connect(audioCtx.destination);
      g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + len);
      o.start(); o.stop(audioCtx.currentTime + len + 0.05);
    } catch (e) { /* ignore */ }
  }

  function updateTimer() {
    const left = tLeft();
    const total = dur(S.timer.mode);
    const el = $('#tm-time'); if (!el) return;
    el.textContent = clock(left);
    $('#tm-label').textContent = modeName[S.timer.mode];
    const frac = Math.max(0, Math.min(1, left / total)) * 0.965;
    $('#tm-arc').setAttribute('stroke-dasharray', `${C * frac} ${C}`);
    const pb = $('#tm-play');
    pb.innerHTML = ico(S.timer.running ? 'pause' : 'play');
    pb.setAttribute('aria-label', S.timer.running ? 'Pausar' : 'Iniciar');
  }
  setInterval(() => {
    if (S.timer.running && Date.now() >= S.timer.endAt) finishTimer();
    else if ($('#tm-time')) updateTimer();
    if (todayKey() !== lastDay) { lastDay = todayKey(); selDay = todayIdx(); render(); }
  }, 250);
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { if (S.timer.running && Date.now() >= S.timer.endAt) finishTimer(); else updateTimer(); } });

  /* ================= cálculos ================= */
  function taskSummary() {
    const total = S.tasks.length, done = S.tasks.filter((t) => t.d).length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    const k = todayKey(); S.stats.tasks[k] = pct;
    const prevKeys = Object.keys(S.stats.tasks).filter((x) => x < k).sort();
    const prev = prevKeys.length ? S.stats.tasks[prevKeys[prevKeys.length - 1]] : 0;
    return { total, done, pct, delta: pct - prev };
  }
  function weekData() {
    return weekDates().map((d) => (S.stats.days[dkey(d)] || { p: 0, min: 0 }));
  }
  function streak() {
    let n = 0; const d = new Date();
    if (!(S.stats.days[dkey(d)] || {}).p) d.setDate(d.getDate() - 1);
    while ((S.stats.days[dkey(d)] || {}).p) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function smoothPath(pts) {
    if (pts.length < 2) return '';
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
      const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
      d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
    }
    return d;
  }
  function lineChart(vals, upto, w, h) {
    const max = Math.max(...vals, 4), padX = 12, padY = 14;
    const pts = vals.slice(0, upto + 1).map((v, i) => [padX + i * ((w - padX * 2) / 6), h - padY - (v / max) * (h - padY * 2)]);
    const line = smoothPath(pts);
    const last = pts[pts.length - 1];
    const area = pts.length > 1 ? `${line} L${last[0]},${h} L${pts[0][0]},${h} Z` : '';
    const grid = [0.25, 0.5, 0.75].map((f) => `<line x1="0" x2="${w}" y1="${(h * f).toFixed(1)}" y2="${(h * f).toFixed(1)}" stroke="rgba(255,255,255,.07)" stroke-dasharray="3 5"/>`).join('');
    return `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="height:${h}px">${grid}
      <path d="${area}" fill="url(#gArea)"/>
      <path d="${line}" fill="none" stroke="url(#gLine)" stroke-width="2.4" stroke-linecap="round" style="filter:drop-shadow(0 0 5px rgba(56,189,248,.8))"/>
      <circle cx="${last[0]}" cy="${last[1]}" r="9" fill="rgba(59,130,246,.25)"/>
      <circle cx="${last[0]}" cy="${last[1]}" r="5" fill="#3b82f6" stroke="#cfe3ff" stroke-width="1.5"/></svg>`;
  }
  function ringSvg(pct, grad, r, sw) {
    const c = 2 * Math.PI * r;
    return `<svg viewBox="0 0 ${(r + sw) * 2} ${(r + sw) * 2}"><circle cx="${r + sw}" cy="${r + sw}" r="${r}" fill="none" stroke="rgba(120,110,200,.2)" stroke-width="${sw}"/>
      <circle cx="${r + sw}" cy="${r + sw}" r="${r}" fill="none" stroke="url(#${grad})" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c * Math.max(0, Math.min(100, pct)) / 100} ${c}" style="filter:drop-shadow(0 0 5px rgba(100,130,255,.8))"/></svg>`;
  }

  /* ================= páginas ================= */
  function header() {
    return `<header class="top"><div class="brand"><img class="logo-s" src="assets/logo-small.png" alt="">
      <div><div class="wordmark">Pomorix</div><div class="slogan-s">Focus. Study. Achieve.</div></div></div>
      <button class="avatar" data-act="profile" aria-label="Perfil">${ico('user')}</button></header>`;
  }

  function pageHome() {
    const ts = taskSummary();
    const wk = weekData();
    const last5 = Array.from({ length: 5 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - (4 - i)); return (S.stats.days[dkey(d)] || {}).p || 0; });
    const mx = Math.max(...last5, 1);
    const bars = last5.map((v, i) => `<i style="height:${Math.round(12 + i * 4 + (v / mx) * 14)}px"></i>`).join('');
    const dots = Array.from({ length: S.settings.cycles }, (_, i) => `<i class="${i < (S.timer.cycle % S.settings.cycles) ? 'on' : ''}"></i>`).join('');
    void wk;
    return `<div class="page">${header()}
      <div class="card greet"><span class="swirl"></span><b>Olá, ${esc(S.name)}! 👋</b><span>Vamos conquistar seus objetivos hoje?</span></div>
      <div class="card prog" data-act="go" data-p="tasks">
        <div class="ring-s">${ringSvg(ts.pct, 'gRing', 44, 7)}<div class="pct">${ts.pct}%</div></div>
        <div class="info"><small>Seu progresso</small><strong>${ts.done} / ${ts.total} tarefas</strong>
          <span class="delta ${ts.delta < 0 ? 'down' : 'up'}">${ts.delta < 0 ? '↓' : '↑'} ${ts.delta < 0 ? '' : '+'}${ts.delta}%</span></div>
        <div class="mini-bars">${bars}</div><span class="chev">${ico('chev')}</span>
      </div>
      <section class="pomo">
        <div class="pomo-chip">${ico('playbox')} Pomodoro</div>
        <div class="ring-l">
          <svg viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="141" fill="none" stroke="rgba(150,140,255,.12)" stroke-width="1"/>
            <circle cx="150" cy="150" r="128" fill="none" stroke="rgba(150,140,255,.10)" stroke-width="1" stroke-dasharray="1 7"/>
            <path d="M8 150l5-5 5 5-5 5zM282 150l5-5 5 5-5 5z" fill="#6d7dff" opacity=".9" style="filter:drop-shadow(0 0 5px #6d7dff)"/>
            <circle cx="150" cy="150" r="${R}" fill="none" stroke="rgba(110,100,220,.16)" stroke-width="9"/>
            <circle id="tm-arc" cx="150" cy="150" r="${R}" fill="none" stroke="url(#gRing)" stroke-width="9" stroke-linecap="round"
              stroke-dasharray="${C} ${C}" transform="rotate(-90 150 150)"/>
            <circle cx="150" cy="150" r="97" fill="rgba(6,4,18,.92)" stroke="rgba(130,120,255,.38)" stroke-width="1"/>
          </svg>
          <div class="center"><div id="tm-time">25:00</div><div id="tm-label">Foco</div>
            <button class="play" id="tm-play" data-act="toggle"></button></div>
        </div>
        <div class="cycle-dots" title="Ciclo de Pomodoros">${dots}</div>
        <div class="ctrl">
          <button data-act="pause">${ico('pause')}<span>Pausa</span></button>
          <button data-act="reset">${ico('reset')}<span>Resetar</span></button>
          <button data-act="skip">${ico('skip')}<span>Pular</span></button>
        </div>
      </section></div>`;
  }

  function taskRow(t) {
    return `<div class="task ${t.d ? 'done' : ''}"><button class="chk ${t.d ? 'on' : ''}" data-act="tick" data-id="${t.id}" aria-label="Concluir">${t.d ? ico('check') : ''}</button>
      <div class="tt" data-act="edit-task" data-id="${t.id}">${esc(t.t)}</div>
      <button class="go" data-act="edit-task" data-id="${t.id}" aria-label="Editar">${ico('chev')}</button></div>`;
  }
  function pageTasks() {
    const list = showAllTasks ? S.tasks : S.tasks.slice(0, 4);
    return `<div class="page"><div class="card">
      <div class="card-head"><div class="card-title">${ico('barsm')} Suas Tarefas</div>
        <button class="round-btn" data-act="add-task" aria-label="Nova tarefa">${ico('plus')}</button></div>
      ${list.length ? list.map(taskRow).join('') : '<div class="empty">Nenhuma tarefa ainda.<br>Toque em + e comece pequeno: uma tarefa por vez.</div>'}
      ${S.tasks.length > 4 ? `<button class="see-all" data-act="all-tasks">${showAllTasks ? 'Ver menos' : 'Ver todas'} ${ico('arrow')}</button>` : ''}
    </div>
    <div class="card"><div class="card-title">${ico('bell')} Dica anti-procrastinação</div>
      <p class="muted small" style="margin:4px 0 0;line-height:1.5">Não espere motivação: comece com <b style="color:#fff">um Pomodoro de ${S.settings.focus} minutos</b> na tarefa mais fácil. O difícil é começar — depois o ritmo vem sozinho.</p>
      <button class="btn-ghost" data-act="go" data-p="home">Ir para o Pomodoro</button></div></div>`;
  }

  function reminderCard(r) {
    const pend = S.tasks.filter((t) => !t.d).length;
    const title = r ? r.t : (pend ? 'Hora de começar!' : 'Tudo em dia! 🎉');
    const body = r ? r.b : (pend ? `Você tem ${pend} tarefa${pend > 1 ? 's' : ''} pendente${pend > 1 ? 's' : ''}. Que tal iniciar um Pomodoro de ${S.settings.focus} minutos?` : 'Descanse ou planeje o próximo objetivo.');
    return `<div class="card"><div class="card-title">${ico('bell')} Lembretes Inteligentes</div>
      <button class="x-btn" data-act="clear-rem" aria-label="Fechar">${ico('x')}</button>
      <div class="reminder-in"><div class="rem-ic">${ico('bell', 'f')}</div><div><b>${esc(title)}</b><p>${esc(body)}</p></div></div>
      <button class="btn-ghost" data-act="${r ? 'clear-rem' : 'go-home'}">${r ? 'Entendi' : 'Iniciar Pomodoro'}</button></div>`;
  }
  function pageStats() {
    const wk = weekData(); const ti = todayIdx();
    const done = wk.reduce((a, b) => a + b.p, 0), goal = S.settings.goal;
    const pct = goal ? Math.min(100, Math.round((done / goal) * 100)) : 0;
    const today = wk[ti];
    const hrs = today.min >= 60 ? `${Math.floor(today.min / 60)}h${pad(today.min % 60)}` : `${today.min}min`;
    const labels = DAYS.map((d, i) => `<span class="${i === ti ? 't' : ''}">${d}</span>`).join('');
    return `<div class="page"><h1 class="page-title">Estatísticas</h1><p class="page-sub">Acompanhe seu progresso</p>
      <div class="tiles"><div class="tile"><b>${today.p}</b><span>Hoje</span></div><div class="tile"><b>${hrs}</b><span>Tempo de foco</span></div><div class="tile"><b>${streak()}🔥</b><span>Sequência</span></div></div>
      <div class="card"><div class="card-title">${ico('barsm')} Estatísticas</div>
        <div class="goal"><div class="ring-m">${ringSvg(pct, 'gTeal', 42, 8)}<div class="pct">${pct}%</div></div>
          <div><small>Meta da Semana</small><strong>${done} / ${goal}</strong><small>Pomodoros</small></div></div>
        <div class="chart">${lineChart(wk.map((x) => x.p), ti, 300, 92)}</div><div class="days">${labels}</div></div>
      ${reminderCard(S.lastReminder)}</div>`;
  }

  /* ---- treinos ---- */
  const gymDay = (i) => S.gym.days[i] || (S.gym.days[i] = { name: '', ex: [] });
  const progOf = () => (S.gym.prog[weekKey()] = S.gym.prog[weekKey()] || {});
  function bmiInfo() {
    const w = S.body.weight, h = S.body.height;
    if (!w || !h) return null;
    const bmi = w / Math.pow(h / 100, 2);
    const cls = bmi < 18.5 ? 'Abaixo do peso' : bmi < 25 ? 'Peso normal' : bmi < 30 ? 'Sobrepeso' : bmi < 35 ? 'Obesidade I' : bmi < 40 ? 'Obesidade II' : 'Obesidade III';
    return { bmi, cls, pos: Math.max(2, Math.min(98, ((bmi - 15) / 25) * 100)) };
  }
  function weightChart() {
    const h = S.body.hist.slice(-8);
    if (h.length < 2) return '';
    const vals = h.map((x) => x.w), mn = Math.min(...vals), mx = Math.max(...vals), w = 300, ht = 70;
    const pts = vals.map((v, i) => [12 + i * ((w - 24) / (vals.length - 1)), ht - 12 - ((v - mn) / ((mx - mn) || 1)) * (ht - 24)]);
    const line = smoothPath(pts), last = pts[pts.length - 1];
    return `<div class="chart"><svg viewBox="0 0 ${w} ${ht}" preserveAspectRatio="none" style="height:${ht}px"><path d="${line} L${last[0]},${ht} L${pts[0][0]},${ht} Z" fill="url(#gArea)"/>
      <path d="${line}" fill="none" stroke="url(#gLine)" stroke-width="2.4" stroke-linecap="round"/><circle cx="${last[0]}" cy="${last[1]}" r="5" fill="#3b82f6" stroke="#cfe3ff" stroke-width="1.5"/></svg></div>`;
  }
  function pageGym() {
    const wd = weekDates(), ti = todayIdx();
    const week = DAYS.map((d, i) => `<button class="${i === selDay ? 'on' : ''} ${i === ti ? 'today' : ''} ${gymDay(i).ex.length ? 'has' : ''}" data-act="sel-day" data-i="${i}">${d}<b>${wd[i].getDate()}</b></button>`).join('');
    const day = gymDay(selDay), pr = progOf();
    const totalSets = day.ex.reduce((a, e) => a + e.sets, 0);
    const doneSets = day.ex.reduce((a, e) => a + Math.min(e.sets, pr[e.id] || 0), 0);
    const pct = totalSets ? Math.round((doneSets / totalSets) * 100) : 0;
    const exs = day.ex.map((e) => {
      const n = Math.min(e.sets, pr[e.id] || 0), full = n >= e.sets;
      const dots = Array.from({ length: e.sets }, (_, i) => `<i class="${i < n ? 'on' : ''}">${i + 1}</i>`).join('');
      return `<div class="ex ${full ? 'done' : ''}"><div class="ex-top"><div><b>${esc(e.name)}</b>
        <span>${e.sets} séries × ${esc(e.reps)} reps${e.kg ? ' · ' + fmt(e.kg) + ' kg' : ''}</span></div>
        <div><button class="ico-btn" data-act="edit-ex" data-id="${e.id}" aria-label="Editar">${ico('edit')}</button></div></div>
        <div class="sets">${dots}</div>
        <div class="ex-bot"><div class="count">${n} / ${e.sets} <small>séries feitas</small></div>
          <button class="btn-undo" data-act="set-" data-id="${e.id}" aria-label="Desfazer série">${ico('minus')}</button>
          <button class="btn-set ${full ? 'ok' : ''}" data-act="set+" data-id="${e.id}">${full ? '✓ Concluído' : '+ Série'}</button></div></div>`;
    }).join('');
    const title = day.name ? esc(day.name) : `Treino de ${DAYS_FULL[selDay].split('-')[0]}`;
    const bi = bmiInfo();
    const histLast = S.body.hist.slice(-2);
    const diff = histLast.length === 2 ? histLast[1].w - histLast[0].w : null;
    return `<div class="page"><h1 class="page-title">Treinos</h1><p class="page-sub">Foco é a chave. Registre cada série.</p>
      <div class="week">${week}</div>
      <div class="card"><div class="wk-head"><div><h2>${title}${selDay === ti ? '<span class="badge">Hoje</span>' : ''}</h2>
        <p>${DAYS_FULL[selDay]}${totalSets ? ` · ${doneSets}/${totalSets} séries` : ''}</p></div>
        <button class="ico-btn" data-act="name-day" aria-label="Nome do treino">${ico('edit')}</button></div>
        ${totalSets ? `<div class="bar"><i style="width:${pct}%"></i></div>` : ''}
        ${exs || '<div class="empty">Nenhum exercício neste dia.<br>Adicione os exercícios do seu treino.</div>'}
        <button class="btn-main" data-act="add-ex">${ico('plus')} Adicionar exercício</button>
        ${day.ex.length ? `<div class="btn-row"><button class="btn-ghost" data-act="reset-sets">Zerar séries do dia</button></div>` : ''}
      </div>
      <div class="card"><div class="card-head"><div class="card-title">${ico('user')} Meu corpo</div>
        <button class="round-btn" data-act="profile" aria-label="Editar medidas">${ico('edit')}</button></div>
        <div class="tri"><div class="tile"><b>${S.body.weight ? fmt(S.body.weight) : '—'}</b><span>Peso (kg)</span></div>
          <div class="tile"><b>${S.body.height ? fmt(S.body.height, 0) : '—'}</b><span>Altura (cm)</span></div>
          <div class="tile"><b>${bi ? fmt(bi.bmi) : '—'}</b><span>IMC</span></div></div>
        ${bi ? `<div class="imc-bar"><i style="left:${bi.pos}%"></i></div><div class="imc-lbl"><span style="left:0">15</span><span style="left:14%">18,5</span><span style="left:40%">25</span><span style="left:60%">30</span><span style="left:80%">35</span><span style="left:100%">40</span></div>
          <p class="muted small" style="margin:10px 0 0">${bi.cls}${diff != null ? ` · ${diff <= 0 ? '↓' : '↑'} ${fmt(Math.abs(diff))} kg desde a última medida` : ''}</p>` : '<p class="muted small" style="margin:0">Informe seu peso e altura para calcular o IMC.</p>'}
        ${weightChart()}
        <button class="btn-ghost" data-act="profile">Atualizar peso e altura</button></div></div>`;
  }

  function stepper(key, unit, min, max) {
    return `<div class="stepper"><button data-act="step" data-k="${key}" data-d="-1" aria-label="Diminuir">${ico('minus')}</button><span>${S.settings[key]} ${unit}</span><button data-act="step" data-k="${key}" data-d="1" aria-label="Aumentar">${ico('plus')}</button></div>`;
  }
  const sw = (k) => `<button class="sw ${S.settings[k] ? 'on' : ''}" data-act="sw" data-k="${k}" role="switch" aria-checked="${!!S.settings[k]}"></button>`;
  function aboutBanner() {
    return `<div class="about"><div class="a1"><span class="spark">${icoF('spark')}</span><div><b>Pomorix</b><span>(Pronúncia: /pəˈmɔːrɪks/)</span></div></div>
      <div class="a2"><b>Significado:</b><br>Uma combinação de “Pomodoro” + “Rix”, sugerindo foco, produtividade e evolução.</div>
      <div class="a3">“Estude melhor. Conquiste mais.”</div></div>`;
  }
  function pageSettings() {
    return `<div class="page"><h1 class="page-title">Configurações</h1><p class="page-sub">Deixe o Pomorix do seu jeito</p>
      <div class="card"><div class="card-title">${ico('user')} Perfil</div>
        <div class="row"><div>${esc(S.name)}<small>${S.body.weight ? fmt(S.body.weight) + ' kg' : 'Peso —'} · ${S.body.height ? fmt(S.body.height, 0) + ' cm' : 'Altura —'}</small></div><button class="round-btn" data-act="profile">${ico('edit')}</button></div></div>
      <div class="card"><div class="card-title">${ico('tomato')} Pomodoro</div>
        <div class="row"><span>Foco</span>${stepper('focus', 'min')}</div>
        <div class="row"><span>Pausa curta</span>${stepper('short', 'min')}</div>
        <div class="row"><span>Pausa longa</span>${stepper('long', 'min')}</div>
        <div class="row"><span>Ciclos até a pausa longa</span>${stepper('cycles', '')}</div>
        <div class="row"><span>Meta semanal<small>Pomodoros por semana</small></span>${stepper('goal', '')}</div>
        <div class="row"><span>Iniciar pausas automaticamente</span>${sw('auto')}</div></div>
      <div class="card"><div class="card-title">${ico('bell')} Lembretes</div>
        <div class="row"><span>Notificações<small>Aviso ao fim de cada Pomodoro</small></span>${sw('notify')}</div>
        <div class="row"><span>Som</span>${sw('sound')}</div>
        <div class="row"><span>Vibração</span>${sw('vibrate')}</div>
        <div class="row"><span>Avisar tarefas pendentes<small>Notificação diária com a lista do que falta</small></span>${sw('daily')}</div>
        <div class="row"><span>Horário das pendências</span><input type="time" id="dailyTime" value="${esc(S.settings.dailyTime)}" style="background:rgba(255,255,255,.08);border:1px solid rgba(180,165,255,.3);border-radius:12px;padding:8px 10px;color:#fff;font-size:15px"></div>
        <div class="row"><span>Avisar treino do dia<small>Mostra o treino que você cadastrou</small></span>${sw('gym')}</div>
        <div class="row"><span>Horário do treino</span><input type="time" id="gymTime" value="${esc(S.settings.gymTime)}" style="background:rgba(255,255,255,.08);border:1px solid rgba(180,165,255,.3);border-radius:12px;padding:8px 10px;color:#fff;font-size:15px"></div></div>
      <div class="card"><div class="card-title">${ico('spark')} Sobre</div>${aboutBanner()}
        <div class="row" data-act="welcome"><span>Rever boas-vindas</span>${ico('chev')}</div>
        <div class="row danger" data-act="wipe"><span>Apagar todos os dados</span>${ico('trash')}</div></div>
      <p class="muted small" style="text-align:center">Pomorix · versão 1.0.0</p></div>`;
  }

  function pageWelcome() {
    return `<div class="page welcome">
      <div class="hero"><img src="assets/logo-big.png" alt="Pomorix"><div class="wm-big">Pomorix</div><div class="sl">Focus. Study. Achieve.</div></div>
      <p class="lead">Seu aliado inteligente para estudar com foco, no ritmo certo.</p>
      <div class="pill-card"><span>${icoF('spark')}</span><span>Técnica Pomodoro com um toque de inteligência.</span></div>
      <ul class="feat">
        <li><span style="color:#4aa3ff;filter:drop-shadow(0 0 8px #3b82f6)">${ico('checkc')}</span>Organize suas tarefas</li>
        <li><span style="color:#ff4d5e;filter:drop-shadow(0 0 8px #ff4d5e)">${ico('tomato')}</span>Siga seu ciclo Pomodoro</li>
        <li><span style="color:#8b8cff;filter:drop-shadow(0 0 8px #6366f1)">${ico('bell')}</span>Receba lembretes personalizados</li>
        <li><span style="color:#e060ff;filter:drop-shadow(0 0 8px #d946ef)">${ico('bars')}</span>Acompanhe seu progresso</li>
        <li><span style="color:#a06bff;filter:drop-shadow(0 0 8px #8b5cf6)">${icoF('star')}</span>Conquiste seus objetivos</li>
      </ul>
      <button class="cta" data-act="start">Comece Agora ${ico('arrow')}</button>
      <div class="key">${ico('lock')} Foco é a chave.</div>
      ${aboutBanner()}</div>`;
  }

  const TABS = [['home', 'Início', 'home'], ['tasks', 'Tarefas', 'tasks'], ['stats', 'Estatísticas', 'stats'], ['gym', 'Treinos', 'gym'], ['settings', 'Configurações', 'settings']];
  function render() {
    const v = $('#view'); const sc = v.scrollTop;
    const tb = $('#tabbar');
    if (!S.onboarded) { v.innerHTML = pageWelcome(); tb.style.display = 'none'; v.scrollTop = 0; return; }
    tb.style.display = '';
    v.innerHTML = ({ home: pageHome, tasks: pageTasks, stats: pageStats, gym: pageGym, settings: pageSettings })[page]();
    tb.innerHTML = TABS.map(([id, l, ic]) => `<button class="${page === id ? 'on' : ''}" data-act="go" data-p="${id}">${ico(ic)}<span>${l}</span></button>`).join('');
    v.scrollTop = sc; save(); updateTimer();
  }
  function go(p) { page = p; $('#view').scrollTop = 0; render(); }

  /* ================= sheets ================= */
  function sheet(html) {
    const r = $('#sheet-root');
    r.innerHTML = `<div class="ov" data-act="close"></div><div class="sheet"><div class="grab"></div>${html}</div>`;
    const f = $('input:not([type=hidden])', r); void f;
  }
  function closeSheet() { $('#sheet-root').innerHTML = ''; }
  function openReminder(r) {
    sheet(`<div class="alert"><h3>Lembretes Inteligentes</h3><div class="reminder-in"><div class="rem-ic">${ico('bell', 'f')}</div><div><b>${esc(r.t)}</b><p>${esc(r.b)}</p></div></div>
      <button class="btn-main" data-act="close">Entendi</button></div>`);
  }
  function confirmSheet(msg, act) {
    sheet(`<h3>${esc(msg)}</h3><button class="btn-main" data-act="${act}" style="border-color:#ff7b88">Confirmar</button><button class="btn-ghost" data-act="close">Cancelar</button>`);
  }
  function taskForm(t) {
    sheet(`<h3>${t ? 'Editar tarefa' : 'Nova tarefa'}</h3><form data-form="task" data-id="${t ? t.id : ''}">
      <label class="fld"><span>O que você precisa fazer?</span><input name="t" required maxlength="80" value="${t ? esc(t.t) : ''}" placeholder="Ex.: Resolver lista de Matemática" autocomplete="off"></label>
      <button class="btn-main" type="submit">Salvar</button>
      ${t ? '<button class="btn-ghost danger" type="button" data-act="del-task" data-id="' + t.id + '">Excluir tarefa</button>' : ''}</form>`);
  }
  function exForm(e) {
    sheet(`<h3>${e ? 'Editar exercício' : 'Novo exercício'} · ${DAYS_FULL[selDay]}</h3><form data-form="ex" data-id="${e ? e.id : ''}">
      <label class="fld"><span>Exercício</span><input name="name" required maxlength="60" value="${e ? esc(e.name) : ''}" placeholder="Ex.: Supino reto" autocomplete="off"></label>
      <div class="two"><label class="fld"><span>Séries</span><input name="sets" type="number" inputmode="numeric" min="1" max="20" required value="${e ? e.sets : 4}"></label>
      <label class="fld"><span>Repetições</span><input name="reps" required maxlength="10" value="${e ? esc(e.reps) : '12'}" placeholder="12 ou 8-12"></label></div>
      <label class="fld"><span>Carga (kg) – opcional</span><input name="kg" type="text" inputmode="decimal" value="${e && e.kg ? e.kg : ''}" placeholder="Ex.: 40"></label>
      <button class="btn-main" type="submit">Salvar</button>
      ${e ? '<button class="btn-ghost danger" type="button" data-act="del-ex" data-id="' + e.id + '">Excluir exercício</button>' : ''}</form>`);
  }
  function profileForm() {
    sheet(`<h3>Meu perfil</h3><form data-form="profile">
      <label class="fld"><span>Nome</span><input name="name" maxlength="30" value="${esc(S.name)}" autocomplete="off"></label>
      <div class="two"><label class="fld"><span>Peso (kg)</span><input name="w" type="text" inputmode="decimal" value="${S.body.weight || ''}" placeholder="Ex.: 72,5"></label>
      <label class="fld"><span>Altura (cm)</span><input name="h" type="text" inputmode="decimal" value="${S.body.height || ''}" placeholder="Ex.: 175"></label></div>
      <button class="btn-main" type="submit">Salvar</button></form>`);
  }

  /* ================= eventos ================= */
  document.addEventListener('click', (ev) => {
    const el = ev.target.closest('[data-act]'); if (!el) return;
    const a = el.dataset.act, id = el.dataset.id;
    const findT = () => S.tasks.find((t) => t.id === id);
    const dayEx = () => gymDay(selDay).ex.find((e) => e.id === id);
    switch (a) {
      case 'close': closeSheet(); break;
      case 'go': go(el.dataset.p); break;
      case 'go-home': go('home'); break;
      case 'start': S.onboarded = true; page = 'home'; save(); $('#view').scrollTop = 0; render(); break;
      case 'welcome': S.onboarded = false; $('#view').scrollTop = 0; render(); break;
      case 'toggle': S.timer.running ? pauseTimer() : startTimer(); break;
      case 'pause': pauseTimer(); break;
      case 'reset': resetTimer(); break;
      case 'skip': skipTimer(); render(); break;
      case 'profile': profileForm(); break;
      case 'tick': { const t = findT(); if (t) { t.d = !t.d; save(); render(); } break; }
      case 'add-task': taskForm(null); break;
      case 'edit-task': taskForm(findT()); break;
      case 'del-task': S.tasks = S.tasks.filter((t) => t.id !== id); closeSheet(); render(); break;
      case 'all-tasks': showAllTasks = !showAllTasks; render(); break;
      case 'clear-rem': S.lastReminder = null; render(); break;
      case 'sel-day': selDay = +el.dataset.i; render(); break;
      case 'name-day': {
        sheet(`<h3>Nome do treino · ${DAYS_FULL[selDay]}</h3><form data-form="dayname"><label class="fld"><span>Ex.: Peito e Tríceps</span>
          <input name="n" maxlength="40" value="${esc(gymDay(selDay).name)}" autocomplete="off"></label><button class="btn-main" type="submit">Salvar</button></form>`);
        break;
      }
      case 'add-ex': exForm(null); break;
      case 'edit-ex': exForm(dayEx()); break;
      case 'del-ex': { const d = gymDay(selDay); d.ex = d.ex.filter((e) => e.id !== id); delete progOf()[id]; closeSheet(); render(); break; }
      case 'set+': { const e = dayEx(); if (e) { const p = progOf(); if ((p[id] || 0) < e.sets) { p[id] = (p[id] || 0) + 1; beep(0.1, 740); if (S.settings.vibrate && navigator.vibrate) navigator.vibrate(30); } save(); render(); } break; }
      case 'set-': { const p = progOf(); if (p[id] > 0) p[id]--; save(); render(); break; }
      case 'reset-sets': { gymDay(selDay).ex.forEach((e) => delete progOf()[e.id]); save(); render(); break; }
      case 'step': {
        const k = el.dataset.k, d = +el.dataset.d, lim = { focus: [1, 120, 5], short: [1, 60, 1], long: [1, 90, 5], cycles: [2, 10, 1], goal: [5, 200, 5] }[k];
        S.settings[k] = Math.max(lim[0], Math.min(lim[1], S.settings[k] + d * lim[2]));
        if (!S.timer.running && ['focus', 'short', 'long'].includes(k)) S.timer.left = dur(S.timer.mode);
        save(); render(); break;
      }
      case 'sw': { const k = el.dataset.k; S.settings[k] = !S.settings[k]; if (k === 'notify' && S.settings[k]) notifPerm(); save(); render(); scheduleDaily(); break; }
      case 'wipe': confirmSheet('Apagar todos os dados do app?', 'wipe-ok'); break;
      case 'wipe-ok': try { localStorage.removeItem(KEY); } catch (e) { /* */ } S = DEF(); closeSheet(); page = 'home'; notifCancel(1); render(); break;
      default: break;
    }
  });

  document.addEventListener('submit', (ev) => {
    const f = ev.target.closest('form[data-form]'); if (!f) return;
    ev.preventDefault();
    const fd = new FormData(f), id = f.dataset.id;
    switch (f.dataset.form) {
      case 'task': {
        const t = String(fd.get('t') || '').trim(); if (!t) return;
        if (id) { const x = S.tasks.find((k) => k.id === id); if (x) x.t = t; } else S.tasks.push({ id: uid(), t, d: false });
        break;
      }
      case 'ex': {
        const o = { name: String(fd.get('name')).trim(), sets: Math.max(1, Math.min(20, parseInt(fd.get('sets'), 10) || 1)), reps: String(fd.get('reps')).trim() || '10', kg: num(fd.get('kg'), 0) };
        const d = gymDay(selDay);
        if (id) Object.assign(d.ex.find((e) => e.id === id) || {}, o); else d.ex.push(Object.assign({ id: uid() }, o));
        break;
      }
      case 'dayname': gymDay(selDay).name = String(fd.get('n')).trim(); break;
      case 'profile': {
        S.name = String(fd.get('name')).trim() || 'Estudante';
        const w = num(fd.get('w'), null), h = num(fd.get('h'), null);
        if (h) S.body.height = h;
        if (w) {
          S.body.weight = w; const k = todayKey(), e = S.body.hist.find((x) => x.d === k);
          if (e) e.w = w; else S.body.hist.push({ d: k, w });
        }
        break;
      }
      default: break;
    }
    save(); closeSheet(); render();
  });

  document.addEventListener('change', (ev) => {
    if (ev.target.id === 'dailyTime') { S.settings.dailyTime = ev.target.value || '19:00'; save(); }
    if (ev.target.id === 'gymTime') { S.settings.gymTime = ev.target.value || '17:00'; save(); }
  });

  /* ================= boot ================= */
  if (S.timer.running && Date.now() >= S.timer.endAt) { S.timer.running = false; S.timer.left = 0; }
  render();
  if (S.timer.left === 0 && !S.timer.running) finishTimer();
  scheduleDaily();
  try { const sp = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.SplashScreen; if (sp) sp.hide(); } catch (e) { /* ignore */ }
})();
