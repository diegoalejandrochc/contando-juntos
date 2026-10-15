"use strict";

const CIRCUMFERENCE = 2 * Math.PI * 112;

const translations = {
  es: {
    tagline: "Tu tiempo, paso a paso.",
    settings: "Ajustes",
    eyebrow: "TEMPORIZADOR VISUAL DE AULA",
    welcomeTitle: "Saber cuánto falta puede hacer el día más tranquilo.",
    welcomeCopy: "Elige una actividad, mira cómo avanza el tiempo y recibe señales suaves antes de cambiar a lo siguiente.",
    stepOne: "1 · PREPARA LA RUTINA",
    routineTitle: "¿Qué hacemos ahora y qué viene después?",
    predictable: "Predecible y claro",
    nowLabel: "Ahora",
    nextLabel: "Después",
    nowPlaceholder: "Ej. Lectura",
    nextPlaceholder: "Ej. Recreo",
    stepTwo: "2 · ELIGE EL TIEMPO",
    timerTitle: "¿Cuánto tiempo necesitamos?",
    minutesShort: "min",
    secondsShort: "s",
    minutes: "Minutos",
    seconds: "Segundos",
    customTime: "Otro tiempo:",
    ready: "Listos cuando tú quieras",
    defaultNow: "Nuestra actividad",
    defaultNext: "Lo siguiente",
    phaseStartTitle: "Empezamos",
    phaseStartCopy: "Hay bastante tiempo.",
    phaseMiddleTitle: "En camino",
    phaseMiddleCopy: "Ya avanzamos una buena parte.",
    phaseSoonTitle: "Casi terminamos",
    phaseSoonCopy: "Prepárate para el cambio.",
    phaseDoneTitle: "Terminamos",
    phaseDoneCopy: "Buen trabajo. Ahora sigue lo siguiente.",
    start: "Empezar",
    pause: "Pausar",
    continue: "Continuar",
    reset: "Reiniciar",
    music: "Música suave",
    motion: "Movimiento",
    off: "Apagada",
    on: "Encendida",
    gentle: "Suave",
    reduced: "Reducido",
    almostThere: "Ya casi.",
    transitionCopy: "Vamos terminando con calma.",
    transitionWithNext: "Vamos terminando con calma. Después viene: {next}.",
    completeLabel: "TIEMPO COMPLETADO",
    completeTitle: "¡Terminamos!",
    completeText: "Buen trabajo. Puedes pasar a la siguiente actividad cuando estés listo.",
    completeWithNext: "Buen trabajo. Ahora sigue: {next}.",
    again: "Usar otra vez",
    whyEyebrow: "DISEÑADO PARA ACOMPAÑAR, NO APRESURAR",
    whyTitle: "Pocas sorpresas. Señales claras. Opciones sensoriales.",
    principleVisualTitle: "Tiempo visible",
    principleVisualCopy: "El círculo, los números y las etapas muestran la misma información de tres formas.",
    principleSoundTitle: "Sonido opcional",
    principleSoundCopy: "La música está apagada por defecto y las señales son cortas y suaves.",
    principleTransitionTitle: "Transiciones anticipadas",
    principleTransitionCopy: "Una señal previa ayuda a saber que la actividad está por cambiar.",
    preferences: "PREFERENCIAS",
    settingsTitle: "Ajusta la experiencia",
    volume: "Volumen",
    warningLabel: "Aviso antes de terminar",
    warning30: "30 segundos antes",
    warning60: "1 minuto antes",
    warning120: "2 minutos antes",
    warning300: "5 minutos antes",
    warningHelp: "En temporizadores cortos, el aviso se ajusta automáticamente para no empezar demasiado pronto.",
    cueSounds: "Señales de sonido",
    cueSoundsHelp: "Campanitas suaves al iniciar, avisar y terminar.",
    keepAwake: "Mantener pantalla activa",
    keepAwakeHelp: "Evita que la pantalla se duerma durante el temporizador cuando el navegador lo permite.",
    privacyNote: "Tus preferencias se guardan solo en este dispositivo. La app no recopila datos.",
    footer: "Hecho para rutinas de aula más claras y amables.",
    activeStart: "Empezamos. Hay bastante tiempo.",
    activeMiddle: "Vas avanzando muy bien.",
    activeSoon: "Ya casi. Vamos terminando con calma.",
    activeDone: "Terminamos. Buen trabajo.",
    paused: "En pausa",
    timerStarted: "El temporizador comenzó.",
    timerPaused: "El temporizador está en pausa.",
    timerResumed: "El temporizador continúa.",
    timerReset: "El temporizador se reinició.",
    warningAnnouncement: "Falta poco para terminar. Prepárate para el cambio.",
    finishedAnnouncement: "Tiempo completado. Buen trabajo.",
    invalidTime: "Elige un tiempo mayor que cero.",
    languageLabel: "Cambiar idioma a inglés",
    closeSettings: "Cerrar ajustes",
    quickDurations: "Duraciones rápidas",
    customDuration: "Tiempo personalizado",
    timerStages: "Etapas del temporizador",
    sensoryControls: "Controles sensoriales"
  },
  en: {
    tagline: "Your time, step by step.",
    settings: "Settings",
    eyebrow: "VISUAL CLASSROOM TIMER",
    welcomeTitle: "Knowing what comes next can make the day feel calmer.",
    welcomeCopy: "Choose an activity, watch time move forward, and get gentle cues before it is time to transition.",
    stepOne: "1 · SET THE ROUTINE",
    routineTitle: "What are we doing now, and what comes next?",
    predictable: "Predictable & clear",
    nowLabel: "Now",
    nextLabel: "Next",
    nowPlaceholder: "E.g. Reading",
    nextPlaceholder: "E.g. Recess",
    stepTwo: "2 · CHOOSE THE TIME",
    timerTitle: "How much time do we need?",
    minutesShort: "min",
    secondsShort: "sec",
    minutes: "Minutes",
    seconds: "Seconds",
    customTime: "Custom time:",
    ready: "Ready when you are",
    defaultNow: "Our activity",
    defaultNext: "What comes next",
    phaseStartTitle: "Getting started",
    phaseStartCopy: "There is plenty of time.",
    phaseMiddleTitle: "On our way",
    phaseMiddleCopy: "We have made good progress.",
    phaseSoonTitle: "Almost finished",
    phaseSoonCopy: "Get ready for the transition.",
    phaseDoneTitle: "Finished",
    phaseDoneCopy: "Nice work. Now comes the next activity.",
    start: "Start",
    pause: "Pause",
    continue: "Continue",
    reset: "Reset",
    music: "Calm music",
    motion: "Motion",
    off: "Off",
    on: "On",
    gentle: "Gentle",
    reduced: "Reduced",
    almostThere: "Almost there.",
    transitionCopy: "We are wrapping up calmly.",
    transitionWithNext: "We are wrapping up calmly. Next is: {next}.",
    completeLabel: "TIME COMPLETE",
    completeTitle: "All done!",
    completeText: "Nice work. You can move to the next activity when you are ready.",
    completeWithNext: "Nice work. Next is: {next}.",
    again: "Use again",
    whyEyebrow: "DESIGNED TO SUPPORT, NOT RUSH",
    whyTitle: "Fewer surprises. Clear cues. Sensory choices.",
    principleVisualTitle: "Visible time",
    principleVisualCopy: "The ring, numbers, and stages communicate the same information in three different ways.",
    principleSoundTitle: "Optional sound",
    principleSoundCopy: "Music is off by default, and audio cues are short and gentle.",
    principleTransitionTitle: "Transition warning",
    principleTransitionCopy: "An early cue helps make the upcoming change more predictable.",
    preferences: "PREFERENCES",
    settingsTitle: "Adjust the experience",
    volume: "Volume",
    warningLabel: "Transition warning",
    warning30: "30 seconds before",
    warning60: "1 minute before",
    warning120: "2 minutes before",
    warning300: "5 minutes before",
    warningHelp: "For short timers, the warning adjusts automatically so it does not begin too early.",
    cueSounds: "Audio cues",
    cueSoundsHelp: "Gentle chimes at start, warning, and finish.",
    keepAwake: "Keep screen awake",
    keepAwakeHelp: "Prevents the screen from sleeping while the timer runs when supported by the browser.",
    privacyNote: "Your preferences are saved only on this device. The app does not collect data.",
    footer: "Built for clearer, kinder classroom routines.",
    activeStart: "We are getting started. There is plenty of time.",
    activeMiddle: "You are making good progress.",
    activeSoon: "Almost there. We are wrapping up calmly.",
    activeDone: "All done. Nice work.",
    paused: "Paused",
    timerStarted: "The timer started.",
    timerPaused: "The timer is paused.",
    timerResumed: "The timer is continuing.",
    timerReset: "The timer was reset.",
    warningAnnouncement: "There is not much time left. Get ready for the transition.",
    finishedAnnouncement: "Time complete. Nice work.",
    invalidTime: "Choose a time greater than zero.",
    languageLabel: "Switch language to Spanish",
    closeSettings: "Close settings",
    quickDurations: "Quick durations",
    customDuration: "Custom time",
    timerStages: "Timer stages",
    sensoryControls: "Sensory controls"
  }
};

