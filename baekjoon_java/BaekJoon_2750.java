package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class BaekJoon_2750 {
	// 출처: https://www.acmicpc.net/problem/2750
	// 제출 시 클래스 이름을 Main으로 변경할 것
	public static void sort(int array[], int p, int r) {
		if (p < r) {
			int q = partition(array, p, r);
			sort(array, p, q-1);
			sort(array, q+1, r);
		}
	}
	public static int partition(int array[], int p, int r) {
		int x = array[r];
		int i = p - 1;
		for (int j = p; j < r; ++j) {
			if (array[j] <= x) {
				++i;
				int temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
		}
		
		int temp = array[i+1];
		array[i+1] = array[r];
		array[r] = temp;
		return i + 1;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			int num = Integer.parseInt(br.readLine());
			int array[] = new int[num];
			for (int i = 0; i < num; ++i) {
				array[i] = Integer.parseInt(br.readLine());
			}
			sort(array, 0, array.length-1);
			for (int a: array) {
				System.out.println(a);
			}
		} catch (Exception e) {

		}

	}

}
