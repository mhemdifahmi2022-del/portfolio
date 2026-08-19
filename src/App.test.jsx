import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('renders core portfolio sections', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /mhemdi/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /propos de moi/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /formations/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /mes projets/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /me contacter/i })).toBeInTheDocument()
  })
})
