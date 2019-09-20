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
//import {default, sub, mult } from './funct'   // don't work
import soma, {sub, mult } from './funct'  // como existe um valor default jogo fora do {}
import * as func from './funct'           // deste modo default functions entram como default? yes

console.log('teste-unique')

document.getElementById('button-todo').onclick = () => {
    MinnhaListaTodos.addTodo()
    console.log(soma(4, 3))
    console.log(sub(5, 3))
    console.log(soma(10, 10))
    console.log(mult(10, 11))

    console.log(func)                   // now func is a wrapper object
    console.log(func.sub(5, 3))         // with properties
    console.log(func.mult(10, 11))
    console.log(func.default(10, 11))
}


