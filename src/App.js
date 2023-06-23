import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Route';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
     
        <div className="bg-gray-100">
          <RouterProvider router={router}>
            {/* Your app content */}
            <ToastContainer/>
          </RouterProvider>
        </div>

    </QueryClientProvider>
  );
}

export default App;
