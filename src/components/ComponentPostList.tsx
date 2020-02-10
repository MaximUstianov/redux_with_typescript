import React from "react";

type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface IPost {
    data: respX[],
    getPostById: (post: any) => void;
}

export class ComponentPostList extends React.Component<IPost> {
    onHandleClick = (postId: any) => {
        this.props.getPostById(postId)
    }

    render() {
        return (
            <div className="About">
                {this.props.data.map(el => (
                    <li onClick={e => this.onHandleClick(el.id)} key={el.id}>
                        {el.title}
                    </li>
                ))}
            </div>
        );
    }
}
