'use strict'

import {useEffect, useState} from "react";

interface Post {
    id: number,
    task: string,
    isMarked: boolean
}

export const Todolist = () => {
    // States of the React component
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<any>(null);
    const [task, setTask] = useState<string>("");
    const [isAddClicked, setIsAddClicked] = useState<boolean>(false);
    const [isRemoveClicked, setIsRemoveClicked] = useState<boolean>(false);
    const [isMarkClicked, setIsMarkClicked] = useState<boolean>(false);
    const [indTarget, setIndTarget] = useState<number>(-1);

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

    // Fetch request from JSON server
    useEffect(() => {
        fetchData();
    }, []);

    // Handling the click event of add list item button
    useEffect(() => {
        if (isAddClicked) {
            let post: Post = {id: posts.length, task: task, isMarked: false};
            posts.push(post);
            setIsAddClicked(false);
        }
    }, [isAddClicked]);

    // Handling the click event of remove list item button
    useEffect(() => {
        if (isRemoveClicked) {
            posts.splice(indTarget, 1);
            setIsRemoveClicked(false);
        }
    }, [isRemoveClicked])

    // Handling the click event of mark list item button
    useEffect(() => {
        if (isMarkClicked) {
            posts[indTarget].isMarked = !posts[indTarget].isMarked;
            setIsMarkClicked(false);
        }
    }, [isMarkClicked])

    if (error)
        return <div>Error</div>
    else
        return (
            <div className="todolist-block">
                <h2>Todolist</h2>
                <ul className="todolist">
                    {posts.map(post => (
                        <li key={post.id}>
                            <h4><span style={(post.isMarked) ? ({backgroundColor: "hotpink"}): ({backgroundColor: "transparent"})}>{post.task}</span></h4>
                            <button className="remove-item-btn" btn-key={post.id} onClick={(e: any) => {setIsRemoveClicked(true); setIndTarget(+(e.target.getAttribute("btn-key")))}}>-</button>
                            <button className="mark-item-btn" btn-key={post.id} onClick={(e: any) => {setIsMarkClicked(true); setIndTarget(+(e.target.getAttribute("btn-key")))}}>Mark</button>
                        </li>
                    ))}
                </ul>
                <input type="text" onChange={(e: any) => {setTask(e.target.value)}} />
                <button className="add-item-btn" onClick={() => {setIsAddClicked(true)}}>+</button>
            </div>
        )
}