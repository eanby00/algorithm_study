package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BaekJoon_10951 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
			try {
				while (true) {
					String s[] = br.readLine().split(" ");
					bw.write(Integer.parseInt(s[0]) + Integer.parseInt(s[1])+"\n");
				}
			} catch (Exception e) {
				bw.flush();
				bw.close();
				br.close();
			}
		} catch (Exception e) {

		}
	}

}
