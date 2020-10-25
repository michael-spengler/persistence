
# Persistence

With this module you can use GitHub as a database. I guess this is only recommendable for small projects.

## Usage Example

```ts

import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"

const projectPathForData = `${Deno.cwd()}/persistence-example-project-folder`


/*************      Local Mode      *************/
const pathToFile = `${projectPathForData}/example-file.json`
await Persistence.saveToLocalFile(pathToFile, JSON.stringify([{foo: "foo :)"}]))

const localFileContent = await Persistence.readFromLocalFile(pathToFile)
console.log(`local file content: ${localFileContent}`)


/*************      Remote Mode - using GitHub as database      *************/
const userName = "michael-spengler"
// import { password } from './topsecret/config.ts'
const org = "michael-spengler"
const repo = "persistence-example-project-folder"
// await Persistence.commitAndPush(projectPathForData, userName, password, org, repo) // commented out as I should not publish my password

const linkToExampleDataRemote = "https://raw.githubusercontent.com/michael-spengler/persistence-example-project-folder/master/example-file.json"
console.log(`remote file content: ${await Persistence.readFromRemoteFile(linkToExampleDataRemote)}`) 
```

## Call usage example via command line
```
  

deno run --allow-net --allow-read --allow-write --allow-run https://deno.land/x/persistence/usage-example.ts
  
  
```

If you get an errormessage like the one shown below, just:
```
  

mkdir persistence-example-project-folder 
  

```
as this folder is used for the usage example and for the tests.

![](https://user-images.githubusercontent.com/43786652/88719502-ad504180-d123-11ea-91c9-ad28cd24274f.png)  


## Execute the tests 
```
  

deno test --allow-net --allow-read --allow-write --allow-run https://deno.land/x/persistence/test.ts
  

``` 

## Support my Open Source Contributions  

If you like my work please consider downloading the brave browser via my promotion link: [https://brave.com/fan464](https://brave.com/fan464).  

![![](https://brave.com/)](https://brave.com/wp-content/uploads/2019/01/logotype-full-color.svg)
