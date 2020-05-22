import React from 'react'
import ReactDom from 'react-dom'
import BindEvent from '@/components/BindEvent'
//定义父组件class


ReactDom.render(
    <div>
        123
        <BindEvent></BindEvent>
        <hr/>
    </div>,
    document.getElementById('app'))