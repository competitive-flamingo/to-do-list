export function createToDo(title, description = "", dueDate, priority) {
    let isChecked = false;

    const checkTodo = () => {
        isChcked = true;
    }

    return {
        title,
        description,
        dueDate,
        priority,
    };
}