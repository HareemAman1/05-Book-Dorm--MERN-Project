require('dotenv').config();
const express  = require ('express');
const app = express();   // making app variable using express 
const cors = require ('cors');
const router  = require ('./routers/auth-router');
const contact = require ('./routers/contact-router');
const collection = require ('./routers/collection-router');
const admin = require ('./routers/admin-router')
const connectDb = require('./utility/db');
const errorMiddleware = require('./middlewares/error-middleware');

const corsOptions = {
    origin: "http://localhost:5173",
    method: "GET, POST, DELETE, PATCH, HEAD",
    credentials: true,
}
//middleware
app.use(express.json()); 
app.use(cors(corsOptions));

app.use('/', router);
app.use('/', contact);
app.use('/', collection);
// app.use('/api/auth', router)  // router will be shown when we add /api/auth/ in path

// admin route
app.use('/admin', admin);

app.use(errorMiddleware);  // calling error middleware

const PORT = 5000;  // make it listen

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`)
    });
});

