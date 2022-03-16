const express = require('express')

const app = express()

const port = 5000

// time logger
const time= new Date()
console.log(time)
const myLogger=(req, res, next)=> {
    if (time.getHours()<9 || time.getHours()>19 || time.getDay()==6 || time.getDate()==0){
        return res.sendFile(__dirname+'/Public/Restriction.html')
    }

     next();
  }
  
  app.use(myLogger);
  app.use(express.json());

  app.get('/',(req,res)=>{
         res.sendFile(__dirname+'/Public/Home.html')
      })

  app.get('/Services',(req,res)=>{
         res.sendFile(__dirname+'/Public/Services.html')
  })

  app.get('/Contact',(req,res)=>{
      res.sendFile(__dirname+'/Public/Contact.html')
})

app.get('/style.css',(req,res)=>{
          res.sendFile(__dirname+'/Public/style.css')
})



app.use(express.static('Public'))


app.listen(port, function() {
        console.log('The server is running, ' +
            ' please, open your browser at http://localhost:%s',port);
      });