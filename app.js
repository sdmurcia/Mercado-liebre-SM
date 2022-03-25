const express=require('express');
const app=express();
const path=require('path');
const port = 3030;
app.use(express.static('./public'));
app.listen(process.env.PORT || 3000, () => {
  console.log(`Está corriendo el servidor en el puerto: ${port}`)
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname,'./views/register.html'))
})
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname,'./views/signup.html'))
})