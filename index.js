const feed = document.getElementById("colors-grid")
let mode = ''

document.getElementById("get-btn").addEventListener("click", function() {
    const inputColor = (document.getElementById("input").value).substring(1) 
    mode = document.getElementById("colors").value
    feed.innerHTML = ''

    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor}&mode=${mode}&count=5`,{
    method: "GET",
    body: JSON.stringify(),
    headers: {"Content-Type": "application/json"}
    })
        .then(res=> res.json())
        .then(data=> {
            const colors = data.colors
            console.log(colors)
            data.colors.forEach(color => renderColor(color.hex)) 
            data.colors.forEach(color => renderColorName(color.hex))
        })
})

function renderColor(hex) {
    feed.innerHTML += `
        <div class="color-el" id="${hex.value}" data-copy="${hex.value}" style="background-color: ${hex.value};"></div>
    `
}
function renderColorName(hex) {
    feed.innerHTML += `<div class="color-name" id="${hex.value}" data-copy="${hex.value}">${hex.value}</div>`
}

document.addEventListener("click", function(e) {
    if(e.target.dataset.copy) {
        copyColorName(e.target.dataset.copy)
    }
    if(e.target.id === mode) {
    }
})

function copyColorName(colorId) {
    navigator.clipboard.writeText(colorId)
    const toastEl = document.getElementById("toast")
    toastEl.classList.add("show")
    toastEl.style.backgroundColor = colorId
    setTimeout(() => {
        toastEl.classList.remove("show")
    }, 3000)
}

function checkmark(mode) {
    console.log("hehe")
    const modeEl = document.getElementById(mode)
    modeEl.classList.toggle("check")
}