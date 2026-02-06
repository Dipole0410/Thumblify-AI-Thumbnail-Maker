import express from 'express';
import { deleteThumbnail, generateThumbnail } from '../controllers/ThumbnailController.js';
import protect from '../MIDDLEWARE/auth.js';
const ThumbnailRouter = express.Router();
ThumbnailRouter.post('/generate', protect, generateThumbnail);
ThumbnailRouter.post('/delete/:id', protect, deleteThumbnail);
export default ThumbnailRouter;
