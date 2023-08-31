let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")


let count = 0

function increment() {
    count += 1
    console.log(count)
    console.log('clicked')
    countEl.innerText = count
}

function save() {
    let countStr = count + " , "
    saveEl.textContent += countStr
    console.log(count)
    countEl.innerText = 0
    count = 0
    
}
