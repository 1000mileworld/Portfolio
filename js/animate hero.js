// Wrap every letter in a span
const textWrapper = document.querySelector('.headline .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/[,'.\w)]/g, "<span class='letter'>$&</span>"); //$& inserts matched substring

anime.timeline()
  .add({
    targets: '.headline .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=75',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.blurb',
    opacity: [0,1],
    translateY: [20, 0],
    easing: 'easeInOutSine',
    duration: 800
  })