import React from "react";

interface IArticle {
    post: any
}

export class ComponentArticle extends React.Component<IArticle> {

    render() {
        return (
            <div className="About">
                <div className="content">
                    <div className="article">{this.props.post}</div>
                </div>
            </div>
        );
    }
}
