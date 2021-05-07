var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
var hold = []

app.get('/',(req,res)=>{

    var now = Date()
var datee = require('date-and-time')
var file_name = datee.format(new Date(),'DD_MM_YYYY-hh_mm_ss_A.txt')

    fs.writeFile(file_name,now, (err)=>{
        if(err) console.log(err)
    })
    res.send(`a file named ${file_name} was created`)

 
   
    fs.readdir('./', (err,files)=>{
        hold = []
        if(err) console.log(err)
        else files.map((item)=> {
            if(path.extname(item) == '.txt')
            hold.push(item)}) })


})



app.get('/textfiles',(req,res)=>{

    res.status(200)
    res.send(`text files created and stored in the directory so far are: ${
        hold.map((item)=>{return `<li>${item}</li>`} ).join(' ')
    }`)
          
} )

app.listen(3000)
