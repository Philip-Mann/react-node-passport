# Welcome to React Node Passport
## Goal of this project is to walkthrough log in functionality with a React UI and Node back end.

# Want to run locally?
- `git clone https://github.com/Philip-Mann/react-node-passport.git`
- in root of folder, run `npm install`
- change directories into react-ui `cd react-ui`
- run `npm install`
- change directories back to root of project`cd ..`
- then create your .env file `touch .env`
- add your credentials you get from [google](https://console.developers.google.com/)
- run `npm run build` in root of project
- after build has completed run `npm run dev`
- open second terminal and change directories into react-ui
- run `npm start`

# Google callback: what req.user looks like.
<img src="https://i.ibb.co/j4h4bVM/Screen-Shot-2021-09-02-at-9-00-00-PM.png" alt="" width="600"/>

# How I store data in my database
- In my google strategy in /auth/google.js, a user is found or created in my Users table in my database.
- lines 17 - 24 of google.js shows what column the data from req.user is stored
<img src="https://i.ibb.co/88NBTQ2/Screen-Shot-2021-09-02-at-9-08-19-PM.png" alt="screen shot of google strategy code" width="400" />

# Final Product
<img src="https://i.ibb.co/ZdKRgyd/Screen-Shot-2021-09-02-at-8-59-39-PM.png" alt="drawing" width="400"/>



<!-- Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0 -->