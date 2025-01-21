export interface Action {
    username: string
    content: string
    embeds: Partial<Embed>[]
}

export interface Embed {
    title: string
    description: string;
    url: string;
}

export enum Type {
    CONTENT = "CONTENT", 
    EMBEDS = "EMBEDS", 
    FILE = "FILE", 
    POLL = "POLL"
}
