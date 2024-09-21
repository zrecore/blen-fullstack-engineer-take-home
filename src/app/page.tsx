"use server"

import { getData } from '@/actions/taskActions';
import TaskAdd from '@/components/taskAdd';
import Tasks from '@/components/tasks';
import { NewTask, Task } from '@/db/schema';
import Welcome from '../components/welcome';

export default async function Home() {

  const tasks:Task[] = await getData()
  
  let addTask:NewTask = {
    title: "",
    description: "",
    dueDate: ""
  }

  return (
    <main className="flex flex-col gap-10 p-10">
      <Welcome />
      <TaskAdd
        title={addTask.title}
        description={addTask.description}
        dueDate={addTask.dueDate}
      />
      <Tasks tasks={tasks} />
    </main>
  );
}
