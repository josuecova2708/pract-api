

/* Los siguientes nombres de funciones son una sugerencia de funciones que necesitarás en tu programa,
sin embargo, no te limites solo a estas funciones. Crea tantas como consideres necesarias.

La estructura de cada objeto "tarea" es la siguiente:

{
  id: 1,
  title: "tarea",
  completed: false
}
 async function getData() {
    const data = await fetch("https://rickandmortyapi.com/api/character")
    const jsonData = await data.json()
    console.log(jsonData)
      jsonData.results.forEach(el => {
        const li = document.createElement("li")
        const h5 = document.createElement("h5")
        const img = document.createElement("img")
        const h6 = document.createElement("h6")
        h5.textContent= el.name
        img.src = el.image
        h6.textContent = el.genre
        li.append(h5,img,h6)
        list.appendChild(li)
    });
} 
*/
const taskC = document.querySelector("#tasks_container")
const all = document.querySelector("#all")
const active = document.querySelector("#active")
const completo = document.querySelector("#complete")
const search = document.querySelector(".searchBar")

all.addEventListener("click",getDataAll)
active.addEventListener("click",getDataActive)
completo.addEventListener("click", getDataComplete)
/* getDataAll() */
/* getDataActive()*/
/* getDataComplete()
 */


async function getDataAll() {
  taskC.innerHTML=""
const datos = await fetch("https://jsonplaceholder.typicode.com/todos")
const jsonData = await datos.json()
console.log(jsonData)
jsonData.forEach(element => {
/*  const input = document.createElement("input")
input.type = "checkbox"
input.textContent = element.completed
taskC.appendChild(input)
 */ 
taskC.innerHTML+= `<div class="first_input d-flex justify-content-center align-items-center">
          <input  class=" me-2" type="checkbox"> <span class="input_message">${element.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6 icon_delete">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
        </div>`

});


}

async function getDataActive() {
  taskC.innerHTML=""
  const datos = await fetch("https://jsonplaceholder.typicode.com/todos")
  const jsonData = await datos.json()
  
  jsonData.forEach(el=> {
    if (el.completed === false) {
    taskC.innerHTML+= `<div class="first_input d-flex justify-content-center align-items-center">
          <input  class=" me-2" type="checkbox"> <span class="input_message">${el.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6 icon_delete">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
        </div>`
  }
  })
  

}
async function getDataComplete() {
  taskC.innerHTML=""
  const datos = await fetch("https://jsonplaceholder.typicode.com/todos")
  const jsonData = await datos.json()
  
  jsonData.forEach(el=> {
    if (el.completed === true) {
    taskC.innerHTML+= `<div class="first_input d-flex justify-content-center align-items-center">
          <input  class=" me-2" type="checkbox"> <span class="input_message">${el.title}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-6 icon_delete">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
        </div>`
  }
  })
  
}






// Función para añadir una nueva tarea
function addTask() {
 

}

// Función para marcar una tarea como completada o imcompleta (Puede ser la misma función)
function completeTask() {

}

// Función para borrar una tarea
function deleteTask() {
  
}

// Funcion para borrar todas las tareas
function deleteAll() {
  
}

// Función para filtrar tareas completadas
function filterCompleted() {
    
}

// Función para filtrar tareas incompletas
function filterUncompleted() {

}

