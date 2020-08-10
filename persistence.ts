import * as log from "https://deno.land/std/log/mod.ts";
import { CommandLineProcessor } from "https://deno.land/x/commandline_processor/commandline-processor.ts"
import { Request } from 'https://deno.land/x/request@1.1.0/request.ts'

export class Persistence {

	private static decoder = new TextDecoder('utf-8')
	private static encoder = new TextEncoder()

	public static async saveToLocalFile(filePath: string, data: string) {
		log.info(`saving data to local file: ${filePath}`)
		await Deno.writeFile(`${filePath}`, Persistence.encoder.encode(data))
	}

	public static async readFromLocalFile(localFilePath: string): Promise<string> {
		log.info(`reading data from local file: ${localFilePath}`)
		return Persistence.decoder.decode(await Deno.readFile(localFilePath))
	}

	public static async commitAndPush(projectPath: string, username: string, pw: string, org: string, repo: string, commitMessage: string = "automated commit"): Promise<void> {
		let commandToBeExecuted = `./persistence-commit-and-push.sh ${projectPath} ${username} ${pw} ${org} ${repo} ${commitMessage} `
		log.info(`executing command: ${commandToBeExecuted}`)
		log.info(await CommandLineProcessor.process(commandToBeExecuted))
	}

	public static async readFromRemoteFile(remoteFilePath: string) {
		log.info(`reading data from remote file: ${remoteFilePath}`)
		const apiResult = await Request.get(remoteFilePath)

		return JSON.stringify(apiResult)
	}

}