const state = {
  lang: localStorage.getItem("cj-lang") || "es",
  totalSeconds: 600,
  remainingSeconds: 600,
  running: false,
  hasStarted: false,
  endTimestamp: null,
  intervalId: null,
  warningPlayed: false,
  lastPhase: "start",
  reducedMotion: localStorage.getItem("cj-reduced-motion") === "true",
  musicEnabled: false,
  cueSounds: localStorage.getItem("cj-cue-sounds") !== "false",
  volume: Number(localStorage.getItem("cj-volume") ?? 35) / 100,
  warningSeconds: Number(localStorage.getItem("cj-warning-seconds") ?? 60),
  keepAwake: localStorage.getItem("cj-keep-awake") === "true",
  wakeLock: null,
  audioContext: null,
  musicGain: null,
  musicTimer: null,
  musicStep: 0
};

const els = {
  languageButton: document.querySelector("#languageButton"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsPanel: document.querySelector("#settingsPanel"),
  settingsBackdrop: document.querySelector("#settingsBackdrop"),
  closeSettingsButton: document.querySelector("#closeSettingsButton"),
  currentActivity: document.querySelector("#currentActivity"),
  nextActivity: document.querySelector("#nextActivity"),
  currentActivityDisplay: document.querySelector("#currentActivityDisplay"),
  nextActivityDisplay: document.querySelector("#nextActivityDisplay"),
  presetButtons: [...document.querySelectorAll(".preset-button")],
  minutesInput: document.querySelector("#minutesInput"),
  secondsInput: document.querySelector("#secondsInput"),
  timerVisual: document.querySelector("#timerVisual"),
  progressCircle: document.querySelector("#progressCircle"),
  timeDisplay: document.querySelector("#timeDisplay"),
  phaseIcon: document.querySelector("#phaseIcon"),
  phaseText: document.querySelector("#phaseText"),
  progressSteps: [...document.querySelectorAll(".progress-step")],
  startPauseButton: document.querySelector("#startPauseButton"),
  startPauseIcon: document.querySelector("#startPauseIcon"),
  startPauseText: document.querySelector("#startPauseText"),
  resetButton: document.querySelector("#resetButton"),
  musicButton: document.querySelector("#musicButton"),
  musicState: document.querySelector("#musicState"),
  motionButton: document.querySelector("#motionButton"),
  motionState: document.querySelector("#motionState"),
  transitionBanner: document.querySelector("#transitionBanner"),
  transitionTitle: document.querySelector("#transitionTitle"),
  transitionMessage: document.querySelector("#transitionMessage"),
  completionCard: document.querySelector("#completionCard"),
  completionTitle: document.querySelector("#completionTitle"),
  completionText: document.querySelector("#completionText"),
  againButton: document.querySelector("#againButton"),
  screenReaderStatus: document.querySelector("#screenReaderStatus"),
  volumeInput: document.querySelector("#volumeInput"),
  volumeOutput: document.querySelector("#volumeOutput"),
  warningSelect: document.querySelector("#warningSelect"),
  cueSoundsToggle: document.querySelector("#cueSoundsToggle"),
  keepAwakeToggle: document.querySelector("#keepAwakeToggle")
};

function t(key) {
  return translations[state.lang][key] || key;
}

function interpolate(template, values) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template
  );
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[state.lang][key]) node.textContent = translations[state.lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.placeholder = translations[state.lang][key];
  });

  els.languageButton.textContent = state.lang === "es" ? "EN" : "ES";
  els.languageButton.setAttribute("aria-label", t("languageLabel"));
  els.closeSettingsButton.setAttribute("aria-label", t("closeSettings"));
  document.querySelector(".preset-row").setAttribute("aria-label", t("quickDurations"));
  document.querySelector(".custom-time").setAttribute("aria-label", t("customDuration"));
  document.querySelector(".progress-steps").setAttribute("aria-label", t("timerStages"));
  document.querySelector(".sensory-controls").setAttribute("aria-label", t("sensoryControls"));

  updateActivityDisplays();
  updateButtonLabels();
  updateSensoryLabels();
  updateVisuals(false);
  updateTransitionCopy();
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.ceil(seconds));
  const minutes = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function syncDurationFromInputs() {
  if (state.running) return;

  const minutes = Math.max(0, Number.parseInt(els.minutesInput.value || "0", 10));
  const seconds = Math.min(59, Math.max(0, Number.parseInt(els.secondsInput.value || "0", 10)));
  const nextDuration = minutes * 60 + seconds;

  state.totalSeconds = Math.min(120 * 60 + 59, nextDuration);
  state.remainingSeconds = state.totalSeconds;
  state.hasStarted = false;
  state.warningPlayed = false;
  state.lastPhase = "start";

  els.completionCard.hidden = true;
  els.transitionBanner.hidden = true;
  clearPresetSelection();
  updateVisuals(false);
}

