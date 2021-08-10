import { Request } from 'express';
import { IFavorite } from '../models/favorites';
import favoriteService from '../services/favoriteService';

export default class FavoritesController {

    private serviceInstance: favoriteService;

    constructor(serviceInstance = favoriteService) {
        this.serviceInstance = new serviceInstance();
    }

    public async getAllFavorites(req: Request, res) : Promise<IFavorite[]>{
        try {
            const favoritesList: IFavorite[] = await this.serviceInstance.fetchAllFavorites();
            if(!favoritesList.length) {
                throw new Error("There is not any product to be listed");
            }
            return res.status(200).json(favoritesList);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    public async createFavorite(req: Request, res) : Promise<void>{
        try {
            const product: string = req.body.product;
            const customer: string = req.body.customer;
            await this.serviceInstance.saveNewFavorites(product, customer);
            return res.status(200).json();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}