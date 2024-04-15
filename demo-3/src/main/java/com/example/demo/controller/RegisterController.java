package com.example.demo.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
          
        List<PeopleModels> result = registerService.search(people);
		model.addAttribute("results",result);

		return "register";
    }
    
    @PostMapping("/register/add")
    public String add(@ModelAttribute PeopleModels people, Model model) {
        people.setUpdateTime(new Date(System.currentTimeMillis()));

        boolean result = registerService.add(people);
        if (result == true) {
			model.addAttribute("result", "添加成功");
		}else {
			model.addAttribute("result", "添加失败");
		}	
		return "register";
    }
    
    @GetMapping("/register/delete")
    public String delete(@RequestParam String deleteName) {
        registerService.delete(deleteName);
		return "redirect:/register";

    }
    
    @GetMapping("/register/update")
    public String update(String oName, String editName, String editGroupName) {
        registerService.update(oName,editName,editGroupName);
		return "register";
    }
	
}