import { FC, ReactNode } from 'react'
import { ToastContainer, ToastOptions } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

interface IMessageProviderProps {
  children?: ReactNode,
}

export const defaultOption: ToastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
}


const MessageProvider: FC<IMessageProviderProps> = ({ children }) => {

  return (
    <>
      <ToastContainer />
      {children}
    </>
  )
}

export default MessageProvider
