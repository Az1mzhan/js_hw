'use strict'

import {TodoItem} from "./TodoItem";
import {useEffect, useState} from "react";
import {Post} from "../types/Post";

export const Todolist = () => {
    // States of the React component
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<any>(null);
    const [task, setTask] = useState<string>("");

    // Method for fetch request from JSON server
    const fetchData = async (): Promise<any> => {
        try {
            let req = await fetch("https://my-json-server.typicode.com/Az1mzhan/todolist-server/posts");
            let json = await req.json();

            await setPosts(json);
        }
        catch (e) {
            setError(e);
        }
    }

    const addItemHandler = () => {
        let post: Post = {id: posts.length, task: task, isMarked: false};
        setPosts(posts => [...posts, post]);
    }

    const generalRemoveItemHandler = (item: Post) => {
        setPosts(posts.filter(post => post !== item));
    }

    const generalMarkItemHandler = (item: Post) => {
        let elem: Post = {...item, isMarked: !item.isMarked};
        setPosts(posts.map(post => (post === item) ? elem : post));
    }

    // Fetch request from JSON server
    useEffect(() => {
        fetchData();
    }, []);

    if (error)
        return <div>Error</div>
    else
        return (
            <div className="todolist-block">
                <h2>Todolist</h2>
                <ul className="todolist">
                    {posts.map(post => (
                        <TodoItem key={post.id} post={post} removeItemHandler={() => {generalRemoveItemHandler(post)}} markItemHandler={() => {generalMarkItemHandler(post)}} />
                    ))}
                </ul>
                <input type="text" onChange={(e: any) => {setTask(e.target.value)}} />
                <button className="add-item-btn" onClick={addItemHandler}>+</button>
            </div>
        )
}