let addtodo=document.querySelector("#addtodo")
let dnone=document.querySelector(".popup")

addtodo.addEventListener("click",()=>{
    dnone.classList.remove("dnone")
})

let todoname=document.querySelector("#todoname")
let tododescription=document.querySelector("#tododescription")
let todopriority=document.querySelector("#todopriority")
let todosave=document.querySelector("#todosave")
let mytodos=document.querySelector("#my-todos")
let todocancel=document.querySelector("#todocancel")

todosave.addEventListener("click",()=>{
    let array=localStorage.getItem("Todolist")
    array=array===null?[]:JSON.parse(array)

    if(todoname.value=="" || tododescription.value==""){
        alert("info incomplete")
    }
    else{
        array.push({
            name:todoname.value,
            description:tododescription.value,
            priority:todopriority.value
        })
    }
    localStorage.setItem("Todolist",JSON.stringify(array))

    let newtodo=localStorage.getItem("Todolist")
    let array2=JSON.parse(newtodo)

    
    array2.forEach((value) => {
        let data=`<section class="alltodos">
        <section>
            <h2>${value.name}</h2>
            <p>${value.description}</p>
        </section>
        <section>
            <button class="del"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        </section>

        
    </section>`
    
    mytodos.innerHTML=data
        
    });
    
    
    todoname.value=""
    tododescription.value=""
    alert("todo uploaded")
    
   
})

todocancel.addEventListener("click",()=>{
    dnone.classList.add("dnone")
})