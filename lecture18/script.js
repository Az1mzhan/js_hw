document.getElementById("req-btn").addEventListener('click', () => {
    let fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    console.log(fetchPromise);

    fetchPromise.then((resp) => {
        let jsonPromise = resp.json();
        jsonPromise.then((data) => {
            for (let i = 0; i < 3; ++i)
                console.log(data[i]);
        })
    })
})