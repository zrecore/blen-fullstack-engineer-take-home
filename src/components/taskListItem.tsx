"use client"

import { deleteTask, toggleTask } from "@/actions/taskActions";
import { FC, ReactElement, useState } from "react";

interface TaskListItemProps
{
  children?: ReactElement|ReactElement[],
  className?: string,
  isCompleted: boolean,
  title: string,
  description: string,
  dueDate: string,
  id: number
}


const TaskListItem: FC<TaskListItemProps> = (props) => {
  const [isCompleted, setIsCompleted] = useState(props.isCompleted)
  
  const toggleIsComplete = async (id:number) => {
    toggleTask(id)
  }

  const checkHandler = async () => {
    setIsCompleted(!isCompleted)
    await toggleIsComplete(props.id)
  }

  const deleteHandler = async () => {
    
    await deleteTask(props.id)
  }

  return (
    <li className={props.className} onClick={checkHandler}>
     <div className="m-2 flex flex-col justify-center align-middle justify-self-start">
        <input className="w-4 h-4 float-left" type="checkbox" checked={isCompleted ?? false} onChange={checkHandler}></input>
      </div>
      <div className="m-2 flex-1 flex-col justify-center align-middle">
        <div className="font-extrabold text-md">{props.title}</div>
        <div className="text-sm text-gray-400">{props.description}</div>
      </div>
      <div className="m-2 flex-1 flex-col justify-center align-middle">
        <h3 className="font-extrabold text-sm">Due Date</h3>
        <div className="font-semibold text-sm text-gray-500">{props.dueDate}</div>
      </div>
      <div className="m-2 flex-1 flex-col justify-center align-middle justify-self-end">
        <button
          className="w-8 h-8 float-right bg-red-700 hover:bg-red-500 text-white rounded-md"
          onClick={ev => {ev.preventDefault(); ev.stopPropagation(); deleteHandler()}}
        >X</button>
      </div>
    </li>
  )
}

export default TaskListItem