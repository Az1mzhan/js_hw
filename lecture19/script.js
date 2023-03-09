let getFetch = fetch("https://my-json-server.typicode.com/Az1mzhan/mock-server/users", {
    method: "GET"
})
    .then(data => data.json())
    .then(users => {
        let el = document.createElement("ul");
        document.body.appendChild(el);
        for (let i = 0; i < users.length; ++i) {
            let li = document.createElement("li");
            li.innerHTML = users[i].name + ' ' + users[i].surname + ' - ' + users[i].age;
            el.appendChild(li);
        }
    })
    .catch(e => console.error(e))
    .finally(() => console.info("GET Request has ended"));

let postFetch = fetch("https://my-json-server.typicode.com/Az1mzhan/mock-server/posts", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({'id': 3, 'text': 'Viva la revolution!'})
})
    .then(data => data.json())
    .then(res => console.log(res))
    .catch(e => console.error(e))
    .finally(console.info("POST request has ended"));

let putReq = async () => {
    let putFetch = await fetch("https://my-json-server.typicode.com/Az1mzhan/mock-server/users", {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({'id': 4, 'name': 'Gustavo', 'surname': 'Fring', 'age': 53})
    });
    let pfJSON = await putFetch.json();
    return pfJSON;
}

putReq().then(data => data);
