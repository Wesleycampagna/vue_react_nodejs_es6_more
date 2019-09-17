class TodoList {
    constructor() {
        this.todos = []
    }

    addTodo() {
        if (typeof this.todos === 'undefined')
            this.todos = new Array()
            
        this.todos.push('eae')
        console.log(this.todos)
    }
}

const MinnhaListaTodos = new TodoList()

document.getElementById('button-todo').onclick = () => {
    MinnhaListaTodos.addTodo()
}