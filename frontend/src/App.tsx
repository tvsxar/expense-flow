import DashboardPage from './pages/DashboardPage.js';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client.js';

function App() {

  return (
    <ApolloProvider client={client}>
      <DashboardPage />
    </ApolloProvider>
  )
}

export default App
