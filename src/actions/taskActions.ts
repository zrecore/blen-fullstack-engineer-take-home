"use server"
import { db } from "@/db/client"
import { tasks } from "@/db/schema"
import { eq, not } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export const getData = async () => {
  const data = await db.select().from(tasks)
  return data
}

export const addTask = async (
  title: string,
  description: string,
  dueDate: string
) => {
  await db.insert(tasks).values({
    title,
    description,
    dueDate
  })

  revalidatePath("/")
}

export const deleteTask = async (id: number) => {
  await db.delete(tasks).where( eq(tasks.id, id) )
  revalidatePath("/")
}

export const toggleTask = async (id: number) => {
  console.log("TASK ID toggle", id)
  await db.update(tasks).set({
    isCompleted: not(tasks.isCompleted)
  }).where(eq(tasks.id, id))

  revalidatePath("/")
}

export const editTask = async (id: number, title?: string, description?: string) => {
  let props = {title, description};

  await db.update(tasks).set(props).where(eq(tasks.id, id))

  revalidatePath("/")
}