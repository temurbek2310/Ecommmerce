import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import divan from '../assets/singleProduct/Group 95.png'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

import bed from '../assets/singleProduct/desc/Mask group.png'
import bed2 from '../assets/singleProduct/desc/Cloud sofa three seater + ottoman_1 1.png'

import svg22 from '../assets/singleProduct/Group 99.svg'


import productFirst from '../assets/home/products/Mask group.svg'
import productSecond from '../assets/home/products/Granite dining table with dining chair 1.png'
import productThree from '../assets/home/products/Mask group.png'
import productFour from '../assets/home/products/Plain console with teak mirror 1.png'
import CartModal from '../components/CartModal'

const SingleProduct = () => {
    const [count, setCount] = useState(0);

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function increment() {
        setCount(count + 1);
    }

    return (
        <>
            <Helmet>
                <title>Ecommers Product</title>
            </Helmet>


            <div className='bg-white'>

                <Header />

                {/* START SINGLE PRODUCT */}
                <div className='container'>

                    {/* <CartModal /> */}



                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li class="inline-flex items-center">
                                <Link to="/" class="inline-flex items-center text-sm font-medium">
                                    Home
                                </Link>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span class="ms-1 text-sm font-medium md:ms-2">Asgurad sofa</span>
                                </div>
                            </li>
                        </ol>
                    </nav>


                    <div className='flex justify-around my-10 items-center py-10'>
                        <div className='flex items-center -mt-28'>
                            <img className='relative -top-10' src={svg22} alt="logo" />
                            <img src={divan} alt="logo" />
                        </div>

                        <div>
                            <div className="p-6 max-w-md mx-auto bg-white rounded-xl space-y-4">
                                <div className="text-5xl font-semibold">Asgaard sofa</div>
                                <div className="text-gray-500 text-lg">Rs. 250,000.00</div>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        <span className="text-yellow-500">★★★★☆</span>
                                    </div>
                                    <span className="ml-2 text-sm text-gray-600">5 Customer Review</span>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                                </p>
                                <div className="flex items-center">
                                    <span className="mr-2">Size</span>
                                    <button className="px-2 py-1 m-1 border rounded">L</button>
                                    <button className="px-2 py-1 m-1 border rounded">XL</button>
                                    <button className="px-2 py-1 m-1 border rounded">XS</button>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">Color</span>
                                    <button className="w-6 h-6 m-1 rounded-full bg-purple-500"></button>
                                    <button className="w-6 h-6 m-1 rounded-full bg-black"></button>
                                    <button className="w-6 h-6 m-1 rounded-full bg-yellow-500"></button>
                                </div>
                                <div className="flex items-center">
                                    <div className='flex'>
                                        <button onClick={decrement}
                                            className="px-4 py-2 text-lg border rounded-l"> -
                                        </button>
                                        <span className="px-4 py-2 text-lg border-t border-b">{count}</span>
                                        <button onClick={increment}
                                            className="px-4 py-2 text-lg border rounded-r">+
                                        </button>
                                    </div>
                                    <CartModal />
                                </div>
                                <hr />
                                <div className="space-y-2 leading-[60px]">
                                    <div className="flex items-center">
                                        <span className="font-semibold">SKU</span>
                                        <span className="ml-2">:</span>
                                        <span className="ml-2">SS001</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Category</span>
                                        <span className="ml-2">:</span>
                                        <span className="ml-2">Sofas</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Tags</span>
                                        <span className="ml-2">:</span>
                                        <span className="ml-2">Sofa, Chair, Home, Shop</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Share</span>
                                        <span className="ml-2">:</span>
                                        <div className="ml-2 flex space-x-2 text-xl">
                                            <a href="#" className="text-black">
                                                <FaFacebook />
                                            </a>
                                            <a href="#" className="text-black">
                                                <FaLinkedin />
                                            </a>
                                            <a href="#" className="text-black">
                                                <FaTwitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='my-10'>
                    <hr />
                </div>

                <div className='container'>
                    <div className="flex justify-center gap-10 pb-2 mb-4">
                        <button className="font-bold text-lg text-black">Description</button>
                        <button className="font-medium text-lg text-gray-400">Additional Information</button>
                        <button className="font-medium text-lg text-gray-400">Reviews [5]</button>
                    </div>
                    <div className="text-gray-700">
                        <p className="mb-4">
                            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                        </p>
                        <p>
                            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                        </p>
                    </div>

                    <div className='flex items-center justify-around my-16'>
                        <img className='bg-[#FBEBB5] rounded-lg' src={bed2} alt="bed logo" />
                        <img className='bg-[#FBEBB5] rounded-lg' src={bed} alt="bed logo" />
                    </div>

                    <hr />

                    <h2 className='text-center text-4xl font-semibold pt-16'>Related Products</h2>

                    {/* START PRODUCTS */}
                    <div className='flex justify-between items-center py-20'>


                        {/* #1 */}
                        <div>
                            <div>
                                <img src={productFirst} alt="title" />
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold text-xl'>Trenton modular safa_3</p>
                                <p className='font-bold text-xl'>Rs. 25,000.00</p>
                            </div>
                        </div>
                        {/* /#1 */}

                        {/* #2 */}
                        <div>
                            <div>
                                <img src={productSecond} alt="title" />
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold text-xl'>Trenton modular safa_3</p>
                                <p className='font-bold text-xl'>Rs. 25,000.00</p>
                            </div>
                        </div>
                        {/* /#2 */}

                        {/* #3 */}
                        <div>
                            <div>
                                <img src={productThree} alt="title" />
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold text-xl'>Trenton modular safa_3</p>
                                <p className='font-bold text-xl'>Rs. 25,000.00</p>
                            </div>
                        </div>
                        {/* /#3 */}

                        {/* #4 */}
                        <div>
                            <div>
                                <img src={productFour} alt="title" />
                            </div>
                            <div className='text-center'>
                                <p className='font-semibold text-xl'>Trenton modular safa_3</p>
                                <p className='font-bold text-xl'>Rs. 25,000.00</p>
                            </div>
                        </div>
                        {/* /#4 */}
                    </div>
                    {/* END PRODUCTS */}

                    <div className='flex justify-center pb-32'>
                        <h2 className='w-max border-b-2 border-black pb-2 font-semibold text-[25px] cursor-pointer transition hover:border-none'>View More</h2>
                    </div>
                </div>

                {/* END SINGLE PRODUCT */}

                <Footer />
            </div>
        </>
    )
}

export default SingleProduct