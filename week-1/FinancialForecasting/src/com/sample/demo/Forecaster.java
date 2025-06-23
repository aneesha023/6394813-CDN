package com.sample.demo;

import java.util.HashMap;
import java.util.Map;

public class Forecaster {

    // Recursive approach
    public static double forecastRecursive(double initial, double rate, int years) {
        if (years == 0) return initial;
        return (1 + rate) * forecastRecursive(initial, rate, years - 1);
    }

    // Memoized (Optimized) version
    public static double forecastMemoized(double initial, double rate, int years, Map<Integer, Double> memo) {
        if (years == 0) return initial;
        if (memo.containsKey(years)) return memo.get(years);

        double result = (1 + rate) * forecastMemoized(initial, rate, years - 1, memo);
        memo.put(years, result);
        return result;
    }
}

