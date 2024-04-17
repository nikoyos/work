package com.example.demo.entity;

import java.sql.Date;

import lombok.Data;

@Data
public class PeopleModels {
    private String name;
    private String groupName;
    private String registerName;
    private String updateName;
    private Date updateTime;
    
}