n, m = map(int, input().split())
graph = [[] for _ in range(n+1)]
start_points = []
end_points = []
cnt = 0

for _ in range(m):
    x, y = map(int, input().split())
    start_points.append(x)
    end_points.append(y)

for start, end in zip(start_points, end_points):
    graph[start].append(end)
    graph[end].append(start)

visited = [False for _ in range(n+1)]

def dfs(vertex):
    global cnt
    for curr_v in graph[vertex]:
        if not visited[curr_v]:
            cnt += 1
            visited[curr_v] = True
            dfs(curr_v)

root_vertex = 1
visited[root_vertex] = True
dfs(root_vertex)
print(cnt)