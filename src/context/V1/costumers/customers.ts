import { Request, Router } from "express";
import CustomersController  from "../../../controllers/customersController";

const router = Router();

const controller = new CustomersController();

router.get('/', async (req: Request, res, next) => {
    controller.getAllCustomers(req, res);
})

router.get('/:customerEmail', async (req: Request, res, next) => {
    controller.getCustomer(req, res);
})

router.post('/', async (req: Request, res, next) => {
    controller.createCustomer(req, res);
})

router.put('/:customerEmail', async (req, res, next) => {
    controller.updateCustomer(req, res);
})

router.delete('/:customerEmail', async (req: Request, res, next) => {
    controller.deleteCustomer(req, res);
})

export default router;
