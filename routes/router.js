import express from "express";
import Jimp from "jimp";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();
const router = express.Router();

router.get('/crear', async (req, res) => {
    const id = uuidv4().slice(0, 4);
    const imagen = await Jimp.read('https://placedog.net/500/500')
    await imagen
        .resize(250, Jimp.AUTO)
        .sepia()
        .writeAsync(`uploads/imagen-${moment().format('X')}.png`)
    const imagePath = path.join(__dirname, 'uploads', 'imagen-1715217689.png')
   fs.readFile(imagePath, (err, data) => {
    if (err) {
      res.status(404).send("Imagen no encontrada");
    } else {
      res.setHeader("Content-Type", "image/png");
      res.send(data); // Envía la imagen como respuesta; // Envía la imagen como respuesta
    }
  });
    

    
   
})

export default router