import { Request } from 'express';
import { ICustomer } from '../models/customers';
import customerService from '../services/customersService';

export default class CustomersController {

    private serviceInstance: customerService;

    constructor(serviceInstance = customerService) {
        this.serviceInstance = new serviceInstance();
    }

    public async getAllCustomers(req: Request, res) : Promise<ICustomer[]>{
        try {
            const customersList: ICustomer[] = await this.serviceInstance.fetchAllCustomers();
            if(!customersList.length) {
                throw new Error("There is not any costumer to be listed");
            }
            return res.status(200).json(customersList);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    public async getCustomer(req: Request, res) : Promise<ICustomer>{
        try {
            const customerEmail: string = req.params.customerEmail
            const customer: ICustomer[] = await this.serviceInstance.fetchCustomer(customerEmail);
            if(!customer.length) {
                throw new Error("There is not any costumer to be listed");
            }
            return res.status(200).json(customer);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }


    public async createCustomer(req: Request, res) : Promise<void>{
        try {
            const customer: ICustomer = req.body;
            await this.serviceInstance.saveNewCustomer(customer);
            return res.status(200).json();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    public async updateCustomer(req: Request, res) : Promise<any>{
        try {
            const customerEmail: string = req.params.customerEmail
            const customerName: string = req.body.name
            await this.serviceInstance.updateCustomer(customerEmail, customerName);
            return res.status(200).json();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    public async deleteCustomer(req: Request, res) : Promise<any>{
        try {
            const customerEmail: string = req.params.customerEmail
            await this.serviceInstance.deleteCustomer(customerEmail);
            return res.status(200).json();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}