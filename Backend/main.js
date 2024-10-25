const express = require('express')
const cors=require ('cors')
let db = require('./DatabaseConfig')
let AdminRouter=require('./Routes/AdminRoutes')
const bodyparser=require('body-parser')



const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
let port = 4000


db.connect((err) => {
    if (err) throw err
    else {
        console.log("database connected")
    }
})

app.use('/api',AdminRouter)

app.listen(port, () => {
    console.log(`Server is running in ${port}`)
})