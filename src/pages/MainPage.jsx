import ErrorBoundary from '../components/ErrorBoundary'
import { Header } from '../components/Header'
import { UsersContainer } from '../components/UsersContainer'

export const MainPage = () => {

    return (
        <div>
            <Header/>
            <ErrorBoundary>
                <UsersContainer/>
            </ErrorBoundary>
        </div>
    )
}

