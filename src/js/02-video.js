import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(
      'videoplayer-current-time',
      `${Math.floor(data.seconds)}`
    );
    console.log('current playback position: ', data.seconds);
  }, 5000)
);

const currentTime = localStorage.getItem('videoplayer-current-time')
  ? localStorage.getItem('videoplayer-current-time')
  : 0;

player.setCurrentTime(currentTime);
