const addButton = document.getElementById("addButton")
const addTaskInput = document.querySelector('.addtask-input')
const parentNode = document.querySelector('.')

// console.log(parentNode)


addButton.addEventListener("click", (event)=> {
    const result = event.target
    console.log("button is working");
})



addTaskInput.addEventListener('input', (event)=> {
    const result = event.target.value
    console.log(result)
})

console.log("nono");