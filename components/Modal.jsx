import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
// import chopp from '../public/chopp.png'

const Modal = ({open, onClose}) => {
    if(!open) return null
  return (
    <div className='overlay z-50'>
        <div className='modalContainer'>
            {/* <img className="imgModal"src={chopp} alt=""/> */}
            <div className="modalRight">
                <p onClick={onClose} className="closeBtn">x</p>
                <div className="btnContainer">
                    <button className='cursor-pointer items-center justify-center overflow-hidden rounded
                     bg-indigo-600 bg-gradient-to-r from-[#059315] to-[#003706] px-8 py-3 
                      text-white transition-all duration-300 focus:outline-none text-xl font-bold'>Criciúma <br/>
                        <span className='font-thin text-sm'>região e litoral</span>
                    </button>
                    <button className='cursor-pointer items-center justify-center overflow-hidden rounded
                     bg-indigo-600 bg-gradient-to-r from-[#059315] to-[#003706] px-8 py-3 
                      text-white transition-all duration-300 focus:outline-none mt-4 text-xl font-bold'>Tubarão <br/>
                    <span className='font-thin text-sm'>região e litoral</span>
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Modal;