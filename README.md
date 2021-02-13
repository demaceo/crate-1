![Crate](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/hero-with-link.png)

# Crate 👕👖📦

#### Get monthly subscription of trendy clothes and accessories.
- This application was built for a [Turing School Project](https://mod4.turing.io/projects/crate/crate.html) using the framework from a [base application](https://github.com/atulmy/crate) created by [Atul Yadav](https://github.com/atulmy) and other contributors.
- **API** built with Node, GraphQL, Express, Sequelize (MySQL) and JWT Auth
- **WebApp** built with React and Redux along with Server Side Rendering (SSR) / SEO friendly
- **Mobile** (Android and iOS) Native App build with React Native
- Written in ES6+ using Babel + Webpack
- Designed using Adobe Experience Design. Preview it [here](https://xd.adobe.com/view/a662a49f-57e7-4ffd-91bd-080b150b0317/).


## Existing Features
- Modular and easily scalable code structure
- Emphasis on developer experience
- UI components in separate folder which can be swapped for your favorite UI framework easily
- Responsive UI for React Native to support Mobile and Tablet
- GraphQL schema with associations
- Database migration and data seeding
- User authentication using JSON Web Tokens with GraphQL API
- File upload feature with GraphQL
- React storybook demonstrating UI components for web
- Server side rendering
- Multi-package setup and dev scripts for an automated dev experience

## Features Added by our Team
- Style Survey that a user can complete before subscribing to any crates.
  * Based on a set of images selected by the user, they will be assigned a "style" that most closely aligns with their preference.

## Screenshots and GIFs
Click on image to view fullscreen and zoom

### Desktop
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/desktop-all-with-link.png)

![Crate Desktop](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/desktop-all-with-link.png)

### Mobile
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/mobile-all-with-link.png) · [GIF](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/mobile.gif)

![Crate Mobile](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/mobile-all-with-link.png)

### Tablet
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/tablet-all-with-link.png) · [GIF](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/tablet.gif)

![Crate Tablet](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/tablet-all-with-link.png)


## Core Structure
    code
      ├── package.json
      │
      ├── api (api.example.com)
      │   ├── public
      │   ├── src
      │   │   ├── config
      │   │   ├── migrations
      │   │   ├── modules
      │   │   ├── seeders
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── mobile (Android, iOS)
      │   ├── assets
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   ├── storybook
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


## Setup and Running
- Prerequisites
  - Node
  - Postgres
  - Sequelize-cli
- Clone repo `git clone git@github.com:demaceo/crate-1.git`
- Switch to `code` directory `cd code`
- Configurations
  - Modify `/api/src/config/database.json` for database credentials
    1. Check your available postgres users by running \du in the postgres CLI. Choose one of the names (“postgres” should be fine) to put as your username in the database.json.
    2. If you followed the default installation instructions when install postgres, then you do not need a password. If you have a password created, add that to the database.json file.
    3. Change the "dialect": "mysql" to "dialect": "postgres"
  - Modify `/api/.env` for PORT (optional)
  - Modify `/web/.env` for PORT / API URL (optional)
  - Modify `/mobile/src/setup/config.json` for API URL (tip: use `ifconfig` to get your local IP address)
- Setup
  - Run these commands to install PostgreSQL (if needed), and Sequelize-CLI tool:
      ```
      npm i pg
      npm install --save-dev sequelize-cli
      npm i --save sequelize
      npm i -g sequelize-cli
      ```
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
    * Note: If you have any issues with your database being migrated, please run sequelize db:migrate`.
  - Webapp: Install packages `cd web` and `npm install`
  - Mobile:
    1. Install packages `cd mobile` and `npm install`
    2. Install iOS dependencies `cd mobile/ios` `pod install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
  - Run Mobile `cd mobile` and `npx react-native run-ios` for iOS and `npx react-native run-android` for Android
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server

## Multi-package automation
- New developers are advised to run through the above 'setup and running' process before reading further.
- Optional multi-package automation for faster setup and easier dev environment initiation.
- No need to cd to sub-folders unless working with mobile or running a production build.
- Once Node, MySQL, repo clone and configuration are setup correctly
    - Switch to `code` directory `cd code`
    - Setup
        - Setup API, Webapp and Mobile with a single command `npm run setup`
    - Development
        - Run API and Webapp `npm start`, browse GraphiQL at http://localhost:8000/ and Webapp at http://localhost:8000/
        - Run API alone `npm start:api`, browse GraphiQL at http://localhost:8000/
        - Run Webapp alone `npm start:web`, browse webapp at http://localhost:3000/

## Database Schema

![crate_schema](https://user-images.githubusercontent.com/7945439/107857326-1dd25d80-6deb-11eb-814f-785fb4c24c24.png)

## Planning

We used a [miro board](https://miro.com/app/board/o9J_lWYkxj8=/) to create wireframes and plan our requirements for the expected input and output for both the front end and back end API calls.

![Screen Shot 2021-02-13 at 11 46 41 AM](https://user-images.githubusercontent.com/7945439/107858418-39406700-6df1-11eb-9cfb-798c5a56e92b.png)


## Contributors
Dani Coleman - [Github](https://github.com/dcoleman21)
Demaceo Vincent Howard - [Github](https://github.com/demaceo)
Joe Lopez - [Github](https://github.com/Codo-Baggins)
Peyton Jones - [Github](https://github.com/peytonjo)
Sean Steel - [Github](https://github.com/s-steel)
Sheryl Stillman - [Github](https://github.com/stillsheryl)

## License
Copyright (c) 2018 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
