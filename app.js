const express=require('express')
const path=require('path')
const hbs=require('hbs')
const request=require('request')

const app=express() 

//serving static files
const publicDirectoryPath=path.join(__dirname,'./public')
app.use(express.static(publicDirectoryPath))

//views
app.set('view engine', 'hbs')

//api
const url="https://api.wazirx.com/api/v2/tickers"


app.get('/',(req,res)=>{
    request({url},(err,response)=>{
        if(err){
            return res.json(err)
        }
     let arr=[]
      let  data=JSON.parse(response.body)
      for(let i in data){
       arr.push(data[i])
      }
      let newarr=arr.splice(0,10)
       res.render('index',{
           newarr
       })

   })
})



app.listen(3212,()=>{console.log("App is running on port 3212")})