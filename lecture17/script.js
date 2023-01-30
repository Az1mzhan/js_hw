document.querySelector("#clear-text").addEventListener('click', () => {
    document.querySelector("#text").innerText = "";
})

document.querySelector("#vanish-btn").addEventListener('click', () => {
    document.querySelector("#vanish-btn").style.visibility = "hidden";
})

document.querySelector("#swap-input-btn").addEventListener('click', () => {
    if (document.querySelector("#swap-input").value != null) {
        let x = document.querySelector("#swap-input-btn");
        let y = document.querySelector("#swap-input");
        let temp = x.textContent;
        x.textContent = y.value;
        y.value = temp;
    }
})