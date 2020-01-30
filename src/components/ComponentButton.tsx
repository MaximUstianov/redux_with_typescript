import React from 'react'

interface IButton {
    getColor: (name: any) => void;
    color?: any
}

export class ComponentButton extends React.Component<IButton> {

    onBtnClick = () => {
        this.props.getColor(this.props.color)
    }

    render() {
        const style = {
            background: this.props.color
        }
        return (
            <div className="ib page">
                <button style={style} className="btn" onClick={this.onBtnClick}>
                    Change color
                </button>
            </div>
        )
    }
}