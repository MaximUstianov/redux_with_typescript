import React from 'react'

interface IDiv {
    background : any
}

export class ComponentDiv extends React.Component<IDiv> {

    render() {
        const {background} = this.props
        const style = {
            background: background
        }
        return (
            <div className="ib page">
                <div style={style} className="box">  </div>
            </div>
        )
    }
}
