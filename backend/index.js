// require('dotenv').config()
// const express = require('express')
// // require('express'): Node.js ka built-in function require() use hota hai kisi external module ko import karne ke liye.
// // Express ko apne project mein use karne ke liye import kiya.

// const app = express()
// // Ek Express app banayi jise hum aage chalake routes aur functions assign karenge.

// const port = 3000
// // Server kis port par chalega, wo set kiya gaya (3000).

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// // Jab user root page par aaye (/), to usko "Hello World!" message dikhaye.

// // app.listen(port, () => {
// //   console.log(`Example app listening on port ${port}`)
// // })
// // Server ko start kiya gaya aur console mein message aayega: "Example app listening on port 3000"
// const githubData = {
//     "login": "IfraShamim",
//     "id": 128763023,
//     "node_id": "U_kgDOB6zEjw",
//     "avatar_url": "https://avatars.githubusercontent.com/u/128763023?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/IfraShamim",
//     "html_url": "https://github.com/IfraShamim",
//     "followers_url": "https://api.github.com/users/IfraShamim/followers",
//     "following_url": "https://api.github.com/users/IfraShamim/following{/other_user}",
//     "gists_url": "https://api.github.com/users/IfraShamim/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/IfraShamim/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/IfraShamim/subscriptions",
//     "organizations_url": "https://api.github.com/users/IfraShamim/orgs",
//     "repos_url": "https://api.github.com/users/IfraShamim/repos",
//     "events_url": "https://api.github.com/users/IfraShamim/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/IfraShamim/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false,
//     "name": "Ifra Shamim",
//     "company": "Saylani Mass IT Training Program",
//     "blog": "https://my-portfolio-six-ebon-60.vercel.app/",
//     "location": "Karachi , Pakistan",
//     "email": null,
//     "hireable": null,
//     "bio": "Mern stack developer ",
//     "twitter_username": null,
//     "public_repos": 113,
//     "public_gists": 0,
//     "followers": 45,
//     "following": 1,
//     "created_at": "2023-03-24T01:15:30Z",
//     "updated_at": "2025-07-05T08:07:33Z"
//   }

// app.get('/github', (req,res) => {
//     res.json(githubData)
// })  
// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('dist'))
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Get A List Of 5 Jokes
app.get('/api/jokes', (req,res) => {
  const joke = [
    {
      id: 1,
      title: 'A Joke.',
      content: 'This is a Joke'
    },
    {
      id: 2,
      title: 'A Joke.',
      content: 'This is 2nd Joke'
    },
    {
      id: 3,
      title: 'A Joke.',
      content: 'This is 3rd Joke'
    },
    {
      id: 4,
      title: 'A Joke.',
      content: 'This is 4th Joke'
    },
    {
      id: 5,
      title: 'A Joke.',
      content: 'This is 5th Joke'
    }
  ]
  res.json(joke)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
