package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // Setter for DI (Exercise 2)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void performOperation() {
        System.out.println("BookService: Performing operation...");
        bookRepository.save();
    }
}
