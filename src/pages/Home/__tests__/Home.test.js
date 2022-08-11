import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Home } from './../index'
import '@testing-library/jest-dom/extend-expect';
import { searchUse } from '../../../apiTest/ApiTest';

afterEach(() => {
    cleanup()
})

test('Should render Home Component', async () => {
    render(<Home />)
    const homeElement = screen.getByTestId('home-1')
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent("GitHub Explorer")
    expect(homeElement).toHaveTextContent("Username")

    const inputElement = screen.getByTestId('input-1')
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'defunkt' } })

    expect(inputElement.value).toBe('defunkt')

    const btnElement = screen.getByTestId('btn-1')
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toContainHTML("<button data-testid='btn-1' type='button'>Search</button>")
    expect(btnElement).toHaveTextContent("Search")

        
})

// test('test', () => {
//     expect(true).toBe(true)
// })