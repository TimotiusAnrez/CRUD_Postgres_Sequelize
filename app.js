const express = require('express')
const app = express()
const port = 5000


app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

const mainRouter = require('./routes/router')

app.use('/', mainRouter)

app.listen(port, () => {
    console.log(`app listen to port ${port}`)
})