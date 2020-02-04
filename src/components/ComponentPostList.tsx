import React from "react";

type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface IPost {
    data: respX[],
    onClick: (id: any) => void;
}

export class ComponentPostList extends React.Component<IPost> {

    render() {
        return (
            <div className="About">

                {this.props.data.map(el => (
                    <li onClick={e => this.props.onClick(el.id)} key={el.id}>
                        {el.title}
                    </li>
                ))}
            </div>
        );
    }
}
