import sys
sys.setrecursionlimit(10**6)

class Node:
    def __init__(self, num, x, y):
        self.num = num;
        self.x = x;
        self.y = y;
        self.left = None;
        self.right = None;
        
def insert(root, num, x, y):
    if (root is None): return Node(num, x, y)
    if (x < root.x): root.left = insert(root.left, num, x, y)
    elif (x > root.x): root.right = insert(root.right, num, x, y)
    
    return root

def solution(nodeinfo):
    answer = [[], []]
    # 1. y 좌표 기준 내림차순, x 좌표 기준 오름차순
    n = len(nodeinfo)
    nodes = [i + 1 for i in range(n)]
    def sort_key(node):
        x, y = nodeinfo[node - 1]
        # y 내림차순, x 오름차순
        return (-y, x)
    nodes.sort(key = sort_key)
    
    # 2. BT 삽입
    root = None
    for node in nodes:
        x, y = nodeinfo[node - 1]
        root = insert(root, node, x, y)
    # 3. 순회
    def preorder(node):
        if (node is None): return
        
        answer[0].append(node.num)
        preorder(node.left)
        preorder(node.right)
    def postorder(node):
        if (node is None): return
    
        postorder(node.left)
        postorder(node.right)
        answer[1].append(node.num)
    preorder(root)
    postorder(root)
    return answer