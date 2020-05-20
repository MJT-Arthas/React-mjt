import React from "react";

export default class Bindevent extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "111",
    };
  }

  render() {
    return (
      <div>
        Event组件
        <hr />
        <button onClick={() => this.show()}>按钮</button>
        <h1>{this.state.msg}</h1>
				<input type='text' style={{width:"100%"}} value={this.state.msg} onChange={(e)=>this.txtChange(e)}/>
				<hr/>
				<input type='text' style={{width:"100%"}} value={this.state.msg} onChange={(e)=>this.txtChange2(e)} ref="txt"/>
      </div>
    );
	}
	txtChange=(e)=>{
		// const newValue = e.target.value
		this.setState({
      msg: `${e.target.value}`,
    });
	}
	txtChange2=(e)=>{
		// const newValue = e.target.value
		this.setState({
      msg: `${this.refs.txt.value}`,
    });
	}
  show = () => {
    console.log("ok");
    this.setState({
      msg: "123",
    });
  };
}
