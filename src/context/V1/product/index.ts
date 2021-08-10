import { Request, Router } from "express";
import ProductController  from "../../../controllers/ProductController";

const router = Router();

const controller = new ProductController();

router.get('/', async (req: Request, res, next) => {
    controller.getAllProduct(req, res);
})

router.get('/:customerEmail', async (req: Request, res, next) => {
    controller.getProduct(req, res);
})

router.post('/', async (req: Request, res, next) => {
    controller.createProduct(req, res);
})

router.put('/:customerEmail', async (req, res, next) => {
    controller.updateProduct(req, res);
})

router.delete('/:customerEmail', async (req: Request, res, next) => {
    controller.deleteProduct(req, res);
})

export default router;
