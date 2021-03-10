package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BaekJoon_11022 {
	// √‚√≥: https://www.acmicpc.net/problem/11022
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
			int num = Integer.parseInt(br.readLine());
			for (int i = 0; i < num; ++i) {
				String[] s = br.readLine().split(" ");
				System.out.println("Case #"+(i+1)+": "+Integer.parseInt(s[0])+" + "+Integer.parseInt(s[1])+" = "+(Integer.parseInt(s[0])+Integer.parseInt(s[1])));
			}
			br.close();
			bw.flush();
			bw.close();
		} catch (IOException e) {

		}
	}

}
