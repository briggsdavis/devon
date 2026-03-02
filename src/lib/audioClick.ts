/**
 * audioClick.ts
 * Web Audio API sound generators for tactile button hover feedback.
 *
 * playClick()    — short, crisp noise burst for any button hover
 * playNavClick() — deeper low-frequency thump + snap for nav link hovers
 *
 * AudioContext is created lazily on first call (satisfies browser autoplay policy).
 */

let ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtx = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return null;
  if (!ctx) ctx = new AudioCtx();
  return ctx;
}

function maybeResume(ac: AudioContext): void {
  if (ac.state === 'suspended') ac.resume();
}

/** Short tactile click — bandpass-filtered white noise, ~35 ms */
export function playClick(): void {
  const ac = getCtx();
  if (!ac) return;
  maybeResume(ac);

  const now = ac.currentTime;
  const bufLen = Math.floor(ac.sampleRate * 0.035);
  const buf = ac.createBuffer(1, bufLen, ac.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;

  const src = ac.createBufferSource();
  src.buffer = buf;

  // Shape the noise as a crisp, high-register click
  const bp = ac.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 3200;
  bp.Q.value = 1.2;

  const gain = ac.createGain();
  gain.gain.setValueAtTime(0.22, now);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

  src.connect(bp);
  bp.connect(gain);
  gain.connect(ac.destination);
  src.start(now);
}

/** Deeper nav click — low-frequency pitch-drop + high-passed snap transient */
export function playNavClick(): void {
  const ac = getCtx();
  if (!ac) return;
  maybeResume(ac);

  const now = ac.currentTime;

  // ── Layer 1: deep thump (sine, 110 Hz → 42 Hz over 90 ms) ────────────────
  const osc = ac.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(110, now);
  osc.frequency.exponentialRampToValueAtTime(42, now + 0.09);

  const thumpGain = ac.createGain();
  thumpGain.gain.setValueAtTime(0.45, now);
  thumpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

  osc.connect(thumpGain);
  thumpGain.connect(ac.destination);
  osc.start(now);
  osc.stop(now + 0.09);

  // ── Layer 2: snap transient (highpass noise, ~18 ms) ─────────────────────
  const snapLen = Math.floor(ac.sampleRate * 0.018);
  const snapBuf = ac.createBuffer(1, snapLen, ac.sampleRate);
  const snapData = snapBuf.getChannelData(0);
  for (let i = 0; i < snapLen; i++) snapData[i] = Math.random() * 2 - 1;

  const snapSrc = ac.createBufferSource();
  snapSrc.buffer = snapBuf;

  const hp = ac.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 1800;

  const snapGain = ac.createGain();
  snapGain.gain.setValueAtTime(0.14, now);
  snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

  snapSrc.connect(hp);
  hp.connect(snapGain);
  snapGain.connect(ac.destination);
  snapSrc.start(now);
}
