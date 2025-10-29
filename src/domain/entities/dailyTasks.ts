import { InvalidValueError } from "../Errors/InvalidValueError.ts";
import { Task } from "./task.ts";

export enum Day {
  segunda = "segunda-feira",
  terca = "terça-feira",
  quarta = "quarta-feira",
  quinta = "quinta-feira",
  sexta = "sexta-feira",
  sabado = "sábado",
  domingo = "domingo",
}

export interface DailyTasksProps {
  id: string;
  day: Day;
  tasks: Task[];
}

export class DailyTasks {
  constructor(private dailyTasksProps: DailyTasksProps) {}

  get id(): string {
    return this.dailyTasksProps.id;
  }

  get day(): string {
    return this.dailyTasksProps.day;
  }

  get tasks(): Task[] {
    return this.dailyTasksProps.tasks;
  }

  validateDayOfTheWeek(day: Day): void {
    if (day in Day) {
      return 
    }
    throw new  InvalidValueError("Deve conter um dia da semana válido")
  }
}
