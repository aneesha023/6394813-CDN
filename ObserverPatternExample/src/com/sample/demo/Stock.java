package com.sample.demo;

public interface Stock {
    void register(Observer o);
    void deregister(Observer o);
    void notifyObservers();
}
