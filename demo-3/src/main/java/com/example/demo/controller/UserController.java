package com.example.demo.controller;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.UserModels;
import com.example.demo.service.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
public class UserController {
	@Autowired
	UserService userService;

	@GetMapping("/login")
	public String login() {
		return "login";
	}
	
	@GetMapping("/update")
	public String update() {
		return "update";
	}

	@PostMapping("/login/check")
	public String check(@ModelAttribute UserModels user, Model model, HttpSession session) {
        if (user.getUsername().isEmpty()) {
            model.addAttribute("usernameError", "ユーザー名を入力してください");
            return "login";
        }
        if (user.getPassword().isEmpty()) {
            model.addAttribute("passwordError", "パスワードを入力してください");
            return "login";
        }

        UserModels result = userService.check(user);

        if (result == null) {
        	model.addAttribute("error", "ユーザー名またはパスワードが間違っています");
		    return "login";
		}		
		Date currentTime = new Date(System.currentTimeMillis());
		Date validFrom = result.getBeginTime();
		Date validTo = result.getEndTime();

		if (currentTime.before(validFrom) || currentTime.after(validTo)) {
		    session.setAttribute("username", result.getUsername());
		    session.setAttribute("password", result.getPassword());
		    return "redirect:/update";
		} else {
		    return "redirect:/register";
		}

	}
	@PostMapping("/update/password")
	public String password(@RequestParam String password, Model model, HttpSession session) {
        String username = (String) session.getAttribute("username");

        boolean result = userService.password(username,password);

        if (result == true) {
			model.addAttribute("result", "変更が成功しました");
		}else {
			model.addAttribute("result", "変更が失敗しました");
		}	
	    return "update";
	}
}
