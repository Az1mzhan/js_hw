'use strict'

import {useEffect, useState} from "react";

interface Post {
    id: number,
    task: string
}

export const Todolist = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<any>(null);
    const [task, setTask] = useState<string>("");
    const [isAddClicked, setIsAddClicked] = useState<boolean>(false);
    const [isRemoveClicked, setIsRemoveClicked] = useState<boolean>(false);
    const [indTarget, setIndTarget] = useState<number>(-1);

    // Method for fetch request from JSON server
    const fetchServer = async (): Promise<any> => {
        try {
            let req = await fetch("https://my-json-server.typicode.com/Az1mzhan/todolist-server/posts");
            let json = await req.json();

            setPosts(json);
        }
        catch (e) {
            setError(e);
        }
    }

    // Fetch request from JSON server
    useEffect(() => {fetchServer()}, []);

    // Checking the mutation of isClicked variable
    useEffect(() => {
        if (isAddClicked) {
            let post: Post = {id: posts.length, task: task};
            posts.push(post);
            setIsAddClicked(false);
        }
    }, [isAddClicked]);

    useEffect(() => {
        if (isRemoveClicked) {
            posts.splice(indTarget, 1);
            setIsRemoveClicked(false);
        }
    }, [isRemoveClicked])

    if (error)
        return <div>Error</div>
    else
        return (
            <div className="todolist-block">
                <h2>Todolist</h2>
                <ul className="todolist">
                    {posts.map(post => (
                        <li key={post.id}>
                            <h4>{post.task}</h4>
                            <button className="remove-item-btn" btn-key={post.id} onClick={(e: any) => {setIsRemoveClicked(true); setIndTarget(+(e.target.getAttribute("btn-key")))}}>-</button>
                        </li>
                    ))}
                </ul>
                <input type="text" onChange={(e: any) => {setTask(e.target.value)}} />
                <button className="add-item-btn" onClick={() => {setIsAddClicked(true)}}>+</button>
            </div>
        )
}