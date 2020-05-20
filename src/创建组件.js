import React from 'react'
import ReactDom from 'react-dom'

import Hello from '@/components/Hello'


class Movie extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: "大家好"
        }
    }
    render() {//渲染对应的虚拟dom
        
        this.state.msg = "被我修改了"
        return <div>
            姓名：{this.props.name}<br />
            年龄：{this.props.age}<br />
            <h1>{this.state.msg}</h1>
        </div>
    }
}

const user = {
    name: '张三',
    age: 18
}


const mydiv = <div>
    <h1>这是一个大大的H1</h1>
</div>
const testArry = ["张三", "李四", "王五"]
const newArry = []
const strArry = ['2', '4', '6']
strArry.forEach(element => {
    const temp = <h1 key={element}>{element}</h1>
    newArry.push(temp);
});
// function Hello(props){
//     console.log(props.name);
// return <div>{newArry}</div>
// }
const dog = {
    name: "james",
    age: 18
}

ReactDom.render(
    <div>
        {newArry}
        <hr />
        {
            testArry.map(item => <h3 key={item}>{item}</h3>)
        }
        <hr />
        {/* <Hello {...dog}></Hello> */}
        <Movie {...user}></Movie>
    </div>,
    document.getElementById('app'))