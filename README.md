[![Build status](https://ci.appveyor.com/api/projects/status/f27odr38fyk1g45m?svg=true)](https://ci.appveyor.com/project/GLM-Alyona/ahj-diploma-frontend-test)
# Chaos Organizer

1. Сохранение в истории ссылок и текстовых сообщений. Все сообщения хранятся на сервере в отдельном массиве.
2. Ссылки (то, что начинается с http:// или https://) должны быть кликабельны и отображаться как ссылки. Ссылки, отправляемые в сообщении, фильтруются с помощью функции _textfilter_.
3. Сохранение в истории изображений, видео и аудио (как файлов) - через Drag & Drop и через иконку загрузки (скрепка в большинстве мессенджеров). Добавление файлов производится с помощью кнопки (функция _changeHandler_), слева от тектового инпута. 
![](./src/img/app-description/add-file-by-icon.jpeg)
Также файлы можно добавить с помощью перетаскивания (функция _dragndrop_). 
![](./src/img/app-description/add-file-by-drop.jpeg). Все файлы также хранятся на сервере в массиве с сообщениями.
4. Скачивание файлов (на компьютер пользователя)
Чтобы скачать файл, необходимо навести на сообщение с файлом и нажать на всплывающую кнопку.
![](./src/img/app-description/download-file.jpeg)
5. Ленивая подгрузка: сначала подгружаются последние 10 сообщений, при прокрутке вверх подгружаются следующие 10 и т.д. При обновлении страницы или открытии ее с другого устройства/браузера, сообщения подгружаются начиная с последних десяти.

## Дополнительные для реализации функции

6. Синхронизация - если приложение открыто в нескольких окнах (вкладках), то контент должен быть синхронизирован
Контент синхронизируется благодаря отправки серверу запроса на инициализацию (_init_), который в свою очередь возвращает сообщениния, которые лежат на уже записаны на сервер.
7. Поиск по сообщениям (интерфейс + реализация на сервере). Сообщения можно найти с помощью строки ввода в верхней части приложения, благодаря отправки серверу запроса на поиск сообщения (_search_), который по переданному значению вернет сообщения, которые соответствуют значению запроса. ![](./src/img/app-description/search-message.jpeg)
8. Запись видео и аудио (используя API браузера)
Запись видео и аудио осуществляется с помощью кнопок справа от тествого инпута. Реализация описана в классе _AudioVideoRecorder_. ![](./src/img/app-description/audio-video-rec.jpeg)
9. Отправка геолокации. Отправка геолокации осуществляется первой кнопкой справа от тектового поля с помощью функции _getPosition_. ![](./src/img/app-description/geolocation.jpeg)
10. Воспроизведение видео/аудио (используя API браузера). Записанные аудио и видео добавляются в сообщение путем отправки данных на сервер, который в свою очередь возвращает готовое сообщение и через класс _Message_ инициализирует его на странице.
11. Отправка команд боту, например: @chaos: погода, бот должен отвечать рандомный прогноз погоды (интегрироваться с реальными сервисами не требуется), команд должно быть не менее 5
Реализация работы бота описана в классе _ChatBot_.
12. Закрепление (pin) сообщений, закреплять можно только одно сообщение (прикрепляется к верхней части страницы). Чтобы закрепить сообщение необходимо навести на сообщение и нажать на всплывающую кнопку. Закрепленное сообщение отображается в верхней части приложения с помощью функции _createPinned_. ![](./src/img/app-description/pin-message.jpeg)
13. Добавление сообщения в избранное (тогда должен быть интерфейс для просмотра избранного). 
Чтобы добавить сообщение в избранное необходимо навести на сообщение и нажать на всплывающую кнопку. ![](./src/img/app-description/add-favorite.jpeg)
Избранное сообщение отображается если нажать на кнопку для показа избранных сообщений в верхней правом углу. ![](./src/img/app-description/show-favorite.jpeg)