function setDuration(seconds, selectButton = true) {
  if (state.running) pauseTimer();

  state.totalSeconds = seconds;
  state.remainingSeconds = seconds;
  state.hasStarted = false;
  state.warningPlayed = false;
  state.lastPhase = "start";

  els.minutesInput.value = Math.floor(seconds / 60);
  els.secondsInput.value = seconds % 60;
  els.completionCard.hidden = true;
  els.transitionBanner.hidden = true;

  if (selectButton) {
    els.presetButtons.forEach((button) => {
      button.classList.toggle("selected", Number(button.dataset.seconds) === seconds);
    });
  }

  updateVisuals(false);
}

function clearPresetSelection() {
  els.presetButtons.forEach((button) => button.classList.remove("selected"));
}

function effectiveWarningSeconds() {
  const maximumReasonableWarning = Math.max(5, Math.floor(state.totalSeconds * 0.22));
  return Math.min(state.warningSeconds, maximumReasonableWarning);
}

function currentPhase() {
  if (state.remainingSeconds <= 0 && state.hasStarted) return "done";

  const ratio = state.totalSeconds > 0 ? state.remainingSeconds / state.totalSeconds : 1;
  const warning = effectiveWarningSeconds();

  if (state.hasStarted && state.remainingSeconds <= warning) return "soon";
  if (ratio <= 0.55) return "middle";
  return "start";
}

