package com.example.demo.mapper;


import org.apache.ibatis.annotations.Mapper;
import com.example.demo.entity.UserModels;

@Mapper
public interface UserMapper {

  UserModels check(UserModels user);
  
  int password(String username, String password);
}