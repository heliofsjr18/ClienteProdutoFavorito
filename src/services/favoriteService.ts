import productRepository from '../repo/productRepository';
import CustomersRepository from '../repo/customersRepository';
import FavoritesRepository from '../repo/favoriteRepository';
import { IFavorite } from '../models/favorites';
import { IProduct } from '../models/product';
import { ICustomer } from '../models/customers';

export default class FavoritesService {

    private productRepoInstance: productRepository;
    private customersRepoInstance: CustomersRepository;
    private favoritesRepoInstance: FavoritesRepository;

    constructor(
        productRepoInstance = productRepository,
        customersRepoInstance = CustomersRepository,
        favoritesRepoInstance = FavoritesRepository
    ) {
        this.productRepoInstance = new productRepoInstance();
        this.customersRepoInstance = new customersRepoInstance();
        this.favoritesRepoInstance = new favoritesRepoInstance();
    }

    public async fetchAllFavorites(): Promise<IFavorite[]> {
        try {
            const favoritesList = await this.favoritesRepoInstance.getAllFavoritesDB();
            return favoritesList;
        } catch (error) {
            throw error;
        }
    }

    public async saveNewFavorites(productTitle, customerEmail): Promise<any> {
        try {
            const currentProduct: IProduct[] = await this.productRepoInstance.getProductDbByTitle(productTitle);
            const currentCustomer: ICustomer[] = await this.customersRepoInstance.getCustomerDB(customerEmail);
            if(!currentProduct.length) throw new Error("product does not exist");
            if(!currentCustomer.length) throw new Error("customer does not exist");
            const currentFavorite: IFavorite[] = await this.favoritesRepoInstance.getFavoriteDB(JSON.stringify(currentProduct[0].id), JSON.stringify(currentCustomer[0].id));
            if(currentFavorite.length) throw new Error("Already exist");
            const favorite = {
                product: JSON.stringify(currentProduct[0].id),
                customer: JSON.stringify(currentCustomer[0].id)
            }
            await this.favoritesRepoInstance.saveFavorite(favorite);
        } catch (error) {
            throw error;
            
        }
    }

}