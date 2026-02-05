import express  from 'express';
import { getThumbnailbyId, getUserThumbnails } from '../controllers/UserController.js';



const UserRoutes = express.Router();

UserRoutes.get('/thumbnails', getUserThumbnails)
UserRoutes.get('/thumbnails/:id', getThumbnailbyId)


export  default UserRoutes ;