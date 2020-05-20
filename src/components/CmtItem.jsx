import React from 'react'
import cssobj from '@/css/CmtItem.scss'

export default function CmtItem(props) {
    return <div className={cssobj.cmtBox}>
        <h1 className={cssobj.title}>评论人：{props.user}</h1>
        <p className={cssobj.content}>评论内容：{props.content}</p>
    </div>
}