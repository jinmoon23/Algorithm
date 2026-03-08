import java.util.List;
import java.util.ArrayList;

class Node {
    int n, x, y;
    Node left, right;
    
    Node(int n, int x, int y) {
        this.n = n;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
}
class Solution {
    public Node insert(Node root, int x, int y, int n) {
        if (root == null) return new Node(n, x, y);
        if (x < root.x) {
            root.left = insert(root.left, x, y, n);
        } else if (x > root.x) {
            root.right = insert(root.right, x, y, n);
        }
        return root;
    }
    public void preorder(Node node, List<Integer> answer) {
        if (node == null) return;
        
        answer.add(node.n);
        preorder(node.left, answer);
        preorder(node.right, answer);
    }
    
    public void postorder(Node node, List<Integer> answer) {
        if (node == null) return;
        
        postorder(node.left, answer);
        postorder(node.right, answer);
        answer.add(node.n);
    }
    public List<List<Integer>> solution(int[][] nodeinfo) {
        List<List<Integer>> answer = new ArrayList<>();
        for (int i = 0; i < 2; i++) answer.add(new ArrayList<>());
        
        int n = nodeinfo.length;
        List<Integer> nodes = new ArrayList<>();
        
        for (int i = 0; i < n; i++) nodes.add(i + 1);
        nodes.sort((a, b) -> {
            int[] nodeA = nodeinfo[a - 1];
            int[] nodeB = nodeinfo[b - 1];
            if (nodeA[1] == nodeB[1]) return Integer.compare(nodeA[0], nodeB[0]);
            return Integer.compare(nodeB[1], nodeA[1]);
        });
        
        Node root = null;
        for (int no : nodes) {
            int[] node = nodeinfo[no - 1];
            int x = node[0], y = node[1];
            root = insert(root, x, y, no);
        }
        preorder(root, answer.get(0));
        postorder(root, answer.get(1));
        return answer;
    }
}