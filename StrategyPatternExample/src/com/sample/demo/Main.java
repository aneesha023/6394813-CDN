package com.sample.demo;

public class Main {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        context.setStrategy(new CreditCardPayment());
        context.setStrategy(new PayPalPayment());
        context.pay(999.0);
    }
}

