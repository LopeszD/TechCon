const { Typed } = window;

const typed2 = new Typed('#strike', {
  strings: [
    'Aprender',
    'Conhecer',
    'Criar',
  ],
  typeSpeed: 80,
  backSpeed: 60,
  smartBackspace: false,
  loop: true,
  shuffle: false,
  backDelay: 2000,
  startDelay: 3000,
});

if (typed2.cursor != null) {
  typed2.cursor.classList.add('typed-cursor--blink');
}
