import React, { useState } from 'react'
import { TbBackpackOff } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import divan from '../assets/singleProduct/Group 95.png'
import { MdCancel } from 'react-icons/md';
import { document } from 'postcss';


const CartModal = () => {
    const [state, setState] = useState(false);
    const [hide, setHide] = useState(false);

    const cancel = () => setHide(!hide);


    return (
        <>

            <button onClick={() => setState(!state)} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-black border-[1px] ml-3 w-[190px] h-[47px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700" type="button">
                Modal Product
            </button>

            <div id="popup-modal" tabindex="-1" className={state ? "overflow-y-auto overflow-x-hidden fixed right-0 top-1 z-50" : "hidden"}>
                <div className="relative px-3 w-full max-w-md max-h-full">
                    <div className="relative w-[350px] h-[500px] bg-white shadow border-[1px] border-black">
                        <div className='flex items-center px-4 pt-2'>
                            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
                            <button onClick={() => setState(!state)} type="button" className="absolute right-5 top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                <TbBackpackOff />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className='h-[1px] ml-4 my-5 bg-gray-300 w-[250px]'></div>
                        {!hide && (
                            <div id='sofa' className='flex items-center ml-2 gap-5'>
                                <img className='w-[100px] rounded-3xl ' src={divan} alt="" />
                                <div>
                                    <h1>Asgard sofa</h1>
                                    1 x <span className='font-medium text-[#C19C49]'>Rs. 25,000.00</span>
                                </div>
                                <button onClick={cancel}><MdCancel /></button>
                            </div>
                        )}
                        <div className='absolute bottom-0'>
                            <div className='ml-4 flex items-center gap-14'>
                                <h1>Subtotal</h1>
                                <span className='font-medium text-[#C19C49]'>Rs. 25,000.00</span>
                            </div>
                            <div className='h-[1px] ml-4 mt-4 bg-gray-300 w-[250px]'></div>
                            <div className="p-4 md:p-5">
                                <Link to={"/cart"}>
                                    <button data-modal-hide="popup-modal" type="button" className="text-black border-[1px] font-medium rounded-full border-black text-sm inline-flex items-center hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 px-5 py-2.5 text-center">
                                        View Cart
                                    </button>
                                </Link>
                                <button onClick={() => setState(!state)} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-black focus:outline-none bg-white rounded-full border-[1px] border-black hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartModal