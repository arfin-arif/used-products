import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

     
        <div className="bg-gray-100">
          <RouterProvider router={router}>
            {/* Your app content */}
            <ToastContainer/>
          </RouterProvider>
        </div>
  );
}

export default App;
