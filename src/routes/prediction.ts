import { Router, Request } from 'express';
import { prediction } from '../controllers';
import multer, { type FileFilterCallback } from 'multer';
import path from 'path';

function fileFilter(_req: Request, file: File | any, cb: FileFilterCallback) {
    // Allowed extensions
    const filetypes = /jpeg|jpg|png|gif/;

    // Check extension
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    // Check mime type
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(Error('only jpeg, jpg, png and gif image formats are supported'));
    }
}

const upload = multer({ fileFilter });

const router = Router();

router.post('/', upload.single('image'), prediction.postPrediction);

export default router;
