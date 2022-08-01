package com.simplilearn.workshop.services;
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RandomQuestions {

	@GetMapping(path="/questions/{nCountQuestions}")
	public List <Question> getQuestionsAndAnswers(@PathVariable int nCountQuestions){
		List<Question> listQuestion = new ArrayList<>();
		
		for (int i = 0; i < nCountQuestions; i++) {
			int nNum1 = (int)(Math.random() * 100);
			int nNum2 = (int)(Math.random() * 100);
			
			Question question = new Question(nNum1, nNum2);
			
			
			List<Integer> listAnswers = new ArrayList<>();
			
			int nTotal = nNum1 + nNum2;
			
			listAnswers.add(nTotal);
			
			for (int j = 0; j < 3; j++) {
				int nRandomTotal = (int)((Math.random() * nNum1 * 1.5) + (Math.random() * nNum2 * 1.5));
				listAnswers.add(nRandomTotal);
			}
			
			Collections.shuffle(listAnswers);

			question.setArrAnswers(new int[listAnswers.size()]);
			
			for(int j = 0; j < listAnswers.size(); j++) {
				question.getArrAnswers()[j] = listAnswers.get(j);
			}
			
			listQuestion.add(question);
			
		}
		
		return listQuestion;
	}
}
