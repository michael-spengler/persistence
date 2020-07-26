import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"
import api from 'https://deno.land/x/api/index.ts'

export class Persistence {

	private static decoder = new TextDecoder('utf-8')
	private static encoder = new TextEncoder()

	public static async saveToLocalFile(filePath: string, data: string) {

		await Deno.writeFile(`${filePath}`, Persistence.encoder.encode(data))
	}

	public static async readFromLocalFile(localFilePath: string): Promise<string> {
		return Persistence.decoder.decode(await Deno.readFile(localFilePath))
	}

	public static async commitAndPush(projectPath: string, username: string, pw: string, org: string, repo: string, commitMessage: string = "automated commit"): Promise<void> {
		let commandToBeExecuted = `./persistence-commit-and-push.sh ${projectPath} ${username} ${pw} ${org} ${repo} ${commitMessage} `
		console.log(`executing command: ${commandToBeExecuted}`)
		console.log(await CommandLineProcessor.process(commandToBeExecuted))
	}

	public static async readFromRemoteFile(remoteFilePath: string) {
		const apiResult = await api.get(remoteFilePath)
		console.log('abc')
		console.log(apiResult)
		console.log('abc')

		return JSON.stringify(apiResult)
	}

}
