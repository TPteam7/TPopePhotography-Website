var typed = new Typed(".auto-type", {
    strings: ["^1000Inspires.","^1000Develops.","^1000Captivates."],
    stringsElement: null,
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 50,
    smartBackspace: true,
    shuffle: false,
    backDelay: 2000,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    attr: null,
    bindInputFocusEvents: false,
    contentType: 'html',
    onBegin: (self) => {},
    onComplete: (self) => {},
    preStringTyped: (arrayPos, self) => {},
    onStringTyped: (arrayPos, self) => {},
    onLastStringBackspaced: (self) => {},
    onTypingPaused: (arrayPos, self) => {},
    onTypingResumed: (arrayPos, self) => {},
    onReset: (self) => {},
    onStop: (arrayPos, self) => {},
    onStart: (arrayPos, self) => {},
    onDestroy: (self) => {}
    });