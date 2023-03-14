'use strict'

import React, {useEffect, useState} from "react";

interface User {
    id: number,
    name: string,
    surname: string
}

// This React Component searches m

export const SearchComponent = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<any>(null);
    const [text, setText] = useState<string>("");

    // Fetch request for the list of users
    const getUsers = async (): Promise<any> => {
        try {
            let users = await fetch("https://my-json-server.typicode.com/Az1mzhan/mock-server/users");
            let json = await users.json();

            setUsers(json);
        }
        catch (error) {
            setError(error);
        }
    }

    // Formatting string in name format
    const nameFormatting = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    // We fetch the server once
    useEffect(() => {getUsers()}, []);

    // Searching algorithm
    useEffect(() => {
        let userList = document.querySelectorAll<HTMLElement>(".user-list-item-span");
        if (text.length !== 0) {
            const regex = "^" + nameFormatting(text);
            console.log(text);
            userList.forEach(user => {
                if (user.textContent !== null && user.textContent.search(regex) !== -1)
                    user.style.backgroundColor = "hotpink";
                else
                    user.style.backgroundColor = "transparent";
            });
        }
        else {
            userList.forEach(user => {
                user.style.backgroundColor = "transparent";
            })
        }
    }, [text]);

    if (error !== null) {
        return <div>Error</div>
    }
    else {
        return (
            <div className="search-component">
                <ul className="user-list">
                    {users.map(user => (
                        <li className="user-list-item" key={user.id}>
                            <span className="user-list-item-span">{user.name} {user.surname}</span>
                        </li>
                    ))}
                </ul>
                <input type="text" onChange={e => {setText(e.target.value)}} />
            </div>
        )
    }
}
