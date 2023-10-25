const express=require('express');
const connecToMongo = require('./db');
var cors=require('cors');
const app=express();
app.use(cors())
const port=5000;
app.use(express.json())
app.use('/upload',express.static('upload'))
connecToMongo()
//This will redirect to auth
app.use('/api/auth',require('./routes/auth'))
app.use('/api/conta-feed',require('./routes/conta-feed'))
app.use('/api/user-info',require('./routes/user-info'))
app.use('/api/uploadproject',require('./routes/uploadproject'))
app.use('/api/bid',require('./routes/bid'))
app.use('/api/chat',require('./routes/chat'))
app.use('/api/admin',require('./routes/admin'))

app.listen(port,()=>{ 
    console.log(`App is listen on http://localhost:${port}`)
})