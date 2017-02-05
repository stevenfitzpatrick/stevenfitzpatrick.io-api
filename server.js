const express = require("express");
const firebase = require("firebase");
const app = express();
const port = 3000;

class Server {
  constructor() {
    this.init();
    this.start();
  }

  init() {
    var config = {
        apiKey: 'AIzaSyAYBgORfDq6ptpb9k6jE3N5UHonW75EYPE',
        authDomain: 'stevenfitzpatrick-5181b.firebaseapp.com',
        databaseURL: 'https://stevenfitzpatrick-5181b.firebaseio.com'
    };
    firebase.initializeApp(config);
    debugger;
  }

  start() {
    app.listen(port, err => {
      console.log(`App running on port ${port}`);
    });

    app.get("/", (req, res) => {
      //res.send("welcome to my api with nodemon !");
      firebase.database().ref('favourites').on('value', (data) => {
          res.send(data.val());
      })
    });
  }
}

const server = new Server();
