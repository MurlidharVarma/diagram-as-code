import Connection from "./connection.model";
import Group  from "./group.model";
import Meta from "./meta.model";

export default interface Specification{
    meta?:Meta | undefined;
    groups?: Group[] | undefined;
    connections?: Connection[] | undefined;
}