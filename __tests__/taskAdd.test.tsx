import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TaskAdd from '../src/components/taskAdd'

describe('TaskAdd', () => {
  it('Renders the tasks add component', async() => {
    const component = await <TaskAdd title='Test' description='Descriptor' dueDate={Date.now().toString()} />
    render(component)

    const div = screen.getByText('New Task')
    expect(div).toHaveTextContent('New Task')
  })
})