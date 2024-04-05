package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.PeopleModels;
import com.example.demo.mapper.RegisterMapper;

@Service
public class RegisterService {
    @Autowired
    RegisterMapper registerMapper;
    public List<PeopleModels> search(PeopleModels people) {
        // 在这里编写搜索逻辑，可以调用DAO层进行数据库查询等操作
        // 比如根据表单数据进行数据库查询
        // SearchResult是一个用于存储搜索结果的POJO类，你可以根据自己的需要定义
//        SearchResult result = new SearchResult();
        
    	return registerMapper.search(people);


    	
    }
}