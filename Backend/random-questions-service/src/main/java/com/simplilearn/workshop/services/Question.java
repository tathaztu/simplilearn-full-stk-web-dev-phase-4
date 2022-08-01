package com.simplilearn.workshop.services;

import java.util.List;

public class Question {

	private int nNum1;
	
	private int nNum2;
		
	private int [] arrAnswers;	
	
	
	public Question() {}

	public Question(int nNum1, int nNum2) {
		this.nNum1 = nNum1;
		this.nNum2 = nNum2;
	}

	public int getnNum1() {
		return nNum1;
	}

	public void setnNum1(int nNum1) {
		this.nNum1 = nNum1;
	}

	public int getnNum2() {
		return nNum2;
	}

	public void setnNum2(int nNum2) {
		this.nNum2 = nNum2;
	}

	public int[] getArrAnswers() {
		return arrAnswers;
	}

	public void setArrAnswers(int[] arrAnswers) {
		this.arrAnswers = arrAnswers;
	}
}
