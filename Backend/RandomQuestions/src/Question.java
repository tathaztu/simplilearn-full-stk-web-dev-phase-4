import java.util.List;

public class Question {

	private String strQuestion;
	
	private List<String> listAnswers;
	
	

	public Question(String strQuestion) {
		this.strQuestion = strQuestion;
	}

	public String getStrQuestion() {
		return strQuestion;
	}

	public void setStrQuestion(String strQuestion) {
		this.strQuestion = strQuestion;
	}

	public List<String> getListAnswers() {
		return listAnswers;
	}

	public void setListAnswers(List<String> listAnswers) {
		this.listAnswers = listAnswers;
	}

	@Override
	public String toString() {
		return "Question [strQuestion=" + strQuestion + ", listAnswers=" + listAnswers + "]";
	}
}
