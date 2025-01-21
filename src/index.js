import core, { debug } from '@actions/core'
import ky from 'ky'

async function main(){
    debug("Loading input parameter.")

    const webhookUrl = core.getInput("webhook-url")
    const username = core.getInput("username")
    const content = core.getInput("content")

    debug("Send webhook message.")

    const body = {
        username: username,
        content: content,
    }

    await ky.post(webhookUrl, { json: body })
}

main()
