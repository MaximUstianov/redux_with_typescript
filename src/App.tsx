import React, { useState } from 'react'
import {connect} from 'react-redux'
import ComponentButton from './components/ComponentButton'
import ComponentDiv from './components/ComponentDiv'
import {getColor} from './actions/PageActions'





const App: React.FC = () => {

  const [page, getColorAction] = useState<any>('')

  return (

      <div className="container">
        <ComponentButton
         getColor={getColorAction}/>
        <ComponentDiv background={page.background}/>
      </div>

  )
}


const mapStateToProps = (store: any) => {
  return {
    page: store.page,
  }
}
const mapDispatchToProps = (dispatch:any) => {
  return {
    getColorAction: () => dispatch(getColor()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
