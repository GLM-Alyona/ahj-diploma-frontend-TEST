// объявление необходимых констант

import Loader from './Loader';

const messageForm = document.getElementById('message-form');
const typeMessageInput = document.getElementById('type-message');
const chatContainer = document.querySelector('.messanger__chat-container');
const chat = document.getElementById('chat');
const addFileInput = document.getElementById('add-file-input');
const addFileBtn = document.getElementById('add-file-btn');
const loader = new Loader();
const mediaButtons = document.querySelector('.messanger__composer-btns');
const mediaControllers = document.querySelector('.messanger__record-media');
const recAudioBtn = document.getElementById('rec-audio-btn');
const recVideoBtn = document.getElementById('rec-video-btn');
const clearMediaBtn = document.getElementById('clear-media-btn');
const sendMediaBtn = document.getElementById('send-media-btn');
const mediaTimer = document.getElementById('media-timer');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-message');
const noResultAlarm = document.querySelector('.messanger__no-search');
const showFavoriteBtn = document.getElementById('show-favorite-btn');
const sendGeoBtn = document.getElementById('send-geo-btn');

export {
  messageForm,
  typeMessageInput,
  chat,
  chatContainer,
  addFileInput,
  addFileBtn,
  loader,
  mediaButtons,
  mediaControllers,
  recAudioBtn,
  recVideoBtn,
  clearMediaBtn,
  sendMediaBtn,
  mediaTimer,
  searchForm,
  searchInput,
  noResultAlarm,
  showFavoriteBtn,
  sendGeoBtn,
};
