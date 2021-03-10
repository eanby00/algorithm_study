package baekjoon;

import java.util.Scanner;

public class BaekJoon_2588 {
	// √‚√≥: https://www.acmicpc.net/problem/2588
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int first = sc.nextInt();
		String second = Integer.toString(sc.nextInt());
		System.out.println(first * (second.charAt(2) - '0'));
		System.out.println(first * (second.charAt(1) - '0'));
		System.out.println(first * (second.charAt(0) - '0'));
		System.out.println(first * Integer.parseInt(second));
	}

}
