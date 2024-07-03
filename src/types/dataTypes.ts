export type SubtaskType = {
  subtask:string;
  status:boolean;
}

export type TaskType = {
  column_id: number;
  title: string;
  description: string;
  subtasks: SubtaskType[];
}

export type ColumnType = {
  id:number;
  column_name: string;
  tasks: TaskType[];
}