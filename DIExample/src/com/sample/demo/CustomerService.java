package com.sample.demo;

public class CustomerService {
    private CustomerRepository repository;

    // Constructor Injection
    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public void printCustomer(int id) {
        String result = repository.findCustomerById(id);
        System.out.println(result);
    }
}

