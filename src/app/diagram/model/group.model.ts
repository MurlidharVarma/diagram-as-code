import Box from "./box.model"

export default interface Group{
    name: string
    desc?: string | undefined,
    components: Box[]
}