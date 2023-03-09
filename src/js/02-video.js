import '/src/css/main.min.css';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (e) {
  const stringifyData = JSON.stringify(e);
  localStorage.setItem(STORAGE_KEY, stringifyData);
};

player.on('timeupdate', throttle(onPlay, 1000));

function continuePlay() {
  if (JSON.parse(localStorage.getItem(STORAGE_KEY)) === null) {
    return;
  }
  const pausedTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
  player
    .setCurrentTime(pausedTime.seconds)
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
}

continuePlay();
