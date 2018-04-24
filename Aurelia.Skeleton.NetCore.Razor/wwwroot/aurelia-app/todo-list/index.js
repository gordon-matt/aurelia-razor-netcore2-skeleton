import { TodoItem } from './todo-item';

export class TodoList {
    heading = "To do List";
    todoDescription = '';
    items = [];

    addItem() {
        // Logging for debug purposes
        //console.log('todoDescription: ' + this.todoDescription); // Why is this always an empty string? It's not binding for some reason...

        if (this.todoDescription) {
            this.items.push(new TodoItem(this.todoDescription));
            this.todoDescription = '';
        }
    }

    removeItem(item) {
        let index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}