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
}

export class ComponentPostList extends React.Component<PropsI, StateI> {

    state: StateI = {data: []}

    getPostById = (id: any) => {

        console.log(this.state.data[id])
          /*  console.log(this.state.data[0].body)*/
    }

    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const json = await response.json();
        this.setState({data: json});
    }


    render() {
        return (
            <div className="About">
                {this.state.data.map(el => (
                    <li onClick={this.getPostById} key={el.id}>
                        {el.title}
                        {console.log("dfdfdf")}
                    </li>
                ))}
            </div>
        );
    }
}
