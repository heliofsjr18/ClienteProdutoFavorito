import productRepository from '../repo/productRepository';
import { IProduct } from '../models/product';

export default class ProductService {

    private productRepoInstance: productRepository;

    constructor(productRepoInstance = productRepository) {
        this.productRepoInstance = new productRepoInstance();
    }

    public async fetchAllProducts(): Promise<IProduct[]> {
        try {
            const productsList = await this.productRepoInstance.getAllProductDB();
            return productsList;
        } catch (error) {
            throw error;
        }
    }

    public async fetchProduct(productTitle): Promise<IProduct[]> {
        try {
            const productsList = await this.productRepoInstance.getProductDbByTitle(productTitle);
            return productsList;
        } catch (error) {
            throw error;
        }
    }

    public async saveNewProduct(product): Promise<any> {
        try {
            const currentProduct = await this.productRepoInstance.getProductDbByTitle(product.title);
            if(currentProduct.length) throw new Error("Already exist");
            await this.productRepoInstance.saveProduct(product);
        } catch (error) {
            throw error;
            
        }
    }

    public async deleteProduct(productTitle): Promise<any> {
        try {
            return await this.productRepoInstance.deleteProductDB(productTitle);
        } catch (error) {
            throw error;
            
        }
    }

    public async updateProduct(productTitle, productNewTitle): Promise<any> {
        try {
            return await this.productRepoInstance.updateProductDB(productTitle, productNewTitle);
        } catch (error) {
            throw error;
            
        }
    }

}