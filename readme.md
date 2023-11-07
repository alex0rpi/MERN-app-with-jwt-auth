## Fullstack MERN App

This is a blog app that stores workout exercices on a mongodb database.
For the moment I havent included edit functionality.

### Main technologies used:

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

- I use validator package on backend to validate the data received from the client, and throw feedback to the user in case there are errors.
- For authorization I am setting a JWT token on the request headers, which is verified on the backend to allow users to do add or delete workouts.

### How to run

Remember to configure your mongodb database and make sure to have an .env file on backend directory containing the following:

- MONGO_URI
  Add a /workouts at the end if like I did (optional)
- PORT
  You can use 5000 on backend and 3000 on frontend side.
- SECRET
