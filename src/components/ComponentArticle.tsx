import React from "react";

interface IArticle {
    changedBody: string
}

export class ComponentArticle extends React.Component<IArticle> {

    render() {
        return (
            <div className="About">
                <div className="content">
                    <div className="article">{this.props.changedBody}</div>
                </div>
            </div>
        );
    }
}
