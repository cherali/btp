import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'


interface IApiProviderProps {
  children?: ReactNode,
}

const queryClient = new QueryClient({})


const ApiProvider: FC<IApiProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ApiProvider
