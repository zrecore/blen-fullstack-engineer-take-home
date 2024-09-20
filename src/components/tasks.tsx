"use server"
import { Task } from '@/db/schema';

interface TaskProps {
  tasks: Task[]
}

export default async function Tasks({tasks} : {tasks: Task[]})
{
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Task List ({tasks.length})</h1>
      {
      tasks.length > 0 ? (
        <ul>
        {
          tasks.map((task:Task) => (
            <li key={task.id}>{task.title}</li>
          ))
        }
        </ul>
        ) : (
        <ul>
          <li>No items.</li>
        </ul>
        )
      }
    </div>
  )
}