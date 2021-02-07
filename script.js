const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 12000;
const breatheTime = totalTime / 3;
const holdTime = totalTime / 3;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe in for me Mahal...';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Mahal hold it in for me...';

    setTimeout(() => {
      text.innerText = 'Breathe out Mahal ko... mmmmmhhhhhh';
      container.className = 'container shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);
