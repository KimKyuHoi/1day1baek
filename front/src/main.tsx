import ReactDOM from 'react-dom/client';

import ToastProvider from '@components/alarm/ToastProvider';

import App from '@/App';
import { worker } from '@mocks/Browser';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient: QueryClient = new QueryClient();

const enableMocking = async () => {
  if (import.meta.env.NODE_ENV === 'development') {
    return;
  }

  // console.log('start!');
  return worker.start();
};

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <App />
      </ToastProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
});
