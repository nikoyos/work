package com.example.demo.controller;

import java.util.Arrays;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demo.entity.User;

@Controller
public class IndexController {
	@GetMapping("/index")
	public String index(Model model) {
		model.addAttribute("title","hahahha的title");
		return "index";
	}
	
	@GetMapping("/user")
	public String user(Model model) {
		User user = new User();
		user.setUsername("小明");
		user.setIsvip(false);
		user.setAge(11);
		user.setTags(Arrays.asList("PHP","NODE","JAVA"));
		user.setSex(1);
		model.addAttribute("user",user);
		return "user";
	}
	
//	@GetMapping("/register")
//	public String register(Model model) {
//		model.addAttribute("title","hahahha的title");
//		return "register";
//	}
	
}
