package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.example.demo.entity.PeopleModels;

@Mapper
public interface RegisterMapper {

  @Select("SELECT * FROM people WHERE name = #{name} AND groupName = #{groupName} AND registerName = #{registerName} AND updateName = #{updateName}")
  List<PeopleModels> search(PeopleModels people);
  
  @Insert("INSERT INTO people (name, groupName, registerName, updateName, updateTime) VALUES (#{name}, #{groupName}, #{registerName}, #{updateName}, #{updateTime})")
  int add(PeopleModels people);
  
  @Delete("DELETE FROM people WHERE name = #{deleteName}")
  int delete(String deleteName);
  
  @Update("Update people SET name = #{editName},groupName = #{editGroupName} WHERE name = #{oName}")
  int update(String oName, String editName, String editGroupName);
}