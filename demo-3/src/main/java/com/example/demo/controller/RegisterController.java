package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.demo.entity.PeopleModels;
import com.example.demo.service.RegisterService;

@Controller
public class RegisterController {
    @Autowired
    RegisterService registerService;
	
	@GetMapping("/register")
	public String register(Model model) {
		return "register";
	}
	
    @PostMapping("/register/search")
    public String search(@ModelAttribute PeopleModels people, Model model) {
          
        System.out.println(people);
        // 可以将这些数据传递给Service层进行业务逻辑处理，比如数据库查询等
        List<PeopleModels> result = registerService.search(people);
        System.out.println("result");
        System.out.println(result);
		model.addAttribute("result",result);

		return "register";
    }
	
}