function phaseCopy(phase) {
  if (!state.hasStarted) return { icon: "☀", text: t("ready") };
  if (!state.running && state.remainingSeconds > 0) return { icon: "Ⅱ", text: t("paused") };

  const values = {
    start: { icon: "☀", text: t("activeStart") },
    middle: { icon: "➜", text: t("activeMiddle") },
    soon: { icon: "★", text: t("activeSoon") },
    done: { icon: "✓", text: t("activeDone") }
  };

  return values[phase];
}

function updateVisuals(announcePhase = true) {
  const phase = currentPhase();
  const progress = state.totalSeconds > 0
    ? 1 - state.remainingSeconds / state.totalSeconds
    : 0;
  const offset = CIRCUMFERENCE * Math.min(1, Math.max(0, progress));

  els.progressCircle.style.strokeDasharray = String(CIRCUMFERENCE);
  els.progressCircle.style.strokeDashoffset = String(offset);
  els.timeDisplay.textContent = formatTime(state.remainingSeconds);

  els.timerVisual.classList.remove("phase-start", "phase-middle", "phase-soon", "phase-done");
  els.timerVisual.classList.add(`phase-${phase}`);
  els.timerVisual.classList.toggle("running", state.running);

  const copy = phaseCopy(phase);
  els.phaseIcon.textContent = copy.icon;
  els.phaseText.textContent = copy.text;

  const order = ["start", "middle", "soon", "done"];
  const currentIndex = order.indexOf(phase);
  els.progressSteps.forEach((step) => {
    const stepIndex = order.indexOf(step.dataset.phase);
    step.classList.toggle("active", step.dataset.phase === phase);
    step.classList.toggle("complete", stepIndex < currentIndex);
  });

  const showWarning = state.hasStarted && state.remainingSeconds > 0 && state.remainingSeconds <= effectiveWarningSeconds();
  els.transitionBanner.hidden = !showWarning;

  if (announcePhase && phase !== state.lastPhase && state.running) {
    if (phase === "middle") announce(t("activeMiddle"));
    if (phase === "soon") announce(t("warningAnnouncement"));
  }
  state.lastPhase = phase;

  updateButtonLabels();
}

