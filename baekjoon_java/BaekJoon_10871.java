package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.List;

public class BaekJoon_10871 {
	// https://www.acmicpc.net/problem/10871

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
			
			String first = br.readLine();
			String array1[] = first.split(" ");
			String second = br.readLine();
			String array2[] = second.split(" ");

			List<Integer> result = new ArrayList<Integer>();
			
			for (int i = 0; i < array2.length; ++i) {
				if (Integer.parseInt(array2[i]) < Integer.parseInt(array1[1])) {
					result.add(Integer.parseInt(array2[i]));
				}
			}
			for (int a:result) {
				bw.append(a+" ");
			}
			bw.flush();
			br.close();
			bw.close();
			
			
		} catch (IOException e) {

		}
	}

}
