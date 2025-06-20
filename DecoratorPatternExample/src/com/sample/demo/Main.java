package com.sample.demo;

public class Main {
    public static void main(String[] args) {
        Notifier notifier = new EmailNotifier();
        notifier = new SMSNotifierDecorator(notifier);  // Add SMS
        notifier.send("Deep Skilling alert!");
    }
}
