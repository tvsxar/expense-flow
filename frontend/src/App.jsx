import DashboardPage from './pages/DashboardPage';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';

function App() {

  return (
    <ApolloProvider client={client}>
      <DashboardPage />
    </ApolloProvider>
  )
}

export default App
