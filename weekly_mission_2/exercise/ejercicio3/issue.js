export default class Issues{
    constructor(issues){
        this.issues=issues;
        this.issue={
            title:"Launchx-Alexis",
            repositoryNameAssociated:"LaunchX",
            status:"green",
            numberOfComments:2,
            labels:0,
            author:"Alexis96-2",
            dateCreated:"4-4-22",
            lastUpdated:"18-4-22",
        }
    }
    getTitleAndAuthor(){
        console.log(`This issue ${this.issue.title} was created by ${this.issue.author}`)
    }
    getGeneralInfo(){
        console.log(`Fue creado el ${this.issue.dateCreated} y su ultima actualización fue el ${this.issue.lastUpdated}. Status: ${this.issue.status}`)
    }
}