function updateActivityDisplays() {
  const now = els.currentActivity.value.trim();
  const next = els.nextActivity.value.trim();
  els.currentActivityDisplay.textContent = now || t("defaultNow");
  els.nextActivityDisplay.textContent = next || t("defaultNext");
  updateTransitionCopy();
}

function updateTransitionCopy() {
  const next = els.nextActivity.value.trim();
  els.transitionTitle.textContent = t("almostThere");
  els.transitionMessage.textContent = next
    ? interpolate(t("transitionWithNext"), { next })
    : t("transitionCopy");

  els.completionTitle.textContent = t("completeTitle");
  els.completionText.textContent = next
    ? interpolate(t("completeWithNext"), { next })
    : t("completeText");
}

function updateButtonLabels() {
  if (state.running) {
    els.startPauseIcon.textContent = "Ⅱ";
    els.startPauseText.textContent = t("pause");
  } else if (state.hasStarted && state.remainingSeconds > 0 && state.remainingSeconds < state.totalSeconds) {
    els.startPauseIcon.textContent = "▶";
    els.startPauseText.textContent = t("continue");
  } else {
    els.startPauseIcon.textContent = "▶";
    els.startPauseText.textContent = t("start");
  }
}

function updateSensoryLabels() {
  els.musicButton.setAttribute("aria-pressed", String(state.musicEnabled));
  els.musicState.textContent = state.musicEnabled ? t("on") : t("off");
  els.motionButton.setAttribute("aria-pressed", String(state.reducedMotion));
  els.motionState.textContent = state.reducedMotion ? t("reduced") : t("gentle");
  document.body.classList.toggle("reduced-motion", state.reducedMotion);
}

function announce(message) {
  els.screenReaderStatus.textContent = "";
  window.setTimeout(() => {
    els.screenReaderStatus.textContent = message;
  }, 20);
}

function startTimer() {
  if (state.totalSeconds <= 0) {
    announce(t("invalidTime"));
    els.minutesInput.focus();
    return;
  }

  if (state.remainingSeconds <= 0) {
    state.remainingSeconds = state.totalSeconds;
    state.warningPlayed = false;
    els.completionCard.hidden = true;
  }

  state.running = true;
  state.hasStarted = true;
  state.endTimestamp = Date.now() + state.remainingSeconds * 1000;
  els.minutesInput.disabled = true;
  els.secondsInput.disabled = true;
  els.presetButtons.forEach((button) => (button.disabled = true));

  if (!state.intervalId) {
    state.intervalId = window.setInterval(tick, 250);
  }

  if (state.cueSounds) playCue("start");
  if (state.keepAwake) requestWakeLock();
  if (state.musicEnabled) startMusic();

  announce(state.remainingSeconds === state.totalSeconds ? t("timerStarted") : t("timerResumed"));
  updateVisuals(false);
}

function pauseTimer() {
  if (!state.running) return;
  syncRemainingFromClock();
  state.running = false;
  state.endTimestamp = null;
  stopInterval();
  releaseWakeLock();
  stopMusic(false);
  announce(t("timerPaused"));
  updateVisuals(false);
}

function tick() {
  if (!state.running) return;
  syncRemainingFromClock();

  const warning = effectiveWarningSeconds();
  if (!state.warningPlayed && state.remainingSeconds <= warning && state.remainingSeconds > 0) {
    state.warningPlayed = true;
    if (state.cueSounds) playCue("warning");
  }

  if (state.remainingSeconds <= 0) {
    finishTimer();
    return;
  }

  updateVisuals(true);
}

function syncRemainingFromClock() {
  if (!state.endTimestamp) return;
  state.remainingSeconds = Math.max(0, (state.endTimestamp - Date.now()) / 1000);
}

