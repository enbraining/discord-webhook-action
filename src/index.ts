import { debug } from '@actions/core'
import ky from 'ky'
import { Action, Config, Embed, Type } from './types'
import { getConfig } from './utils'

function getEmbed(config: Config): Partial<Embed> {
    const embed: Partial<Embed> = {
        title: config.title,
        description: config.description,
        url: config.embedUrl,
        color: config.color,
        image: config.imageUrl ? { url: config.imageUrl } : undefined,
    }

    return embed
}

async function main(){
    const config: Config = getConfig()
    const action: Partial<Action> = {}
    
    if(config.username){
        action.username = config.username
    }
    
    switch(config.type){
        case Type.CONTENT: {
            action['content'] = config.content
        };
        
        case Type.EMBEDS: {
            const embed = getEmbed(config)
            action['embeds'] = [embed]
        };
    }

    debug("Send webhook message.")

    await ky.post(config.webhookUrl, { json: action })
}

main()
