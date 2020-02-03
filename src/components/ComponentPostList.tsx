import React from "react";


type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface PropsI {
}

interface StateI {
    data: respX[];
    changedBody: string
    changedTitle: string
}

export class ComponentPostList extends React.Component<PropsI, StateI> {

    state: StateI = {data: [], changedBody: '', changedTitle: 'Click to choose article'}

    async getPostById(id: any) {
        const myResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const myJson = await myResponse.json();
        this.setState({changedBody: myJson.body, changedTitle: myJson.title});
    }

    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const json = await response.json();
        this.setState({data: json});
    }


    render() {
        return (
            <div className="About">
                <div className="content">
                    <div className="title">{this.state.changedTitle}</div>
                    <div className="article">{this.state.changedBody}</div>
                </div>
                {this.state.data.map(el => (
                    <li onClick={e => this.getPostById(el.id)} key={el.id}>
                        {el.title}
                    </li>
                ))}
            </div>
        );
    }
}
