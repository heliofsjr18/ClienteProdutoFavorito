import { Customer } from '../../models';

export default class CustomersRepository {
 
    constructor() {}

    public async getAllCustomersDB() {
        return await Customer.findAll();
    }

    public async getCustomerDB(customerEmail) {
        return await Customer.findAll({
            where: {
                email: customerEmail
            }
        });
    }

    public async deleteCustomersDB(customerEmail) {
        return await Customer.destroy({
            where: {
                email: customerEmail
            }
        });
    }

    public async updateCustomersDB(customerEmail, customerName) {
        return await Customer.update({ name: customerName }, {
            where: {
              email: customerEmail
            }
        });
    }

    public async saveCustomer(customer) {
        return await Customer.create(customer);
    }
}