import React from 'react'
import {connect} from 'react-redux'
import {GET_ID} from './actions/PageActions'
import {ComponentPostList} from "./components/ComponentPostList";
import {ComponentArticle} from "./components/ComponentArticle";
import {IId} from './actions/PageActions'
import {ThunkDispatch} from "redux-thunk";


type respX = {
    "id": any,
    "userId": any,
    "title": any,
    "body": any,
}

interface IProps {
    getPostByIdAction: any,
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
        const {page, getPostByIdAction} = this.props
        return (
            <div className="container">
                <ComponentArticle post={page.post}/>
                <ComponentPostList getPostById={getPostByIdAction} data={this.state.data}/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        page: state.page,
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, IId>) => {
    return {
        getPostByIdAction: (post: any) => dispatch({type: GET_ID, payload: post})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
