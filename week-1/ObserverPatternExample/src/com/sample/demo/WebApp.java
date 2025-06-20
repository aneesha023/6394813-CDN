package com.sample.demo;

public class WebApp implements Observer {
    public void update(double price) {
        System.out.println("Web App - New Stock Price: " + price);
    }
}

