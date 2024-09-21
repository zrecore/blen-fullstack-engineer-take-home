"use server"

import { Task } from '@/db/schema';
import { FC } from 'react';
import TaskListItem from './taskListItem';

interface TaskProps {
  tasks: Task[]
}

const Tasks: FC<TaskProps> = async ({
  tasks
}) => {
    return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="font-semibold text-gray-500 text-sm m-4">Task List ({tasks.length})</h1>
      {
      tasks.length > 0 ? (
        <ul className="border bg-white drop-shadow-md w-full lg:w-1/3">
        {
          tasks.map((task:Task) => (
            <TaskListItem
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              isCompleted={task.isCompleted}
              className={"flex flex-row flex-wrap p-4 w-full" + (task.isCompleted ? "bg-gray-300 hover:bg-gray-300 text-gray-500 line-through": "bg-white hover:bg-cyan-200")}
            >
            </TaskListItem>
          ))
        }
        </ul>
        ) : (
        <ul className="border bg-white drop-shadow-md w-full lg:w-1/3">
          <li className="bg-white p-4 w-full">No items.</li>
        </ul>
        )
      }
    </div>
    )
}

export default Tasks