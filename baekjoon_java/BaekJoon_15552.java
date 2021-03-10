package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BaekJoon_15552 {
	// √‚√≥: https://www.acmicpc.net/problem/15552

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		int num = Integer.parseInt(br.readLine());
		for (int i =0; i<num; ++i) {
			String[] strings = br.readLine().split(" ");
			bw.write(Integer.parseInt(strings[0])+Integer.parseInt(strings[1])+"\n");
		}
		br.close();
		bw.flush();
		bw.close();
		} catch(IOException e) {
			
		}
	}

}
