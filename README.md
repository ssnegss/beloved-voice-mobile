# Контрольная работа в рамках курса "МиВОС"
В качестве контрольной работы было разработано приложение "Beloved Voice Mobile" - приложение, нацеленное на работу с аудиоданными. Приложение осуществляет запись/воспроизведение в текстовом и аудио формате сообщений.

## Base dependencies

- [expo](https://docs.expo.dev/) is a framework and a platform for universal React applications
- [axios](https://github.com/axios/axios) for networking.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [expo-av](https://docs.expo.dev/versions/latest/sdk/av/) unified imperative API for media playback.
- [expo-speech](https://docs.expo.dev/versions/latest/sdk/speech/) provides an API that allows you to utilize Text-to-speech functionality.

## Folder structure

This template follows a very simple project structure:

- `src`: This folder is the main container of all the code inside the application.
  - `components`: This folder contains all app components.
  - `img`: This folder contains all app images.
  - `pages`: This folder contains all app full pages used with navigation.
  - `routes`: This folder stores the navigation component.
  - `services`: This folder contains everything connected to server.
- `App.js`: Main component that starts whole app.