function finishTimer() {
  state.remainingSeconds = 0;
  state.running = false;
  state.hasStarted = true;
  state.endTimestamp = null;
  stopInterval();
  stopMusic(false);
  releaseWakeLock();

  els.minutesInput.disabled = false;
  els.secondsInput.disabled = false;
  els.presetButtons.forEach((button) => (button.disabled = false));
  els.transitionBanner.hidden = true;
  els.completionCard.hidden = false;
  updateTransitionCopy();

  if (state.cueSounds) playCue("done");
  announce(t("finishedAnnouncement"));
  updateVisuals(false);

  if (!state.reducedMotion) {
    els.completionCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

function resetTimer(announceReset = true) {
  state.running = false;
  state.hasStarted = false;
  state.remainingSeconds = state.totalSeconds;
  state.endTimestamp = null;
  state.warningPlayed = false;
  state.lastPhase = "start";
  stopInterval();
  stopMusic(false);
  releaseWakeLock();

  els.minutesInput.disabled = false;
  els.secondsInput.disabled = false;
  els.presetButtons.forEach((button) => (button.disabled = false));
  els.transitionBanner.hidden = true;
  els.completionCard.hidden = true;

  if (announceReset) announce(t("timerReset"));
  updateVisuals(false);
}

function stopInterval() {
  if (state.intervalId) {
    window.clearInterval(state.intervalId);
    state.intervalId = null;
  }
}

function ensureAudioContext() {
  if (!state.audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;
    state.audioContext = new AudioContext();
  }

  if (state.audioContext.state === "suspended") {
    state.audioContext.resume();
  }

  return state.audioContext;
}

function playTone(frequency, startAt, duration, gainValue, type = "sine") {
  const ctx = ensureAudioContext();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, gainValue * state.volume), startAt + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(gain).connect(ctx.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.05);
}

function playCue(kind) {
  if (state.volume <= 0) return;
  const ctx = ensureAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime + 0.02;

  if (kind === "start") {
    playTone(523.25, now, 0.28, 0.18);
    playTone(659.25, now + 0.12, 0.34, 0.14);
  }

  if (kind === "warning") {
    playTone(440, now, 0.34, 0.13);
    playTone(554.37, now + 0.18, 0.36, 0.12);
  }

  if (kind === "done") {
    playTone(523.25, now, 0.32, 0.17);
    playTone(659.25, now + 0.16, 0.36, 0.16);
    playTone(783.99, now + 0.34, 0.55, 0.14);
  }
}

function startMusic() {
  const ctx = ensureAudioContext();
  if (!ctx || state.musicTimer) return;

  if (!state.musicGain) {
    state.musicGain = ctx.createGain();
    state.musicGain.gain.value = 0.55;
    state.musicGain.connect(ctx.destination);
  }

  const notes = [261.63, 329.63, 392.0, 329.63, 293.66, 349.23, 440.0, 349.23];

  const playMusicNote = () => {
    if (!state.musicEnabled || !state.running) return;
    const now = ctx.currentTime;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    oscillator.type = "sine";
    oscillator.frequency.value = notes[state.musicStep % notes.length] / 2;
    filter.type = "lowpass";
    filter.frequency.value = 900;

    const musicVolume = Math.max(0.0002, state.volume * 0.065);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(musicVolume, now + 0.35);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.35);

    oscillator.connect(filter).connect(gain).connect(state.musicGain);
    oscillator.start(now);
    oscillator.stop(now + 2.45);
    state.musicStep += 1;
  };

  playMusicNote();
  state.musicTimer = window.setInterval(playMusicNote, 2300);
}

function stopMusic(disable = true) {
  if (state.musicTimer) {
    window.clearInterval(state.musicTimer);
    state.musicTimer = null;
  }
  if (disable) state.musicEnabled = false;
  updateSensoryLabels();
}

async function requestWakeLock() {
  if (!("wakeLock" in navigator) || state.wakeLock || !state.running) return;
  try {
    state.wakeLock = await navigator.wakeLock.request("screen");
    state.wakeLock.addEventListener("release", () => {
      state.wakeLock = null;
    });
  } catch {
    state.wakeLock = null;
  }
}

async function releaseWakeLock() {
  if (!state.wakeLock) return;
  try {
    await state.wakeLock.release();
  } catch {
    // Ignore browsers that release the lock automatically.
  }
  state.wakeLock = null;
}

function openSettings() {
  els.settingsPanel.classList.add("open");
  els.settingsPanel.setAttribute("aria-hidden", "false");
  els.settingsPanel.removeAttribute("inert");
  els.settingsButton.setAttribute("aria-expanded", "true");
  els.settingsBackdrop.hidden = false;
  els.closeSettingsButton.focus();
}

