import { Router } from "express";
import health from "./health/gethealth";
import customers from "./costumers/customers";
import product from "./product/";
import favorites from "./favorites";

const router = Router();

router.use('/health', health);
router.use('/customers', customers);
router.use('/product', product);
router.use('/favorites', favorites);

export default router;