import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TaskListItem from '../src/components/taskListItem'

describe('TaskAdd', () => {
  it('Renders the tasks add component', () => {
    const component = <TaskListItem
        id={1}
        title='New Task'
        description='Test description'
        dueDate='2024-01-01'
        isCompleted={false}
    ></TaskListItem>

    render(component)

    const div = screen.getByText('New Task')
    expect(div).toHaveTextContent('New Task')
  })
})