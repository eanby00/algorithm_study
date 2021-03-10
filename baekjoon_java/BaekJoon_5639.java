package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;

class Node {
	int value;
	Node left;
	Node right;

	public Node(int value) {
		this.value = value;
	}
}

class Tree {
	public Node root;

	public Node treeInsert(Node node, int x) {
		if (root == null) {
			Node newnode = new Node(x);
			root = newnode;
		} else if (node == null) {
			Node newnode = new Node(x);
			node = newnode;
		} else {
			if (node.value < x) {
				node.right = treeInsert(node.right, x);
			} else {
				node.left = treeInsert(node.left, x);
			}
		}
		return node;
	}

	public void post_traverse(Node node) {
		if (node.left != null) {
			post_traverse(node.left);
		}
		if (node.right != null) {
			post_traverse(node.right);
		}
		System.out.println(node.value);
		
	}
}

public class BaekJoon_5639 {
	// 출처: https://www.acmicpc.net/problem/5639
	// 제출 시 클래스 이름을 Main으로 변경할 것

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			Tree t = new Tree();
			try {
				while (true) {
					Integer num = Integer.parseInt(br.readLine());
					if (num != null) {						
						t.treeInsert(t.root, num);
					}
				}
			} catch(Exception e) {
			}

			t.post_traverse(t.root);
			br.close();
		} catch (Exception e) {

		}

	}

}
