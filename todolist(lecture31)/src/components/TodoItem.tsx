'use strict'

import React from "react";
import {Post} from "../types/Post";

interface Props {
    post: Post,
    removeItemHandler: () => void,
    markItemHandler: () => void
}

export const TodoItem = ({post, removeItemHandler, markItemHandler}: Props) => {

    return (
        <li key={post.id}>
            <h4><span style={(post.isMarked) ? ({backgroundColor: "hotpink"}): ({backgroundColor: "transparent"})}>{post.task}</span></h4>
            <button className="remove-item-btn" onClick={removeItemHandler}>-</button>
            <button className="mark-item-btn" onClick={markItemHandler}>Mark</button>
        </li>
    )
}