package com.sample.demo;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Backpack", "Accessories"),
            new Product(5, "T-Shirt", "Apparel")
        };

        // Linear Search
        Product result1 = SearchUtility.linearSearch(products, "Phone");
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        // Binary Search
        Product result2 = SearchUtility.binarySearch(products, "Phone");
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
