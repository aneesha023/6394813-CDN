package com.sample.demo;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAddition() {
        Calculator calc = new Calculator();
        assertEquals(8, calc.add(5, 3));
    }

    @Test
    public void testSubtraction() {
        Calculator calc = new Calculator();
        assertEquals(2, calc.subtract(5, 3));
    }
}

