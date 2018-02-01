class Graph{
	constructor(graphData,n){
		this.graphData = graphData
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
		this.init()
	}
	init(){
		for(let arr of this.graphData){
			let s = arr[0]
			let e = arr[1]
			this.addEdge(s,e)
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
