package baekjoon;

import java.util.Scanner;

public class BaekJoon_1330 {
	// ��ó: https://www.acmicpc.net/problem/1330

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		if (a > b) {
			System.out.println(">");
		} else if (a < b) {
			System.out.println("<");
		} else {
			System.out.println("==");
		}
	}

}
