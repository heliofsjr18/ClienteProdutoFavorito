import { Product } from '../../models';

export default class ProductsRepository {
 
    constructor() {}

    public async getAllProductDB() {
        return await Product.findAll();
    }

    public async getProductDbByTitle(productTitle) {
        return await Product.findAll({
            where: {
                title: productTitle
            }
        });
    }

    public async getProductDbById(productId) {
        return await Product.findAll({
            where: {
                id: productId
            }
        });
    }

    public async deleteProductDB(productTitle) {
        return await Product.destroy({
            where: {
                title: productTitle
            }
        });
    }

    public async updateProductDB(productTitle, productNewTitle) {
        return await Product.update({ title: productNewTitle }, {
            where: {
                title: productTitle
            }
        });
    }

    public async saveProduct(product) {
        return await Product.create(product);
    }
}