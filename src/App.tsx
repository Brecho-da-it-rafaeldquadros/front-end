import Routers from './routes/index.routes';
import { ToastContainer } from 'react-toastify';
import { GlobalStyles } from './styles/GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';
import Modals from './modal';
import Timer from './components/timer';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routers />

      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />

      <Timer/>

      <Modals/>
    </>
  )
}

export default App
