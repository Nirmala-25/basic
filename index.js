const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res) =>{
    res.send("hello World!");
});

app.post('/api',(req,res)=>{
    const{name} =req.body;
    res.json({message:`Hello ${name}!`});
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
