export interface Task {
    id?: number, //Cuando creamos la tarea podría no venir el número de id
    text: string;
    day: string;
    reminder: boolean;
}