export type BodyProps = {}
export type TasksProps = {
    tasks: Array<Task>
    onRemoveClicked: any
    updateReminder: any
}
export type ButtonProps = {
    name: string;
    backgroundColor: string;
    color: string;
    onClicked: any;
}
export type Task = {
    id: number,
    text: string,
    day: string,
    reminder: boolean,
}

export type TaskProps = {
    id: number,
    text: string,
    day: string,
    reminder: boolean,
    onRemoveClicked: any
    updateReminder: any
}




