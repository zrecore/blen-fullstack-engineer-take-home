"use client"

import { addTask } from '@/actions/taskActions';
import { FC, useState } from 'react';

interface TaskAddProps
{
  title?: string,
  description?: string,
  dueDate?: string
}

function formatDate(date: Date)
{
  // yyyy-MM-dd
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()

  let strYear = year.toString()
  let strMonth = month < 10 ? "0" + month : month.toString()
  let strDay = day < 10 ? "0" + day : day.toString()

  return strYear + '-' + strMonth + '-' + strDay
}

const defaultTaskAddProps: TaskAddProps = {
  title: "",
  description: "",
  dueDate: formatDate(new Date())
}

const TaskAdd: FC<TaskAddProps> = ({
  title,
  description,
  dueDate
} = defaultTaskAddProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState(title ?? "")
    const [newDescription, setNewDescription] = useState(description ?? "")
    const [newDueDate, setNewDueDate] = useState(dueDate ?? formatDate(new Date()))

    const openModal = () => {
      closeModal()
      setIsModalOpen(true)
    }
    const closeModal = () => {
      setIsModalOpen(false)
      setNewTitle("")
      setNewDescription("")
      setNewDueDate(formatDate(new Date()))
    }

    const saveModal = async (title:string, description:string, dueDate:string) => {
      console.log('Save the new task.', title, description, dueDate)

      await addTask(title, description, dueDate);

      // @TODO Save to server via tanquery API call
      closeModal()
    }


    return (
    <div className="flex flex-col flex-wrap items-center justify-center">
      <button
        className="inline-flex w-full justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm text-center font-semibold text-white shadow-sm hover:bg-cyan-500 sm:ml-3 sm:w-auto"
        onClick={openModal}
      >Add</button>
      <div className={"relative z-10 " + (isModalOpen ? "" : "hidden")} aria-labelledby='modal-title' role='dialog' aria-modal='true'>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">

                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">New Task</h3>
                  </div>
                  <div className="mt-2">
                    <label>
                      <div className="text-sm text-gray-400">Task Title</div>
                      <input name="newTitle" id="newTitle" type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} className="border rounded-md border-indigo-700 p-2 w-full text-gray-700" placeholder='Title' />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label>
                      <div className="text-sm text-gray-400">Task Due Date</div>
                      <input name="newDueDate" id="newDueDate" type="date" value={newDueDate} onChange={e => setNewDueDate(e.target.value)} className="border rounded-md border-indigo-700 p-2 w-full text-gray-700" />
                    </label>
                  </div>

                  <div className="mt-2">
                    <label>
                      <div className="text-sm text-gray-400">Task Description</div>
                      <textarea name="newDescription" id="newDescription" value={newDescription} onChange={e => setNewDescription(e.target.value)} className="border rounded-md border-indigo-700 p-2 w-full text-gray-700" placeholder='The task description.' />
                    </label>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button onClick={() => saveModal(newTitle, newDescription, newDueDate)} type="button" className="inline-flex w-full justify-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 sm:ml-3 sm:w-auto">Save</button>
                  <button onClick={closeModal} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                </div>

              </div>
            </div>

            
          </div>
        </div>
      </div>
      
    </div>
    )
}

export default TaskAdd