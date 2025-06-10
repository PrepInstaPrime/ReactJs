import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import NavBar from './components/NavBar';
import BasicButtons from './components/CustomButton';
import ResponsiveAppBar from './components/NavBar';
export default function App() {
  const notify = () => toast('🦄 Wow so easy!', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });
  return (
    <div>
      <ResponsiveAppBar/>
      {/* <BasicButtons/> */}
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}
