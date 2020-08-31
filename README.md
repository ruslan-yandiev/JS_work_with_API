## В качестве проекта нужно будет реализовать приложение для работы c issues на Github, используя Github API. Задание разработано на основе тестовых заданий, встречающихся при трудоустройтсве.

- Документация к API по работе с issues: https://developer.github.com/v3/issues/

- В самих заданиях описаны функциональные требования, но также есть нефункциональные требования или критерии оценки качества выполненного задания.

###### *Нефункциональные требования разбиты на 3 части: *

- базовые (обязательные) требования - им должен соответствовать код, чтобы задание в принципе было принято;
- продвинутые требования - это уровень хорошо выполненного кода
- дополнительне требования - уровень очень качественно выполненного тестового задания при приеме на работу (почти уровень промышленной разработки)
Вы можете самостоятельно выбрать на каком уровне нефункциональных требований будете выполнять код, в зависимости от располагаемого времени и уверенности в материале. Вы можете сначала выполнить задание только на уровне базовых требований, а затем, если будет позволять время, дополнить его другими требованиями. Либо сразу выполнять на уровне более сложных требований.

Внешний вид интерфейса может быть любым на ваше усмотрение.

## Используя Github API (developer.github.com) реализовать приложение, выполняющее следующие функции:

- Поиск issues в репоизитории пользователя: приложение имеет поле для указания имени пользователя и названия репозитория и кнопку "Поиск", по нажатию на которую должен быть загружен список issues для этого репозитория. Важно! Данные не нужно загружать, пока не будет нажата кнопка «Поиск». 
- Вывод списка issues: После того как поиск выполнен, список issues должен выводиться на странице, должна быть доступна следующая информация: номер issue, дата создания, заголовок, краткое описание.
- Обработка и индикация ошибок в интерфейсе: реализуйте отображение состояния загрузки обращений с сервера, а также индикацию возвращаемых ошибок.

При реализации учитывайте нефункциональные требования (критерии оценки), описанные в таблице: docs.google.com