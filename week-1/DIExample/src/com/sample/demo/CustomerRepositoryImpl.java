package com.sample.demo;

public class CustomerRepositoryImpl implements CustomerRepository {
    public String findCustomerById(int id) {
        return "Customer#" + id + " - Aneesha";
    }
}
