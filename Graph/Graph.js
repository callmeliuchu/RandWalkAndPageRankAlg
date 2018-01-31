function print(obj){
	console.log(obj)
}
var locationMapping = {0:{x:20,y:20},1:{x:760,y:20},2:{x:20,y:560},3:{x:760,y:560}}

class Graph{
	constructor(n){
		this.edges = new Array(n)
		this.visited = new Array(n)
		this.record = new Array(n)
		this.n = n
		this.totalCount = 30000
		for(let i=0;i<n;i++){
			this.edges[i] = new Array()
			this.visited [i] = 0
			this.record[i] = 0
		}
	}
	addEdge(u,v){
		if(this.edges[u].indexOf(v) == -1){
		    this.edges[u].push(v)
		}
	}
	getRandomNumber(n){
             return Math.floor(Math.random()*n)
          }
	dfs(v){
	   console.log(v)
	   this.visited[v] = 1
	   for(let w of this.edges[v]){
	   	if(this.visited[w]==0){	
	   	   this.dfs(w)
	   	}
	   }
	}
	searchPath(v){
	   var count = 0
	   while(count<this.totalCount){
	   	this.record[v]++
		v = this.searchNextIndex(v)
		count++
	    }
	}
          searchNextIndex(v){
	   	while(this.edges[v].length == 0){
	   	       v = this.getRandomNumber(this.n)
	   	}
		let randomLoc = this.getRandomNumber(this.edges[v].length)
		let nextPoint = this.edges[v][randomLoc]
		return nextPoint
	}
	searchNextLoc(v){
		let nextIndex = this.searchNextIndex(v)
		return locationMapping[v]
	}
	printRecord(){
	       for(let i=0;i<this.record.length;i++){
	       	console.log(i,this.record[i]/this.totalCount)
	       }
	}
}
g = [[0,1],[0,2],[0,3],[1,2],[1,3],[2,3],[3,0]]
var graph = new Graph(4)
for(let arr of g){
	s = arr[0]
	e = arr[1]
	graph.addEdge(s,e)
}


// console.log(locationMapping[0])
