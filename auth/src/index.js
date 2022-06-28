const express = require("express")
const app = express()
const port = process.env.PORT || 3000

//middlewares
app.use(express.urlencoded())


//routes
app.post("/auth",(req,res)=>{
  const {key}= req.body
  if(key == "SuperSecret"){
    res.status(200).send()
    return
  }
    res.status(403).send()

})

app.listen(port, () => {
  console.log(`server runnin on port ${port}`)
})
