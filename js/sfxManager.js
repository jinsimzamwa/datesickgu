const sfxManager = {
  sounds: {
    click: './sfx/click.mp3',
    hover: './sfx/hover.mp3',
    success: './sfx/success.mp3',
    fail: './sfx/fail.mp3'
  },
  
  cache: {},

  preload() {
    for (const key in this.sounds) {
      const audio = new Audio(this.sounds[key]);
      audio.preload = 'auto';
      this.cache[key] = audio;
    }
  },

  play(key, volume = 1.0) {
    if (!this.sounds[key]) {
      console.warn(`[SFX] "${key}" 사운드가 등록되지 않았습니다.`);
      return;
    }
    const audio = new Audio(this.sounds[key]);
    audio.volume = Math.min(Math.max(volume, 0), 1);
    audio.play().catch(err => {
      console.warn(`[SFX] 재생 실패: ${err.message}`);
    });
  }
};