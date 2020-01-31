import React from "react";

type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface PropsI { }
interface StateI {
    data: respX[];
}

export class ComponentArticle extends React.Component<PropsI, StateI> {

    state: StateI = { data: [] }

    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const json = await response.json();
        this.setState({ data: json });
    }

    render() {
        return (
            <div className="Article">
                {this.state.data.map(el => (
                    <li key={el.id}>
                        {el.body}
                    </li>
                ))}
            </div>
        );
    }
}