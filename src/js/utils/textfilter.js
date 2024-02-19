/* eslint-disable no-useless-escape */
/* eslint-disable func-names */
// фильтрация вводимого сообщение на наличие ссылок

export default function (str) {
  let re = /([^\"=]{2}|^)((https?|ftp):\/\/\S+[^\s.,> )\];'\"!?])/;
  let subst = '$1<a href="$2" target="_blank">$2</a>';
  return str.replace(re, subst);
}
