package com.example.demo.entity;

import java.sql.Date;
import java.util.List;

import lombok.*;

@Data
public class PeopleModels {
    private String name;
    private String groupName;
    private String registerName;
    private String updateName;
    private Date updateTime;
    
}