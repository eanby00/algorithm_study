package baekjoon;

import java.util.Scanner;

public class BaekJoon_9498 {
	// ÃâÃ³: https://www.acmicpc.net/problem/9498

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		if (num >= 90) {
			System.out.println("A");
		} else if (num >= 80) {
			System.out.println("B");
		} else if (num >= 70) {
			System.out.println("C");
		} else if (num >= 60) {
			System.out.println("D");
		} else {
			System.out.println("F");
		}

	}

}
