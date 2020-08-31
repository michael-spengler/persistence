
import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"
import { Request } from 'https://deno.land/x/request@1.1.0/request.ts'

export class Persistence {

	private static decoder = new TextDecoder('utf-8')
	private static encoder = new TextEncoder()

	public static async saveToLocalFile(filePath: string, data: string) {
		await Deno.writeFile(`${filePath}`, Persistence.encoder.encode(data))
	}

	public static async readFromLocalFile(localFilePath: string): Promise<string> {
		try {
			return Persistence.decoder.decode(await Deno.readFile(localFilePath))
		} catch(error){
			throw new Error(`error while reading ${localFilePath}: ${error.message}`)
		}
	}

	public static async commitAndPush(projectPath: string, username: string, pw: string, org: string, repo: string, commitMessage: string = "automated commit"): Promise<void> {
		let commandToBeExecuted = `./persistence-commit-and-push.sh ${projectPath} ${username} ${pw} ${org} ${repo} ${commitMessage} `
		await CommandLineProcessor.process(commandToBeExecuted)
	}

	public static async readFromRemoteFile(remoteFilePath: string) {
		const apiResult = await Request.get(remoteFilePath)

		return JSON.stringify(apiResult)
	}

}
