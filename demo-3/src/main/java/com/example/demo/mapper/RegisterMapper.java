package com.example.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.entity.PeopleModels;

@Mapper
public interface RegisterMapper {

  List<PeopleModels> search(PeopleModels people);
  
  int add(PeopleModels people);
  
  int delete(String deleteName);
  
  int update(String oName, String editName, String editGroupName);
}