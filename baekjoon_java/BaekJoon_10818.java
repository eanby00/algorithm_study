package baekjoon;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BaekJoon_10818 {
	// √‚√≥: https://www.acmicpc.net/problem/10818

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
			int num = Integer.parseInt(br.readLine());
			StringTokenizer st = new StringTokenizer(br.readLine(), " ");
			int array[] = new int[num];
			int index = 0;
			while (st.hasMoreTokens()) {
				array[index++] = Integer.parseInt(st.nextToken()); 
			}
			Arrays.sort(array);
			bw.write(array[0]+" "+array[num-1]);
			bw.newLine();
			bw.flush();
			bw.close();
			br.close();
			
		} catch (Exception e) {

		}
	}

}
