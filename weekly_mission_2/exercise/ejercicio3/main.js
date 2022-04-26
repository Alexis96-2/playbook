import MyRepo from './repo.js'
import MyIssue from'./issue.js'

const repositorio = new MyRepo('Alexis96-2')
const issues = new MyIssue('Alexis96-2')
repositorio.getTotalIssues()
repositorio.getGeneralInfo()
issues.getTitleAndAuthor()
issues.getGeneralInfo()
