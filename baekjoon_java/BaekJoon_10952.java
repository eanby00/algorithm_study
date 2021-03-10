package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BaekJoon_10952 {
	// https://www.acmicpc.net/problem/10952

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
			while (true) {
				String s[] = br.readLine().split(" ");
				int a = Integer.parseInt(s[0]);
				int b = Integer.parseInt(s[1]);
				if (a == 0) {
					break;
				} else {
					bw.write((a + b) + "\n");
				}
			}
			bw.flush();
			br.close();
			bw.close();
		} catch (IOException e) {

		}

	}

}
