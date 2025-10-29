import { InvalidValueError } from "../Errors/InvalidValueError.ts";
import { User } from "./user.ts";

export interface TaskProps {
  id: string;
  title: string;
  user: User;
  completed: boolean;
}
export class Task {
  constructor(private taskProps: TaskProps) {
    this.validateTitle(taskProps.title);
  }

  get id(): string {
    return this.taskProps.id;
  }

  get title(): string {
    return this.taskProps.title;
  }

  get completed(): boolean {
    return this.taskProps.completed;
  }

  validateTitle(title: string): boolean {
    if (title.length < 1) {
      throw new InvalidValueError("Você deve inserir um título");
    }
    return true;
  }
  changeTitle(newTitle: string) {
    this.validateTitle(newTitle);
    this.taskProps.title = newTitle;
  }

  changeStatus(): boolean {
    return this.taskProps.completed != this.taskProps.completed;
  }
}
