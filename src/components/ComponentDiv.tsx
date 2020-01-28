import React from 'react'
import '../index.css'

interface DivProps {
    background: any
}

const ComponentDiv: React.FC<DivProps> = props => {
    const style = {
        background: props.background,
    }
    return (
        <div style={style} className="box">  </div>
    )
}

export default ComponentDiv