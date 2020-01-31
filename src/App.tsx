import React from 'react'
import {connect} from 'react-redux'
import {getColor} from './actions/PageActions'
import {IProps} from "./interfaces";
import {ComponentDiv} from './components/ComponentDiv';
import {ComponentButton} from './components/ComponentButton';
import {colorData} from './colorData'
import {ComponentPostList} from "./components/ComponentPostList";
/*import {ComponentArticle} from "./components/ComponentArticle";*/


class App extends React.Component<IProps> {
    render() {
        const {page, getColorAction} = this.props
        const colorComponents = colorData.map(index =>
            <ComponentButton getColor={getColorAction} color={index.myColor} key={index.id}/>
        )

        return (
            <div className="container">
                <ComponentPostList />
            {/*    <ComponentArticle />*/}
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
