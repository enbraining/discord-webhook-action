import { getInput, debug} from '@actions/core'
import ky from 'ky'
import { Action, Embed, Type } from './types'
import { getType } from './utils'

function getEmbed(): Partial<Embed> {
    const title = getInput("title")
    const description = getInput("description")
    const url = getInput("url")

    const embed: Partial<Embed> = {}

    if(title){
        embed['title'] = title
    }

    if(description){
        embed['description'] = description
    }

    if(url){
        embed['url'] = url
    }

    return embed
}

async function main(){
    debug("Loading input parameter.")

    const webhookUrl = getInput("webhook-url")
    const type = getType(getInput("type"))
    const username = getInput("username")
    const content = getInput("content")
    
    debug("Send webhook message.")

    const action: Partial<Action> = {
        content: content,
    }

    if(username){
        action.username = username
    }

    if(type === Type.CONTENT){
        action['content'] = content
    } else if(type === Type.EMBEDS){
        const embed = getEmbed()
        action['embeds'] = [embed]
    }

    await ky.post(webhookUrl, { json: action })
}

main()
