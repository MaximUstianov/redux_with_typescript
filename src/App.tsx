import React from 'react'
import {connect} from 'react-redux'
import { getPostById} from './actions/PageActions'
import {ComponentPostList} from "./components/ComponentPostList";
import {ComponentArticle} from "./components/ComponentArticle";


type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface IProps {
    getPostById: any,
    page: any,
}

interface StateI {
    data: respX[];
}


class App extends React.Component<IProps, StateI> {

    state: StateI = {data: []}

    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const json = await response.json();
        this.setState({data: json});
    }

    render() {
        const {page, getPostById} = this.props
        return (
            <div className="container">
                <ComponentArticle post={page.post}/>
                <ComponentPostList getPostById={getPostById} data={this.state.data}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        page: state.page,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPostById: (post: any) => dispatch(getPostById(post))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
