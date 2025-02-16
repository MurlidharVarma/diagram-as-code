export default interface Box{
    id: string,
    type: string,
    name: string,
    desc?: string | undefined,
    tags?: string[] | undefined
}