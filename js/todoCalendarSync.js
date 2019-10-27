function exportTodo(todo) {
    //Skapar ett custom-event som skickar med alla todo-items
    let todoItemsDone = new CustomEvent('todoDone', {
        detail: {
            items: todo
        }
    })

    document.dispatchEvent(todoItemsDone);
}