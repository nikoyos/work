package com.example.demo.entity;

import java.util.List;

import lombok.*;

@Data
public class User {
    private String username;
    private Integer age;
    private Boolean isvip;
    private List<String> tags;
    private Integer sex;
    

}