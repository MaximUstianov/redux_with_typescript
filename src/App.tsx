import React from 'react'
import {connect} from 'react-redux'
import {getColor} from './actions/PageActions'
import {IProps} from "./interfaces";
import { ComponentDiv } from './components/ComponentDiv';
import { ComponentButton } from './components/ComponentButton';



class App extends React.Component<IProps> {


    render() {
        const {page, getColorAction} = this.props
        return (
            <div className="container">
                <ComponentButton getColor={getColorAction} color={"yellow"}/>
                <ComponentButton getColor={getColorAction} color={"green"}/>
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
