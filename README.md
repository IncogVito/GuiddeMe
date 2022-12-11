
# GuiddeMe
![Build Status](https://github.com/IncogVito/GuiddeMe/actions/workflows/firebase-hosting-pull-request.yml/badge.svg)
www.guiddeme.pl (Preffered access from mobile browser)

## Introduction
GuiddeMe is a web app that offers a real-time city game. The game can be used for tourism or entertainment purposes. The app guides users from one location to another and offers quizzes during gameplay. Users can choose from different routes.



## Technologies Used
GuiddeMe uses the following technologies:

- Google Maps
- Angular Materials
- Storybook

## Requirements
To run GuiddeMe, you will need the following:

- A modern web browser that supports JavaScript and Angular 14
- Node v16.17.0
- NPM 8.15.0

## Installation
To get started with GuiddeMe, clone the repository and install the dependencies:

```sh
git clone https://github.com/<your-username>/GuiddeMe.git
cd GuiddeMe
npm install
```

Start firebase emulators to have create mocked BE connection. (Should be started in other window)
```sh
npm run start-emulators
```

Start the development server:
```sh
npm run start
```


Usage
To use GuiddeMe, open a web browser and go to http://localhost:4200. The game will automatically start, and you can follow the on-screen instructions to begin your tour.

## Contributing
If you would like to contribute to GuiddeMe, please follow these steps:

1. Fork the repository
2. Create a new branch for your changes:
```
git checkout -b my-changes
```
3. Make your changes and commit them
4. Push the branch to your fork
5. Create a new pull request

## License
GuiddeMe is licensed under the MIT License. See LICENSE for more information.
