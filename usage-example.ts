
// import { Persistence } from "https://deno.land/x/persistence/persistence.ts"
import { Persistence } from "https://raw.githubusercontent.com/michael-spengler/persistence/master/persistence.ts"

const projectPathForData = `${Deno.cwd()}/persistence-example-project-folder`



/*************      Local Mode      *************/
const pathToFile = `${projectPathForData}/example-file.json`
await Persistence.saveToLocalFile(pathToFile, JSON.stringify([{foo: "foo :)"}]))

const localFileContent = await Persistence.readFromLocalFile(pathToFile)
console.log(localFileContent)



/*************      Remote Mode - using GitHub as database      *************/
const userName = "michael-spengler"
// import { password } from './topsecret/config.ts'
const org = "michael-spengler"
const repo = "persistence-example-project-folder"
// await Persistence.commitAndPush(projectPathForData, userName, password, org, repo) // commented out as I should not publish my pw

const linkToExampleDataRemote = "https://raw.githubusercontent.com/michael-spengler/persistence-example-project-folder/master/example-file.json"
console.log(`remote file content: ${await Persistence.readFromRemoteFile(linkToExampleDataRemote)}`) 
