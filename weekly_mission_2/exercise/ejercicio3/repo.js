export default class Repo{
    constructor(repo){
        this.repo = repo;
        this.repositorio = {
            name: "LaunchX",
            author: "Alexis96-2",
            language: "JavaScript",
            numberOfCommits: 100,
            stars: 199,
            forks: 299,
            issues_open: 10,
            issues_close: 10,
        };
    }
    /*repositorio = {
        name: "LaunchX",
        author: "Alexis96-2",
        language: "JavaScript",
        numberOfCommits: 100,
        stars: 199,
        forks: 299,
        issues_open: 10,
        issues_close: 10,
    };*/
    getTotalIssues(){
        console.log(this.repositorio.issues_open + this.repositorio.issues_close)
    }
    getGeneralInfo(){
        console.log(`This repository ${this.repositorio.name} was created by ${this.repo}`)
    }
}