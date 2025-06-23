package com.sample.demo;

import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        double initial = 10000.0;  // starting amount
        double growthRate = 0.10;  // 10%
        int years = 5;

        double recursiveResult = Forecaster.forecastRecursive(initial, growthRate, years);
        System.out.println("Recursive Forecast (Year " + years + "): ₹" + recursiveResult);

        double memoizedResult = Forecaster.forecastMemoized(initial, growthRate, years, new HashMap<>());
        System.out.println("Memoized Forecast (Year " + years + "): ₹" + memoizedResult);
    }
}

