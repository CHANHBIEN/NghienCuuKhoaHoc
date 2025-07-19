package view;
import java.util.Scanner;

import service.studentService;
public class Test {

	public static void main(String[] args) {
		studentService service = new studentService();
		Scanner sc = new Scanner(System.in);
		int choice;

		do {
			System.out.println("===== MENU =====");
			System.out.println("1. Thêm sinh viên");
			System.out.println("2. Hiển thị tất cả");
			System.out.println("3. Tìm sinh viên theo ID");
			System.out.println("4. Xóa sinh viên");
			System.out.println("5. Cập nhật sinh viên");
			System.out.println("6. Danh sách sinh viên được sắp xếp tăng dần theo điểm");
			System.out.println("7. Lọc ra những sinh viên có điểm trên trung bình");
			System.out.println("0. Thoát");
			System.out.print("Chọn: ");
			choice = sc.nextInt();
			sc.nextLine();

			switch (choice) {
			case 1:
				service.addStudent();
				break;
			case 2:
				service.getAll();
				break;
			case 3:
				service.findStudent();
				break;
			case 4:
				service.deleteStudent();
				break;
			case 5:
				service.update();
				break;
			case 6:
				service.sortByScore();
				break;
			case 7:
				service.filter();
				break;
			case 0:
				System.out.println("Thoát!");
				break;
			default:
				System.out.println("Chọn sai!");
			}
		} while (choice != 0);
	}

}
