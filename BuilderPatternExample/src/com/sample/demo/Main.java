package com.sample.demo;

public class Main {
    public static void main(String[] args) {
        Computer myPC = new Computer.Builder()
                .setCPU("Intel i7")
                .setRAM("16GB")
                .setStorage("512GB SSD")
                .build();

        myPC.showSpecs();
    }
}
