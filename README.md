## NFTG - Gallery Repo
- React
- NodeJS
- OpenSea SDK 

### Instructions

Execute `nvm use`, if you have Node Version Manager, or install Node.js version 8.11 to make sure dependencies work.

Then, to install dependencies:
```bash
npm install
```

To run the app on localhost:

```bash
npm start
```

To minify and create a production build:

```bash
npm run build
```

### Deploying to Heroku

The create-react-app buildpack has issues finding dependencies during the build phase. To work around those, you can do `npm run eject` and deploy a node app, or you can deploy a pure, static site:

```bash
heroku create -b https://github.com/heroku/heroku-buildpack-static.git
npm run build
git push heroku master
```

### Directory structure

`public` houses favicon and base index.html – there should be little reason to use this directory.

`src` contains the app's js entry point and a simple CSS file
