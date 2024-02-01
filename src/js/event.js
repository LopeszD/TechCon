const nohelloCode = ['h', 'e', 'l', 'l', 'o'];

let nohelloCodePosition = 0;

function activateWut() {
  document.body.style.backgroundImage = window.whyyyyy;
  document.body.style.backgroundSize = 'cover';

  const elements = [
    document.getElementById('wholesite'),
    ...document.getElementsByTagName('p'),
    ...document.getElementsByTagName('ul'),
  ];

  for (const ele of elements) {
    if (ele != null) {
      ele.style.cssText = 'color:white !important';
    }
  }

  document.getElementsByTagName('footer')[0].style.cssText =
    'background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 45%) !important; color:white !important';

  document.getElementsByClassName('one')[0].style.cssText =
    'box-shadow: -20px 20px 60px #000000, 20px -20px 60px #000000 !important';
  document.getElementsByClassName('two')[0].style.cssText =
    'box-shadow: -20px 20px 60px #000000, 20px -20px 60px #000000 !important';

  document.getElementsByClassName('subtitle')[0].style.cssText =
    'color:white !important; opacity: 50%';
}

document.addEventListener('keydown', (e) => {
  const requiredKey = nohelloCode[nohelloCodePosition];

  if (e.key === requiredKey) {
    nohelloCodePosition += 1;

    if (nohelloCodePosition === nohelloCode.length) {
      activateWut();
      nohelloCodePosition = 0;
    } else if (nohelloCodePosition === 2) {
      const preload = document.getElementById('preloadimg');
      if (preload != null) {
        preload.classList.add('now');
      }
    }
  } else {
    nohelloCodePosition = 0;
  }
});
