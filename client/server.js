const express = require('express');
const next = require('next');

const port = 3000;
const dev = 'development';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
  .then(() =>{

    const server = express();
    server.get('home', (req, res) => {
      return app.render(req, res, '/home')
    })

    server.get('login', (req, res) => {
      return app.render(req, res, '/login')
    })

    server.get('marketplace', (req, res) => {
      return app.render(req, res, '/marketplace')
    })

    server.get('register', (req, res) => {
      return app.render(req, res, '/register')
    })
    
    server.get('orderSummary', (req, res) => {
      return app.render(req, res, '/orderSummary')
    })

    // Delete
    server.get('viewProduct/:card', (req, res) => {
      return app.render(req, res, '/viewProduct')
    })

    

    server.get('*', (req, res) =>{
      return handle(req,res);
    })

    server.listen(port, (err)=>{
      if(err) throw err;
      console.log(`Ready on http://localhost:${port}`)
    })
  }
)