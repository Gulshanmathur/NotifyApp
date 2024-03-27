export const saveTodos = (todos : TodoItemType[]):void=>{
  localStorage.setItem("mytodos",JSON.stringify(todos))
}

export const getTodos = ():TodoItemType[]=>{
    const todos1 = localStorage.getItem("mytodos")
    return todos1 ? JSON.parse(todos1):[]
  }