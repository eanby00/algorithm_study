package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class BaekJoon_2562 {
	// √‚√≥: https://www.acmicpc.net/problem/2562

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			ArrayList<Integer> al = new ArrayList<Integer>();
			for (int i = 0; i <9; ++i) {
				al.add(Integer.parseInt(br.readLine()));
			}
			int max = 0;
			int num = 0;
			
			for (int i = 0; i < 9; ++i) {
				if (al.get(i) > max) {
					max = al.get(i);
					num = i;
				}
			}
			System.out.println(max+"\n"+(num+1));
		} catch (Exception e) {

		}
	}

}
