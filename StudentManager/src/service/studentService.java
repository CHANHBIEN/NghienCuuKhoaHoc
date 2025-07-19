package service;

import dao.studentDAO;
import model.student;

import java.util.List;
import java.util.Scanner;

public class studentService {
	private Scanner sc = new Scanner(System.in);
	private List<student> students;

	public studentService() {
		// Đọc danh sách từ file nếu có, nếu không thì khởi tạo mới
		students = studentDAO.readstudents();
		if (students == null) {
			students = new java.util.ArrayList<>();
		}
	}

	public void addStudent() {
		System.out.print("ID: ");
		int id = sc.nextInt();
		sc.nextLine();
		System.out.print("Name: ");
		String name = sc.nextLine();
		System.out.print("Score: ");
		double score = sc.nextDouble();
		sc.nextLine();
		student st = new student(id, name, score);
		students.add(st);
		studentDAO.writestudents(students);
	}

	public void getAll() {
		if (students.isEmpty()) {
			System.out.println("Danh sách rỗng!");
			return;
		}
		for (student student : students) {
			System.out.println(student.toString());
		}
	}

	public void findStudent() {
		System.out.print("Enter ID to search: ");
		int id = sc.nextInt();
		boolean flag = false;
		for (student student : students) {
			if (student.getId() == id) {
				System.out.println(student.toString());
				flag = true;
			}
		}
		if (!flag) {
			System.out.println("Không tìm thấy sinh viên có mã là: " + id);
		}
	}

	public void deleteStudent() {
		System.out.print("Enter ID to delete: ");
		int id = sc.nextInt();
		int index = 0;
		boolean flag=false;
		for (student student : students) {
			if (student.getId() == id) {
				index = students.indexOf(student);
				flag=true;
			}
		}
		if (!flag) {
			System.out.println("Không tìm thấy sinh viên có mã là: "+id);
			return;
		}
		else {
			students.remove(index);
			studentDAO.writestudents(students);
			System.out.println("Xóa thành công");
		}
	}
	
	public void update() {
		System.out.println("Enter ID to update: ");
		int id = sc.nextInt();
		sc.nextLine();
		int index=0;
		boolean flag=false;
		for (student student : students) {
			if (student.getId()==id) {
				System.out.println("Nhập tên mới");
				String newName=sc.nextLine();
				System.out.println("Nhập điểm mới: ");
				double newScore=sc.nextDouble();
				
				student.setName(newName);
				student.setScore(newScore);
				flag=true;
			}
		}
		if (!flag) {
			System.out.println("Không tìm thấy sinh viên có mã là: "+id);
		}
		else {
			System.out.println("Cập nhật sinh viên thành công!");
			studentDAO.writestudents(students);
		}
	}
	
	public void sortByScore() {
		System.out.println("Danh sách sinh viên được sắp xếp tăng dần theo điểm:");
		for (int i = 0; i < students.size()-1; i++) {
			for (int j = i+1; j < students.size(); j++) {
				if (students.get(i).getScore()>students.get(j).getScore()) {
					student temp = students.get(i);
	                students.set(i, students.get(j));
	                students.set(j, temp);
				}
			}
		}
		getAll();
	}
	public void filter() {
		System.out.println("Những sinh vien có điểm trên trung bình:");
		for (student student : students) {
			if (student.getScore()>5) {
				System.out.println(student.toString());
			}
		}
	}
}
