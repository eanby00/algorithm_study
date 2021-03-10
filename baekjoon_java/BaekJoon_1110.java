package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class BaekJoon_1110 {
	// √‚√≥: https://www.acmicpc.net/problem/1110

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
			String num = br.readLine();
			int i = 0;
			String value = num;
			while (true) {
				if (value.length() == 1) {
					value = "0"+value;
				}
				++i;
				String save = Integer.toString((Integer.parseInt(value)/10 + Integer.parseInt(value) % 10));
				value = value.charAt(value.length()-1)+""+save.charAt(save.length()-1);
				if (Integer.parseInt(num) == Integer.parseInt(value)) {
					bw.write(i+"\n");
					break;
				}
			}
			bw.flush();
			br.close();
			bw.close();
		} catch (Exception e) {

		}

	}

}
