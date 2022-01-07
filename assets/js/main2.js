const btn45 = document.querySelector('.btn-45');
const btnPlayPause = document.querySelector('.btn-play-pause');

btn45.addEventListener('click', function() {
  document.body.classList.toggle('is-angle');
});

btnPlayPause.addEventListener('click', function() {
  document.body.classList.toggle('is-paused');
  btnPlayPause.classList.toggle('fa-play');
  btnPlayPause.classList.toggle('fa-pause');
});