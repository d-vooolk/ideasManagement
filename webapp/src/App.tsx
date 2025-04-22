import { TrpcProvider } from './lib/trpc.tsx'
import { Index } from './pages/AllIdeasPage'

export const App = () => {
  return (
    <TrpcProvider>
      <Index />
    </TrpcProvider>
  )
}
