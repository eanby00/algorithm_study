package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BaekJoon_2741 {
	// √‚√≥: https://www.acmicpc.net/problem/2741
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int a = Integer.parseInt(br.readLine());
		for (int i = 1; i <= a; ++i) {
			bw.write(i+"\n");
		}
		br.close();
		bw.flush();
		bw.close();
		} catch(IOException e) {
			
		}
		
	}

}
