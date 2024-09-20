import Tasks from '../components/tasks';

import { Task, tasks } from '@/db/schema';
import { db } from '../db/client';

async function getTasks() {
  const all_tasks:Task[] = await db.select().from(tasks);
  return all_tasks;
}


export default async function Home() {
  let alltasks = await getTasks();

  if (!alltasks.length) alltasks = []

  return (
    <main className="flex flex-col gap-10 p-10">
      {/* <Welcome /> */}
      <Tasks tasks={alltasks} />
    </main>
  );
}
