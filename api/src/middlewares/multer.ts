import multer from 'multer';
import crypto from 'node:crypto';
import path from 'node:path';

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, '..', 'uploads').replace('\\src', ''));
    },
    filename(req, file, callback){
      callback(null, `${crypto.randomUUID()}-${Date.now()}-${file.originalname}`);
    }
  })
});
