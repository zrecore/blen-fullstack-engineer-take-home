import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Tasks from '../src/components/tasks'

describe('Tasks', () => {
  it('Renders the tasks list', () => {
    render(<Tasks />)

    const div = screen.getByText('Task List')
    expect(div).toBeInTheDocument()
  })
})