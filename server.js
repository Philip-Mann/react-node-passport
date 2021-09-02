require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const { PORT } = process.env;


const server = express();

// session middleware
const sess = {
    secret: 'keyboard cat',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false
}
server.use(session(sess));
server.use(passport.initialize());
server.use(passport.session());

// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());

server.get(`/api/profile:id`, async (req, res) => {
    const profileInfo = await Users.findOne({
        where: {
            loginStrategyId: req.params.id
        }
    });
    res.json(profileInfo);
});

const auth = require('./auth');
server.use('/auth', auth);

server.get('*', function (req, res) {
    res.sendFile(__dirname + '/react-ui/build/index.html');
});

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});