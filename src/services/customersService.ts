import customersRepository from '../repo/customersRepository';
import { ICustomer } from '../models/customers';

export default class CustomersService {

    private customerRepoInstance: customersRepository;

    constructor(customerRepoInstance = customersRepository) {
        this.customerRepoInstance = new customerRepoInstance();
    }

    public async fetchAllCustomers(): Promise<ICustomer[]> {
        try {
            const customersList = await this.customerRepoInstance.getAllCustomersDB();
            return customersList;
        } catch (error) {
            throw error;
        }
    }

    public async fetchCustomer(customerEmail): Promise<ICustomer[]> {
        try {
            const customersList = await this.customerRepoInstance.getCustomerDB(customerEmail);
            return customersList;
        } catch (error) {
            throw error;
        }
    }

    public async saveNewCustomer(customer): Promise<any> {
        try {
            const currentCustomer = await this.customerRepoInstance.getCustomerDB(customer.email);
            if(currentCustomer.length) throw new Error("Already exist");
            await this.customerRepoInstance.saveCustomer(customer);
        } catch (error) {
            throw error;
            
        }
    }

    public async deleteCustomer(customerEmail): Promise<any> {
        try {
            return await this.customerRepoInstance.deleteCustomersDB(customerEmail);
        } catch (error) {
            throw error;
            
        }
    }

    public async updateCustomer(customerEmail, customerName): Promise<any> {
        try {
            return await this.customerRepoInstance.updateCustomersDB(customerEmail, customerName);
        } catch (error) {
            throw error;
            
        }
    }

}