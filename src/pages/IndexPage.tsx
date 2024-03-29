import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function IndexPage() {
    return (
        <>
            <Header />
            <main className='px-3 py-2 max-w-7xl mx-auto w-full'>
                <Outlet />
            </main>
        </>
    )
}