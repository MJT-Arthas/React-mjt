import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class ToDOItem extends Component {
  constructor(props) {
    super(props);
    this.delList = this.delList.bind(this);
  }

  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    console.log("children render");
    const { content } = this.props;
    return <div onClick={this.delList}>{content}</div>;
  }

  delList() {
    // this.props.delList(this.props.index);
    // 解构
    const { delList, index } = this.props;
    delList(index);
  }
}
// ToDOItem.propTypes = {
//   content: PropTypes.string,
//   delList: PropTypes.func,
//   index: PropTypes.number,
// };
