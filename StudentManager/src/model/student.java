package model;

public class student {
	private int id;
	private String name;
	private double score;
	public student() {
		super();
	}
	public student(int id, String name, Double score) {
		super();
		this.id = id;
		this.name = name;
		this.score = score;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getScore() {
		return score;
	}
	public void setScore(Double score) {
		this.score = score;
	}
	@Override
	public String toString() {
		return "student [id=" + id + ", name=" + name + ", score=" + score + "]";
	}
}
