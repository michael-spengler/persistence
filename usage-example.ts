
// import { Persistence } from "https://deno.land/x/persistence/persistence.ts"
// import { Persistence } from "https://raw.githubusercontent.com/michael-spengler/persistence/master/persistence.ts"
import { Persistence } from "./persistence.ts"
import { pw } from './topsecret/config.ts'

// saving to local file
const projectPath = `${Deno.cwd()}/persistence-example-project-folder`
const pathToFile = `${projectPath}/example-file.json`
await Persistence.saveToLocalFile(pathToFile, JSON.stringify([{foo: "foo :)"}]))

// reading from local file
const localFileContent = await Persistence.readFromLocalFile(pathToFile)
console.log(localFileContent)

// saving to remote repo
const userName = "michael-spengler"
const password = pw
const org = "michael-spengler"
const repo = "persistence-example-project-folder"
await Persistence.commitAndPush(projectPath, userName, password, org, repo) // commented out as I should not publish my pw

// reading from remote repo
const linkToExampleDataRemote = "https://raw.githubusercontent.com/michael-spengler/persistence-example-project-folder/master/example-file.json"
console.log(`remote file content: ${await Persistence.readFromRemoteFile(linkToExampleDataRemote)}`) 
