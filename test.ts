import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// import { Persistence } from "https://deno.land/x/persistence/persistence.ts"
import { Persistence } from './persistence.ts'

Deno.test("saving correctly to local file", async (): Promise<void> => {
    const pathToFile = `${Deno.cwd()}/persistence-example-project-folder/example-file.json`
    const testData: any[] = [{foo: "foo :)"}]

    await Persistence.saveToLocalFile(pathToFile, JSON.stringify(testData))

    const localFileContentAsJSON = JSON.parse(await Persistence.readFromLocalFile(pathToFile))

    assertEquals(localFileContentAsJSON, testData)

});


Deno.test("reading correctly from remote file", async (): Promise<void> => {
    const linkToExampleDataRemote = "https://raw.githubusercontent.com/michael-spengler/persistence-example-project-folder/master/example-file.json"
    const remoteFileContentAsJSON = JSON.parse(await Persistence.readFromRemoteFile(linkToExampleDataRemote))

    assertEquals(remoteFileContentAsJSON, [{foo: "foo :)"}])
});


Deno.test("committing and pushing", async (): Promise<void> => {
    const projectPath = `${Deno.cwd()}/persistence-example-project-folder`
    const org = 'michael-spengler'
    const repo = 'persistence'
    const userName = 'michael-spengler'
    const pw = 'from here on this test method is only for documentation :) - therefore commenting the following statement'
    // await Persistence.commitAndPush(projectPath, userName, pw, org, repo)
});
