import express from "express";
import Jimp from "jimp";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import path from "path";
const __dirname = path.resolve();
const router = express.Router();

router.get('/crear', async (req, res) => {
    const id = uuidv4().slice(0, 4);
    const imagen = await Jimp.read('https://placedog.net/500/500')
    await imagen
        .resize(250, Jimp.AUTO)
        .sepia()
        .writeAsync(`uploads/imagen-${moment().format('X')}.png`)
    res.send('imagen creada con exito!');
})

export default router