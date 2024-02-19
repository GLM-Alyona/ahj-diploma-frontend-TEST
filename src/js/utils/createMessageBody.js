// создает тело сообщения, где:
// usertype - тип юзера (бот/пользователь)
// content - контент сообщения
// botname - имя бота

export default function createMessageBody(usertype, content, botname = '') {
  return JSON.stringify({
    usertype,
    botname,
    content,
    pinned: false,
    favorite: false,
  });
}
