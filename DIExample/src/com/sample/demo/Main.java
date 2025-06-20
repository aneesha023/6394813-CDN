package com.sample.demo;

public class Main {
    public static void main(String[] args) {
        CustomerRepository repo = new CustomerRepositoryImpl(); // Dependency
        CustomerService service = new CustomerService(repo);    // Injected

        service.printCustomer(1);
    }
}

