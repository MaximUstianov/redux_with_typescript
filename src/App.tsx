import React from 'react'
import {connect} from 'react-redux'
import {getColor} from './actions/PageActions'
import {AppState} from "./store/configureStore";
import {ThunkDispatch} from 'redux-thunk';
import {Color} from "./store/types";
import {bindActionCreators} from 'redux';

type Props = LinkDispatchProps;

interface LinkDispatchProps {
    getColor: (background: any) => void;
    background?: any;
}

interface LinkStateProps {
    page: any;
}

class App extends React.Component<Props> {
    render() {
        const style = {
            background: this.props.background
        }
        return (
            <div className="container">
                <button className="btn" onClick={this.props.getColor}>
                    Click me
                </button>
                <div style={style} className="box">  </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState): LinkStateProps => {
    return {
        page: state.page,
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Color>): LinkDispatchProps => ({
    getColor: bindActionCreators(getColor, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
