package com.example.demo.controller;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entity.PeopleModels;
import com.example.demo.service.RegisterService;

/**
 * RegisterController
 */
@Controller
public class RegisterController {
	@Autowired
	RegisterService registerService;

	/**
	 * ユーザー登録ページを表示します。
	 * 
	 * @param model モデル
	 * @return 登録ページのビュー名
	 */
	@GetMapping("/register")
	public String register(Model model) {
		PeopleModels people = new PeopleModels();
		List<PeopleModels> result = registerService.search(people);
		model.addAttribute("results", result);
		return "register";
	}

	/**
	 * ユーザー検索フォームのリクエストを処理します。
	 * 
	 * @param people 検索条件
	 * @param model  モデル
	 * @return 登録ページのビュー名
	 */
	@PostMapping("/register/search")
	public String search(@ModelAttribute PeopleModels people, Model model) {
		System.out.println(people);
		List<PeopleModels> result = registerService.search(people);
		model.addAttribute("results", result);
		System.out.println(result);
		return "register";
	}

	/**
	 * ユーザーデータを追加します。
	 * 
	 * @param people 追加するユーザーデータ
	 * @param model  モデル
	 * @return 登録ページのビュー名
	 */
	@PostMapping("/register/add")
	public String add(@ModelAttribute PeopleModels people, Model model) {
		people.setUpdateTime(new Date(System.currentTimeMillis()));

		boolean result = registerService.add(people);
		if (result == true) {
			model.addAttribute("result", "追加が成功しました");
		} else {
			model.addAttribute("result", "追加が失敗しました");
		}
		return "register";
	}

	/**
	 * ユーザーデータを削除します。
	 * 
	 * @param deleteName 削除するユーザーの名前
	 * @return 登録ページへのリダイレクト
	 */
	@GetMapping("/register/delete")
	public String delete(@RequestParam String deleteName) {
		registerService.delete(deleteName);
		return "redirect:/register";

	}

	/**
	 * ユーザーデータを更新します。
	 * 
	 * @param oName         更新前の名前
	 * @param editName      更新後の名前
	 * @param editGroupName 更新後のグループ名
	 * @param model         モデル
	 * @return 登録ページのビュー名
	 */
	@GetMapping("/register/update")
	public String update(String oName, String editName, String editGroupName, Model model) {
		registerService.update(oName, editName, editGroupName);
		return "register::editForm";
	}

}