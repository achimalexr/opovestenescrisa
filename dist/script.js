(() => {
  const button = document.querySelector('#sound');
  const label = document.querySelector('#sound-label');
  let context, volume, playing = false;
  function createAmbient() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) throw new Error('Audio unavailable');
    context = new AudioContext();
    volume = context.createGain();
    volume.gain.value = 0;
    volume.connect(context.destination);
    [55, 82.41, 110.3].forEach((frequency, index) => {
      const tone = context.createOscillator();
      const gain = context.createGain();
      tone.type = 'sine';
      tone.frequency.value = frequency;
      gain.gain.value = index === 0 ? .55 : .16;
      tone.connect(gain).connect(volume);
      tone.start();
    });
  }
  button.addEventListener('click', async () => {
    button.disabled = true;
    try {
      if (!context) createAmbient();
      await context.resume();
      playing = !playing;
      volume.gain.cancelScheduledValues(context.currentTime);
      volume.gain.setTargetAtTime(playing && !document.hidden ? .12 : 0, context.currentTime, .4);
      button.setAttribute('aria-pressed', String(playing));
      label.textContent = playing ? 'SUNET PORNIT' : 'SUNET OPRIT';
    } catch {
      label.textContent = 'SUNET INDISPONIBIL';
      if (context) { await context.close().catch(() => {}); context = null; }
      playing = false;
      button.setAttribute('aria-pressed', 'false');
    } finally { button.disabled = false; }
  });
  document.addEventListener('visibilitychange', () => {
    if (context && volume) volume.gain.setTargetAtTime(playing && !document.hidden ? .12 : 0, context.currentTime, .2);
  });
})();
