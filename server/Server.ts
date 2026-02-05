import express, { Request, Response } from 'express';
import cors from 'cors'
import  'dotenv/config'
import connectDB from './configs/Db.js';
import session from 'express-session'
import MongoStore from 'connect-mongo';
import AuthRouter from './ROUTES/AuthRoutes.js';
import ThumbnailRouter from './ROUTES/ThumbnailRoutes.js';
import UserRoutes from './ROUTES/UserRoutes.js';

declare module 'express-session'{
    interface SessionData{
       isLoggedIn: boolean;
       userId : string
    }
}
await connectDB()

const app = express();


app.use(cors({
    origin:['http://localhost:5173','http://localhost:3000'],
    credentials:true
}))


app.use(session({
    secret: process.env.SESSION_SECRET as string,
    resave:false,
    saveUninitialized : false,
    cookie:{maxAge: 1000*60*60*24*7},
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI as string,
        collectionName : 'sessions'
    })
}))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Live!');
}); 

app.use('/api/auth', AuthRouter)
app.use('/api/thumbnail',ThumbnailRouter )
app.use('/api/user',UserRoutes)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});