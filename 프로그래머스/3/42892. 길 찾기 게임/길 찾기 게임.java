import java.util.List;
import java.util.ArrayList;

class Node {
    int num, x, y;
    Node left, right;
    
    Node(int num, int x, int y) {
        this.num = num;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
}
class Solution {
    public Node insert(Node root, int num, int x, int y) {
        if (root == null) return new Node(num, x, y);
        if (x < root.x) {
            root.left = insert(root.left, num, x, y);
        } else if (x > root.x) {
            root.right = insert(root.right, num, x, y);
        }
        return root;
    }
    public void preorder(Node node, List<Integer> answer) {
        if (node == null) return;
        
        answer.add(node.num);
        preorder(node.left, answer);
        preorder(node.right, answer);
        
    }
    
    public void postorder(Node node, List<Integer> answer) {
        if (node == null) return;
        
        postorder(node.left, answer);
        postorder(node.right, answer);
        answer.add(node.num);
    }
    public List<List<Integer>> solution(int[][] nodeinfo) {
        List<List<Integer>> answer = new ArrayList<>();
        int n = nodeinfo.length;
        for (int i = 0; i < 2; i++) answer.add(new ArrayList<>());
        // 1. y 좌표 기준 내림차순, x 좌표 기준 오름차순 정렬
        List<Integer> nodes = new ArrayList<>();
        for (int i = 0; i < n; i++) nodes.add(i + 1);
        nodes.sort((a, b) -> {
            int[] axy = nodeinfo[a - 1], bxy = nodeinfo[b - 1];
            int ax = axy[0], ay = axy[1], bx = bxy[0], by = bxy[1];
            if (ay == by) return Integer.compare(ax, bx);
            else return Integer.compare(by, ay);
        });
        
        // 2. BT 삽입
        Node root = null;
        for (int node : nodes) {
            int[] coor = nodeinfo[node - 1];
            int x = coor[0], y = coor[1];
            root = insert(root, node, x, y);
        }
        // 순회
        preorder(root, answer.get(0));
        postorder(root, answer.get(1));    
        return answer;
    }
}