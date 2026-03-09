// 방문할 곳의 2차원 좌표 값을 구하고 각 장소를 이진트리의 노드가 되도록 구성한 후, 순회
class Node {
    constructor(num, x, y) {
        this.num = num;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
}

function insert(root, num, x, y) {
    if (root === null) return new Node(num, x, y);
    if (x < root.x) {
        root.left = insert(root.left, num, x, y);
    } else if (x > root.x) {
        root.right = insert(root.right, num, x, y);
    }
    
    return root;
}

function solution(nodeinfo) {
    var answer = [[], []];
    const n = nodeinfo.length;
    // 1. y좌표 기준 내림차순, x좌표 기준 오름차순 정렬
    const nodes = [];
    for (let i = 0; i < n; i++) nodes.push(i + 1);
    nodes.sort((a,b) => {
        const [ax, ay] = nodeinfo[a - 1];
        const [bx, by] = nodeinfo[b - 1];
        return ay === by ? ax - bx : by - ay;
    })
    // 2. BT 생성
    let root = null;
    for (const node of nodes) {
        const [x, y] = nodeinfo[node - 1];
        root = insert(root, node, x, y);
    }
    // 3. 순회
    function preorder(node) {
        if (node === null) return;
        
        answer[0].push(node.num);
        preorder(node.left);
        preorder(node.right);
    }
    
    function postorder(node) {
        if (node === null) return;
        
        postorder(node.left);
        postorder(node.right);
        answer[1].push(node.num);
    }
    preorder(root);
    postorder(root);
    
    return answer;
}