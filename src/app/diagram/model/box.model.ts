export default interface Box{
    id: string,
    type: string,
    name: string,
    ref?: string | undefined,
    desc?: string | undefined,
    tags?: string[] | undefined
}