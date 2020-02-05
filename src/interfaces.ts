export interface IProps {
    getColor?: (name: any) => void;
    background?: any
    getColorAction?: any
    page?: any
    customColors?: any
}

type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

export interface StateI {
    data: respX[];
    changedBody: string
}