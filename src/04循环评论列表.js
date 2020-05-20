import React from 'react'
import ReactDom from 'react-dom'

import Hello from '@/components/Hello'

//定义父组件class
class Cmlist extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return <div>
            111
        </div>
    }
}

ReactDom.render(
    <div>
        123
        <Cmlist></Cmlist>
    </div>,
    document.getElementById('app'))