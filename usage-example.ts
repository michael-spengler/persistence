
// import { Persistence } from "https://deno.land/x/persistence/persistence.ts"
import { Persistence } from "https://raw.githubusercontent.com/michael-spengler/persistence/master/persistence.ts"

// saving to local file
const pathToData = `${Deno.cwd()}/example-file.json`
await Persistence.saveToLocalFile(pathToData, JSON.stringify([]))

// reading from local file
const localFileContent = await Persistence.readFromLocalFile(pathToData)
console.log(localFileContent)

// saving to remote repo
const projectPath = `${Deno.cwd()}/persistence-example-project-folder`
// await Persistence.commitAndPush(projectPath, org, repo, userName, pw) // commented out as I should not publish my pw

// reading from remote repo
const linkToExampleDataRemote = "https://raw.githubusercontent.com/michael-spengler/persistence/master/example-file.json"
const remoteFileContent = Persistence.readFromRemoteFile(linkToExampleDataRemote)
console.log(`remote file content: ${remoteFileContent}`) 
