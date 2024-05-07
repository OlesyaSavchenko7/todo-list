# Приложение учета задач
В данном приложении вы можете работать с вашим список задач (mvp). 

## Содержание
- [Технологии](#технологии)
- [Начало работы](#начало-работы)
- [Подходы в разработке](#подходы-в-разработке)
- [Установка зависимостей](#установка-зависимостей)
- [Создание билда](#создание-билда)
- [Тестирование](#тестирование)

## Технологии
- React
- TypeScript
- Mobx
- Jest
- Webpack

В качестве методологии проектирования frontend-приложения используется Feature-Sliced Design.
Для быстроты стилизации выбрана библиотека компонентов material-ui.

## Начало работы
Установите npm-пакеты с помощью команды:
```sh
$ npm i
```

Затем запустите приложение с помощью команды:
```sh
$ npm run start
```
После данной команды откроется локальное приложение на порту 3000(по дефолту).


## Разработка

### Подходы в разработке
В качестве методологии проектирования frontend-приложения используется Feature-Sliced Design.
Для соблюдения принципов изолированности и чистоты компонентов в папке c компонентами есть index файл,
в котором указаны, какие вещи можно экспортировать наружу.

Точка входа в файл с конфигурацией webpack лежит в корне проекта. Но его подчасти для удобства выделены
в отдельные файлы и лежат в папке config/build. 

### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

### Создание билда
Чтобы выполнить production сборку, выполните команду: 
```sh
npm run build:prod
```

## Тестирование

Для юнит тестов выполните команду:
```sh
npm run unit
```
