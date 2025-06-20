package com.sample.demo;

public class MobileApp implements Observer {
    public void update(double price) {
        System.out.println("Mobile App - New Stock Price: " + price);
    }
}

