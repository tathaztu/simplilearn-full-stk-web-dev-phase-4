import java.util.ArrayList;
import java.util.List;

public class GenerateRandomQuestions {

	public static void main(String[] args) {

		List<Question> listQuestion = new ArrayList<>();
		
		for (int i = 0; i < 10; i++) {
			int nNum1 = (int)(Math.random() * 100);
			int nNum2 = (int)(Math.random() * 100);
			
			Question question = new Question(nNum1 + " + " + nNum2);
			
			question.setListAnswers(new ArrayList<String>());
			
			int nTotal = nNum1 + nNum2;
			
			question.getListAnswers().add(String.valueOf(nTotal));
			
			for (int j = 0; j < 3; j++) {
				int nRandomTotal = (int)((Math.random() * nNum1 * 1.5) + (Math.random() * nNum2 * 1.5));
				question.getListAnswers().add(String.valueOf(nRandomTotal));
			}
			
			listQuestion.add(question);
			
		}
		
		System.out.println(listQuestion);

	}

}
