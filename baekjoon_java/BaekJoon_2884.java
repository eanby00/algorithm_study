package baekjoon;

import java.util.Scanner;

public class BaekJoon_2884 {
	// √‚√≥: https://www.acmicpc.net/problem/2884

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		if (b < 45) {
			if (a == 0) {
				a = 23;
			} else {				
				--a;
			}
			b += 15;
		} else {
			b -= 45;
		}
		System.out.println(a+" "+b);
	}

}
