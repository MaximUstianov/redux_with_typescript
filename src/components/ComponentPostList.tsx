import React from "react";

type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface IPost {
    data: respX[],
    getPostById: (IWantToRedux: any) => void;
}

export class ComponentPostList extends React.Component<IPost> {
    onHandleClick = (id: any) => {
        this.props.getPostById(id)
    }

    render() {
        return (
            <div className="About">

                {this.props.data.map(el => (
                    <li onClick={e => this.onHandleClick(el.body)} key={el.id}>
                        {el.title}
                    </li>
                ))}
            </div>
        );
    }
}
