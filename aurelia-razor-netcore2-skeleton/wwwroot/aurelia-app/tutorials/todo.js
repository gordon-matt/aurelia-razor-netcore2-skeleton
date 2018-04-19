import { TodoItem } from './todo-item';

export class Todo {
    self = this;
    heading = "To do List";
    todoDescription = '';
    items = [];

    addItem() {
        // Logging for debug purposes
        console.log('in addItem()');
        console.log('todoDescription: ' + self.todoDescription); // Why is this always an empty string? It's not binding for some reason...

        if (self.todoDescription) {
            self.items.push(new TodoItem(self.todoDescription));
            self.todoDescription = '';
        }
    }

    removeItem(item) {
        let index = self.items.indexOf(item);
        if (index !== -1) {
            self.items.splice(index, 1);
        }
    }
}