import React from "react";
import CmtItem from "@/components/CmtItem";
import cssobj from "@/css/Cmtlist.scss";
import "bootstrap/dist/css/bootstrap.css";

export default class Cmtlist extends React.Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        { id: 1, user: "张三", content: "哈哈，沙发" },
        { id: 2, user: "张三", content: "哈哈，沙发" },
        { id: 3, user: "张三", content: "哈哈，沙发" },
        { id: 4, user: "张三", content: "哈哈，沙发" },
        { id: 5, user: "张三", content: "哈哈，沙发" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1 className={cssobj.title}>这是评论列表组件</h1>
        <button className="btn btn-primary">按钮</button>

			<div className="panel panel-primary"></div>

        {this.state.CommentList.map((item) => (
          <CmtItem key={item.id} {...item}></CmtItem>
        ))}
      </div>
    );
  }
}
