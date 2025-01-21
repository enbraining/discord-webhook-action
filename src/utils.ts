import { Type } from "./types";

export function getType(value: string): Type {
    if(Object.values(Type).includes(value as Type)){
        return value as Type
    }

    return Type.CONTENT
}