export interface ITodoInfo {
  completed: boolean;
  text: string;
  due: string;
}

export interface ITodoModel extends ITodoInfo {
  id: number;
}
