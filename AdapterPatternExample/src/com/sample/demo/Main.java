package com.sample.demo;

public class Main {
    public static void main(String[] args) {
        PaymentProcessor processor = new PayPalAdapter(new PayPal());
        PaymentProcessor processor1 = new StripeAdapter(new Stripe());
        processor.processPayment(150.00);
        processor1.processPayment(200.00);
    }
}

