package com.example.demo.entity;

import java.sql.Date;

import lombok.Data;

@Data
public class UserModels {
	private String username;
	private String password;
	private Date beginTime;
	private Date endTime;
}