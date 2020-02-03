import React from "react";

interface IArticle {
    changedBody: string
    changedTitle: string
}

export class ComponentArticle extends React.Component<IArticle> {

    render() {
        return (
            <div className="About">
                <div className="content">
                    <div className="title">{this.props.changedTitle}</div>
                    <div className="article">{this.props.changedBody}</div>
                </div>
            </div>
        );
    }
}
