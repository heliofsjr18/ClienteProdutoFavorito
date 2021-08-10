import { Request } from 'express';
import { IProduct } from '../models/product';
import productService from '../services/productService';

export default class ProductController {

    private serviceInstance: productService;

    constructor(serviceInstance = productService) {
        this.serviceInstance = new serviceInstance();
    }

    public async getAllProduct(req: Request, res) : Promise<IProduct[]>{
        try {
            const productList: IProduct[] = await this.serviceInstance.fetchAllProducts();
            if(!productList.length) {
                throw new Error("There is not any product to be listed");
            }
            return res.status(200).json(productList);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    public async getProduct(req: Request, res) : Promise<IProduct>{
        try {
            const productTitle: string = req.params.customerEmail
            const product: IProduct[] = await this.serviceInstance.fetchProduct(productTitle);
            if(!product.length) {
                throw new Error("There is not any product to be listed");
            }
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    public async createProduct(req: Request, res) : Promise<void>{
        try {
            const product: IProduct = req.body;
            await this.serviceInstance.saveNewProduct(product);
            return res.status(200).json();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    public async updateProduct(req: Request, res) : Promise<any>{
        try {
            const productOldTitle: string = req.params.productTitle
            const productNewTitle: string = req.body.name
            await this.serviceInstance.updateProduct(productOldTitle, productNewTitle);
            return res.status(200).json();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    public async deleteProduct(req: Request, res) : Promise<any>{
        try {
            const productTitle: string = req.params.productTitle
            await this.serviceInstance.deleteProduct(productTitle);
            return res.status(200).json();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}