package com.sample.demo;

public class Main {
    public static void main(String[] args) {
        Image img = new ProxyImage("cat.png");
        img.display(); // Loads + displays
        img.display(); // Just displays (no re-load)
    }
}
