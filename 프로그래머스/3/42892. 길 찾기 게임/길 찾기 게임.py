import sys
sys.setrecursionlimit(10**6)

class Node:
    def __init__(self, n, x, y):
        self.n = n
        self.x = x
        self.y = y
        self.left = None
        self.right = None
        
def insert(root, n, x, y):
    if root is None: return Node(n, x, y)
    if x < root.x: root.left = insert(root.left, n, x, y)
    elif x > root.x: root.right = insert(root.right, n, x, y)
    return root
        
def solution(nodeinfo):
    answer = [[] for _ in range(2)]
    n = len(nodeinfo)
    nodes = [i + 1 for i in range(n)]
    # python key 정렬에선 좌측부터 순서대로 정렬됨
    # -는 내림차순 -> y좌표 기준 내림차순 정렬하고 x좌표 기준 오름차순 정렬
    nodes.sort(key = lambda node: (-nodeinfo[node - 1][1], nodeinfo[node - 1][0]))
    
    root = None
    
    for number in nodes:
        x, y = nodeinfo[number - 1]
        root = insert(root, number, x, y)
        
    def preorder(node):
        if node is None: return;
        
        answer[0].append(node.n)
        preorder(node.left)
        preorder(node.right)
    def postorder(node):
        if node is None: return;
    
        postorder(node.left)
        postorder(node.right)
        answer[1].append(node.n)
    preorder(root)
    postorder(root)
    return answer