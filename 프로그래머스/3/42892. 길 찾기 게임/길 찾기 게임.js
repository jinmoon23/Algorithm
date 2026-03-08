// 카카오 프렌즈를 두 팀으로 나누고, 각 팀이 같은 곳을 다른 순서로 방문하도록 해서 먼저 순회를 마친 팀이 승리하는 것
// 방문할 곳의 2차원 좌표 값을 구하고 각 장소를 이진트리의 노드가 되도록 구성한 후, 
// 순회 방법을 힌트로 주어 각 팀이 스스로 경로를 찾도록
// 전위 순회, 후위 순회한 결과를 2차원 배열에 순서대로 담아 return
// nodeinfo[i] 는 i + 1번 노드의 좌표이며, [x축 좌표, y축 좌표] 순으로 들어있다.
class Node {
    constructor(x,y,n) {
        this.n = n;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    } 
}

function insert(root, x, y, n) {
    if (root === null) return new Node(x, y, n);
    if (x < root.x) {
        root.left = insert(root.left, x, y, n);
    } else if (x > root.x) {
        root.right = insert(root.right, x, y, n);
    }
    return root;
}

function solution(nodeinfo) {
    var answer = [[], []]; // preorder, postorder
    const n = nodeinfo.length;
    const nodes = [];
    for (let i = 0; i < n; i++) {
        nodes.push(i+1);
    }
    nodes.sort((a,b) => {
        const [ax, ay] = nodeinfo[a - 1];
        const [bx, by] = nodeinfo[b - 1];
        return ay === by ? ax - bx : by - ay;
    })
    
    let root = null;
    
    for (const node of nodes) {
        const [x, y] = nodeinfo[node - 1]
        root = insert(root, x, y, node)
    }
    
    function preorder(node) {
        if (node === null) return;
    
        answer[0].push(node.n);
        preorder(node.left);
        preorder(node.right);
    }
    
    function postorder(node) {
        if (node === null) return;
        
        postorder(node.left);
        postorder(node.right);
        answer[1].push(node.n);
    }
    preorder(root);
    postorder(root);
    
    return answer;
}