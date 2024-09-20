import { Task } from '@/db/schema'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Tasks from '../src/components/tasks'

describe('Tasks', () => {
  it('Renders the tasks list', async() => {
    const tasks : Task[] = [
      {
        id: 1,
        title: "Test",
        description: "Descriptor",
        dueDate: Date.now().toString(),
        isCompleted: false,
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString()
      }
    ];
    render(await Tasks({tasks}))

    const div = screen.getByText('Test')
    expect(div).toHaveTextContent('Test')
  })
})