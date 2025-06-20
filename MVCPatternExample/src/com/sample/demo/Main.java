package com.sample.demo;

public class Main {
    public static void main(String[] args) {
        Student student = new Student("Aneesha", "CSE123", "A");
        StudentView view = new StudentView();
        StudentController controller = new StudentController(student, view);

        controller.updateView();

        controller.setStudentName("Varma Aneesha");
        controller.setStudentGrade("A+");
        controller.updateView();
    }
}

