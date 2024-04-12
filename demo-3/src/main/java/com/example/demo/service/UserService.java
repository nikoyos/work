package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PeopleModels;
import com.example.demo.entity.UserModels;
import com.example.demo.mapper.RegisterMapper;
import com.example.demo.mapper.UserMapper;

@Service
public class UserService {
	@Autowired
	UserMapper userMapper;

	public UserModels check(UserModels user) {
		return userMapper.check(user);
	}

	public boolean password(String username, String password) {
		int result = userMapper.password(username, password);
		if (result == 0) {
			return false;
		} else {
			return true;
		}
	}
}