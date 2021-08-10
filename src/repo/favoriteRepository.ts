import { Favorite } from '../../models';

export default class FavoriteRepository {
 
    constructor() {}

    public async getAllFavoritesDB() {
        return await Favorite.findAll();
    }

    public async getFavoriteDB(product, customer) {
        return await Favorite.findAll({
            where: {
                product,
                customer
            }
        });
    }

    public async saveFavorite(favorite) {
        return await Favorite.create(favorite);
    }
}