const repo = {
    name: "LaunchX",
    author: "Alexis96-2",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title:"Launchx-Alexis",
    repositoryNameAssociated:"LaunchX",
    status:"green",
    numberOfComments:2,
    labels:0,
    author:"Alexis96-2",
    dateCreated:"4-4-22",
    lastUpdated:"18-4-22",
    getTitleAndAuthor(){
        return `This issue ${this.title} was created by ${this.author}`
    },
    getGeneralInfo(){
        return `Fue creado el ${this.dateCreated} y su ultima actualización fue el ${this.lastUpdated}. Status: ${this.status}`
    }
}
console.log("--------------")
console.log("Titulo del issues:" + issue.title)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const pullRequest = {
    title: "Cambios chidos",
    branchName: "main",
    dateCreated: "12-4-22",
    status: "green",
    repositoryNameAssociated: "Launchx-Alexis",
    getStatus(){
        return this.status
    },
    getTitleAndAutor(){
        return `This issue ${this.title} was created by ${issue.author}`
    }
}
console.log("--------------")
console.log("Titulo del PullRequest:" + pullRequest.title)
console.log("Status: "+pullRequest.getStatus())
console.log(pullRequest.getTitleAndAutor())

const twitter = {
    user: "@apahel96", 
    username: "Alexis Aparicio", 
    bio: "...", 
    age: 22,
    trending_topic(){
        return `${this.username} like Videogames, Anime, Tecnologia`
    },
    hashtag(){
        return `Hashtags follows #anime, #videogame, #xbox, ...`
    }
}
console.log("--------------")
console.log("User: " + twitter.username)
console.log(twitter.trending_topic())
console.log(twitter.hashtag())

const facebook = {
    user: "@apahel96", 
    username: "Alexis Aparicio", 
    bio: "...", 
    age: 22,
    post(){
        return `${this.username} share a video/photo/post`
    },
    biography(){
        return `Show all post`
    }
}
console.log("--------------")
console.log("User: " + facebook.username)
console.log(facebook.post())
console.log(facebook.biography())

const uber = {
    user:"Alexis Aparicio",
    age:22,
    matricula:"VPJR6",
    travel(){
        return `Zona hotelera - Av Bonampak - Av tulum - Crucero`
    }
}
console.log("--------------")
console.log("Usuario: " + uber.user)
console.log("Zonas de viaje: " + uber.travel())