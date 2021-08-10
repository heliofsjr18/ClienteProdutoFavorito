import { Request, Router } from "express";
import FavoritesController  from "../../../controllers/FavoritesController";

const router = Router();

const controller = new FavoritesController();

router.get('/', async (req: Request, res, next) => {
    controller.getAllFavorites(req, res);
})


router.post('/', async (req: Request, res, next) => {
    controller.createFavorite(req, res);
})


export default router;
