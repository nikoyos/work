package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.demo.entity.PeopleModels;

@Mapper
public interface RegisterMapper {

  @Select("SELECT * FROM people WHERE name = #{name} AND groupName = #{groupName} AND registerName = #{registerName} AND updateName = #{updateName}")
  List<PeopleModels> search(PeopleModels people);
}