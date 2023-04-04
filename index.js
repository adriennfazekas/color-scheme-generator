const feed = document.getElementById("colors-grid")

document.getElementById("get-btn").addEventListener("click", function() {
    const inputColor = (document.getElementById("input").value).substring(1) 
    const mode = document.getElementById("colors").value
    feed.innerHTML = ''

    fetch(`https://www.thecolorapi.com/scheme?hex=${inputColor}&mode=${mode}&count=5`,{
    method: "GET",
    body: JSON.stringify(),
    headers: {"Content-Type": "application/json"}
    })
        .then(res=> res.json())
        .then(data=> {
            console.log(data.colors)
            data.colors.forEach(color => render(color.hex))            
        })
})

function render(hex) {
    const color = hex.value
    feed.innerHTML += `
        <div class="color-el" style="background-color: ${color};"></div>
    `
}
