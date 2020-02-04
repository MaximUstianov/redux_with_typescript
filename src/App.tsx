import React from 'react'
import {connect} from 'react-redux'
import {getColor} from './actions/PageActions'
import {ComponentDiv} from './components/ComponentDiv';
import {ComponentButton} from './components/ComponentButton';
import {ComponentPostList} from "./components/ComponentPostList";
import {ComponentArticle} from "./components/ComponentArticle";
import {colorData} from './colorData'
import {IProps} from "./interfaces";
import {StateI} from "./interfaces";


class App extends React.Component<IProps, StateI> {

    state: StateI = {data: [], changedBody: '', changedTitle: 'Click on article to read it'}

    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const json = await response.json();
        this.setState({data: json});
    }

    getPostById = async (id: any) => {
        const myResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const myJson = await myResponse.json();
        this.setState({changedBody: myJson.body, changedTitle: myJson.title});
    }

    render() {
        const {page, getColorAction} = this.props
        const colorComponents = colorData.map(index =>
            <ComponentButton getColor={getColorAction} color={index.myColor} key={index.id}/>
        )

        return (
            <div className="container">
                <ComponentArticle changedBody={this.state.changedBody} changedTitle={this.state.changedTitle}/>
                <ComponentPostList onClick={this.getPostById} data={this.state.data}/>
                {colorComponents}
                <ComponentDiv background={page.background}/>
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
        getColorAction: (background: any) => dispatch(getColor(background))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
