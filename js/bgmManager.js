const bgmManager = {
  current: null,
  audios:{
    intro: new Audio('./media/main.mp3'),
    intro2: new Audio('./media/intro.mp3'),
    story: new Audio('./media/story.mp3'),
    story2: new Audio('./media/story2.mp3'),
    story3: new Audio('./media/story3.mp3'),
    badEnd: new Audio('./media/badEnd.mp3'),
    goodEnd: new Audio('./media/goodEnd.mp3'),
    trueEnd: new Audio('./media/trueEnd.mp3'),
    credit: new Audio('./media/credit.mp3')
  },

  play(name, loop = true, muted = false) {
    if (this.current) {
      this.current.pause();
      this.current.currentTime = 0;
    }
    const audio = this.audios[name];
    if (!audio) return;
    audio.loop = loop;
    audio.volume = muted ? 0 : 0.7;
    audio.muted = muted;
    audio.play().catch(err => console.warn('[BGM] 재생 실패:', err));
    this.current = audio;
  },

  fadeIn(targetVol = 0.7, duration = 1000) {
    if (!this.current) return;
    this.current.muted = false;
    let vol = this.current.volume;
    const step = targetVol / (duration / 50);
    const fade = setInterval(() => {
      vol += step;
      if (vol >= targetVol) {
        vol = targetVol;
        clearInterval(fade);
      }
      this.current.volume = vol;
    }, 50);
  },

  fadeOut(targetVol = 0, duration = 1000) {
  if (!this.current) return;
  let vol = this.current.volume;
  const step = (vol - targetVol) / (duration / 50);
  const fade = setInterval(() => {
    vol -= step;
    if (vol <= targetVol) {
      vol = targetVol;
      clearInterval(fade);
      if (vol === 0) {
        this.current.pause();
        this.current.muted = true;
      }
    }
    this.current.volume = Math.min(Math.max(vol, 0), 1);
  }, 50);
},

  stop() {
    if (this.current) {
      this.current.pause();
      this.current.currentTime = 0;
      this.current = null;
    }
  }
};
