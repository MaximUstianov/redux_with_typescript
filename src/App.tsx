import React from 'react'
import {connect} from 'react-redux'
/*import {getColor} from './actions/PageActions'*/
import {GET_ID} from './actions/PageActions'
import {ComponentDiv} from './components/ComponentDiv';
import {ComponentButton} from './components/ComponentButton';
import {ComponentPostList} from "./components/ComponentPostList";
import {ComponentArticle} from "./components/ComponentArticle";
import {colorData} from './colorData'
import {IProps} from "./interfaces";
import {StateI} from "./interfaces";


class App extends React.Component<IProps, StateI> {

    state: StateI = {data: []}

    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
        const json = await response.json();
        this.setState({data: json});
    }


    render() {
        const {page, getColorAction, getIdAction} = this.props
        const colorComponents = colorData.map(index =>
            <ComponentButton getColor={getColorAction} color={index.myColor} key={index.id}/>
        )

        return (
            <div className="container">
                <ComponentArticle IWantToRedux={page.IWantToRedux}/>
                <ComponentPostList getPostById={getIdAction} data={this.state.data}/>
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
        getIdAction: (IWantToRedux: any) => dispatch({type: GET_ID, payload: IWantToRedux})
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