function closeSettings() {
  els.settingsPanel.classList.remove("open");
  els.settingsPanel.setAttribute("aria-hidden", "true");
  els.settingsPanel.setAttribute("inert", "");
  els.settingsButton.setAttribute("aria-expanded", "false");
  els.settingsBackdrop.hidden = true;
  els.settingsButton.focus();
}

function loadSettingsIntoUI() {
  els.volumeInput.value = String(Math.round(state.volume * 100));
  els.volumeOutput.textContent = `${Math.round(state.volume * 100)}%`;
  els.warningSelect.value = String(state.warningSeconds);
  els.cueSoundsToggle.checked = state.cueSounds;
  els.keepAwakeToggle.checked = state.keepAwake;
  updateSensoryLabels();
}

els.presetButtons.forEach((button) => {
  button.addEventListener("click", () => setDuration(Number(button.dataset.seconds)));
});

els.minutesInput.addEventListener("change", syncDurationFromInputs);
els.secondsInput.addEventListener("change", syncDurationFromInputs);
els.minutesInput.addEventListener("input", syncDurationFromInputs);
els.secondsInput.addEventListener("input", syncDurationFromInputs);

els.currentActivity.addEventListener("input", updateActivityDisplays);
els.nextActivity.addEventListener("input", updateActivityDisplays);

els.startPauseButton.addEventListener("click", () => {
  if (state.running) pauseTimer();
  else startTimer();
});

els.resetButton.addEventListener("click", () => resetTimer());
els.againButton.addEventListener("click", () => resetTimer(false));

els.musicButton.addEventListener("click", () => {
  state.musicEnabled = !state.musicEnabled;
  if (state.musicEnabled && state.running) startMusic();
  else if (!state.musicEnabled) stopMusic(false);
  updateSensoryLabels();
});

els.motionButton.addEventListener("click", () => {
  state.reducedMotion = !state.reducedMotion;
  localStorage.setItem("cj-reduced-motion", String(state.reducedMotion));
  updateSensoryLabels();
});

els.languageButton.addEventListener("click", () => {
  state.lang = state.lang === "es" ? "en" : "es";
  localStorage.setItem("cj-lang", state.lang);
  applyTranslations();
});

els.settingsButton.addEventListener("click", openSettings);
els.closeSettingsButton.addEventListener("click", closeSettings);
els.settingsBackdrop.addEventListener("click", closeSettings);

els.volumeInput.addEventListener("input", () => {
  state.volume = Number(els.volumeInput.value) / 100;
  els.volumeOutput.textContent = `${els.volumeInput.value}%`;
  localStorage.setItem("cj-volume", els.volumeInput.value);
});

els.warningSelect.addEventListener("change", () => {
  state.warningSeconds = Number(els.warningSelect.value);
  state.warningPlayed = state.remainingSeconds <= effectiveWarningSeconds();
  localStorage.setItem("cj-warning-seconds", String(state.warningSeconds));
  updateVisuals(false);
});

els.cueSoundsToggle.addEventListener("change", () => {
  state.cueSounds = els.cueSoundsToggle.checked;
  localStorage.setItem("cj-cue-sounds", String(state.cueSounds));
});

els.keepAwakeToggle.addEventListener("change", () => {
  state.keepAwake = els.keepAwakeToggle.checked;
  localStorage.setItem("cj-keep-awake", String(state.keepAwake));
  if (state.keepAwake && state.running) requestWakeLock();
  else releaseWakeLock();
});

window.addEventListener("keydown", (event) => {
  const tag = document.activeElement?.tagName;
  const typing = tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  if (typing) return;

  if (event.code === "Space") {
    event.preventDefault();
    if (state.running) pauseTimer();
    else startTimer();
  }

  if (event.key.toLowerCase() === "r") {
    event.preventDefault();
    resetTimer();
  }

  if (event.key === "Escape" && els.settingsPanel.classList.contains("open")) {
    closeSettings();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && state.running) {
    syncRemainingFromClock();
    updateVisuals(false);
    if (state.keepAwake) requestWakeLock();
  }
});

window.addEventListener("beforeunload", releaseWakeLock);

loadSettingsIntoUI();
applyTranslations();
setDuration(600);
