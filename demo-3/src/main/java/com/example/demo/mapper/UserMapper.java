package com.example.demo.mapper;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.demo.entity.UserModels;

@Mapper
public interface UserMapper {

  @Select("SELECT * FROM usermodels WHERE username = #{username} AND password = #{password} ")
  UserModels check(UserModels user);
  
  @Update("UPDATE usermodels SET password = #{password} WHERE username = #{username}")
  int password(String username, String password);
}