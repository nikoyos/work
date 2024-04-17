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
    	return registerMapper.search(people);
    }
    
    public boolean add(PeopleModels people) {
		int result = registerMapper.add(people);
		if (result == 0) {
			return false;
		} else {
			return true;
		}
    }
    
    public boolean delete(String deleteName) {
		int result = registerMapper.delete(deleteName);
		if (result == 0) {
			return false;
		} else {
			return true;
		}
    }
    
    public boolean update(String oName, String editName, String editGroupName) {
		int result = registerMapper.update(oName,editName,editGroupName);
		if (result == 0) {
			return false;
		} else {
			return true;
		}
    }
}