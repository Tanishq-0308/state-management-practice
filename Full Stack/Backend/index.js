// const express = require('express')
import express from 'express';

const app =express();
const PORT= process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send('server is ready');
})

app.listen(PORT,()=>{
    console.log('server running on',PORT);
    
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
          "id": 1,
          "joke": "Why don't skeletons fight each other? They don't have the guts."
        },
        {
          "id": 2,
          "joke": "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
          "id": 3,
          "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised."
        },
        {
          "id": 4,
          "joke": "Why do cows wear bells? Because their horns don't work."
        },
        {
          "id": 5,
          "joke": "I asked my dog what's two minus two. He said nothing."
        }
      ];
      
    res.send(jokes)
})