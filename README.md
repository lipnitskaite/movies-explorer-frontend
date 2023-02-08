# Movies Explorer

<img width="1792" alt="Main page, desktop size screenshot" src="https://user-images.githubusercontent.com/88855419/217492746-09ac0d44-243d-4178-afd1-a6195020e916.png">
<img width="1792" alt="Movies page, desktop size screenshot" src="https://user-images.githubusercontent.com/88855419/217494504-534cf7e5-8f12-45d0-987d-b242abc3abc8.png">


## Table of Contents

- [Project Description](#project-description)
- [Techs](#techs)
- [How to use](#how-to-use)

## Project Description

A project for the Yandex Practicum Web development course where I created an interactive SPA for searching and saving movies.<br>

On the main page, there's my short portfolio and info about what I've learnt during the course. To explore movies users need to be registered and authorised.<br>

It is a full-stack project, so I had an opportunity to practice both frontend and backend parts. One of the main challenges for me was figuring out how to implement a working search filter using API data. Apart from that, it was interesting and fun to learn how to dynamically save and delete movies from favourites.<br>

This project allowed me to dive deeper into React using states, hooks, and React's libraries, such as 'react-router' or 'react-email-validator'. I've also practiced JSX, CSS, and VanillaJS. The backend part is created using node.js, REST API, and MongoDB.<br>

### Mobile Support

The landing is adapted for devices of all sizes.<br>

<img width="388" alt="Main page, mobile size screenshot" src="https://user-images.githubusercontent.com/88855419/217494785-8eb3078b-7ff0-4a60-a83a-f0d51e50e7ff.png">   <img width="388" alt="Movies page, mobile size screenshot" src="https://user-images.githubusercontent.com/88855419/217494974-21686dd4-6e4c-40e2-9ccc-8b5f6d2ba441.png">

### Features

- Users registration and authorisation
- Movies search input with “short movies” filter
- Saving and deleting movies cards
- Opportunity to edit the profile info

### Status

Ongoing

### Improvement plans

- Currently, it is in Russian, soon it will be translated into English
- Improve the search characteristics (make it dynamic)
- Code refactoring
    - Rewrite css code using modules + scss-preprocessor
    - Use Redux Toolkit for state storage

---

## Techs

### Stack

- HTML5 & CSS3
- JavaScript
- React.js 18.2.0
- Node.js + Express.js 4.18.1
- REST API
- MondoDB<br>

### Methodology

BEM, OOP<br>

---

## How to use

Clone down this repository. You will need **node and npm** installed globally on your machine.<br>

```
# to clone down the repository
$ git clone https://github.com/lipnitskaite/movies-explorer-frontend.git

# to open the target directory
$ cd movies-explorer-frontend
```

### Installation

```
# to install dependencies
$ npm install

# to start server at localhost:3000
$ npm run start

# to build app
$ npm run build
```
