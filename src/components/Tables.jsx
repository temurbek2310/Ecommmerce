import React from 'react'
import sofa from '../assets/sofa.png'
import asgard from '../assets/asgard_sofa.png'
import blog from '../assets/blog_img.png'
import { CiCalendarDate, CiClock2 } from 'react-icons/ci'
import bgOur from '../assets/home/ourInsta/Group 43.png'


const divStyle = {
    backgroundImage: `url(${bgOur})`,
    height: '500px',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

const Tables = () => {
    return (
        <>
            <div className='container mx-auto mt-[55px]'>
                <h1 className='text-3xl text-center mb-4'>Top Picks For You</h1>
                <p className='text-[#b7b7b7] text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
                <div className='flex mx-auto justify-evenly'>
                    <div className='w-[287px] h-[372px]'>
                        <img src={sofa} alt="" />
                        <p>Trenton modular sofa_3</p>
                        <h1 className='font-bold text-2xl'>Rs. 25,000.00</h1>
                    </div>
                    <div className='w-[287px] h-[372px]'>
                        <img src={sofa} alt="" />
                        <p>Trenton modular sofa_3</p>
                        <h1 className='font-bold text-2xl'>Rs. 25,000.00</h1>
                    </div>
                    <div className='w-[287px] h-[372px]'>
                        <img src={sofa} alt="" />
                        <p>Trenton modular sofa_3</p>
                        <h1 className='font-bold text-2xl'>Rs. 25,000.00</h1>
                    </div>
                    <div className='w-[287px] h-[372px]'>
                        <img src={sofa} alt="" />
                        <p>Trenton modular sofa_3</p>
                        <h1 className='font-bold text-2xl'>Rs. 25,000.00</h1>
                    </div>
                </div>
                <a className='btn underline font-semibold ml-[605px] text-xl' href="#">View more</a>
            </div>
            <div className='bg-[#fff9e5] mt-[50px]'>
                <div className='container flex mx-auto'>
                    <img src={asgard} alt="Asgard Sofa" />
                    <div className='mt-[260px]'>
                        <h2 className='text-2xl ml-8 mb-2 font-semibold'>New Arrivlas</h2>
                        <h1 className='text-3xl ml-5 mb-2 font-bold'>Asgard sofa</h1>
                        <button className='btn border-2 w-[205px] h-[64px] border-black'>Order now</button>
                    </div>
                </div>
            </div>
            <div classname='container mx-auto'>
                <h1 className='text-3xl mt-[50px] mb-2 text-center'>Our Blogs</h1>
                <p className='text-[#b7b7b7] mb-5 text-center'>Find a bright ideal to suit your taste with our great selection</p>
                <div className='flex mx-auto justify-evenly'>
                    <div className='text-center'>
                        <img src={blog} alt="" />
                        <p className='text-md mt-3'>Going all-in with millennial design</p>
                        <a className='btn underline mt-3 font-semibold text-xl' href="#">Read More</a>
                        <div className='flex mt-3 ml-[100px]'>
                            <div className='flex items-center'>
                                <CiClock2 />
                                <h1>5 min</h1>
                            </div>
                            <div className='flex items-center'>
                                <CiCalendarDate />
                                <h1>12th Oct 2022</h1>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={blog} alt="" />
                        <p className='text-md mt-3'>Going all-in with millennial design</p>
                        <a className='btn underline mt-3 font-semibold text-xl' href="#">Read More</a>
                        <div className='flex mt-3 ml-[100px]'>
                            <div className='flex items-center'>
                                <CiClock2 />
                                <h1>5 min</h1>
                            </div>
                            <div className='flex items-center'>
                                <CiCalendarDate />
                                <h1>12th Oct 2022</h1>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <img src={blog} alt="" />
                        <p className='text-md mt-3'>Going all-in with millennial design</p>
                        <a className='btn underline mt-3 font-semibold text-xl' href="#">Read More</a>
                        <div className='flex mt-3 ml-[100px]'>
                            <div className='flex items-center'>
                                <CiClock2 />
                                <h1>5 min</h1>
                            </div>
                            <div className='flex items-center'>
                                <CiCalendarDate />
                                <h1>12th Oct 2022</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <a className='btn underline ml-[600px] font-semibold text-xl' href="#">View All Post</a>
                <div className='container mx-auto'>
                    <h1 className='text-5xl font-bold mt-[200px] mb-2 text-center'>Our Instagram</h1>
                    <p className='mb-5 text-center'>Follow our store on Instagram</p>
                    <button className='btn border-2 shadow-2xl ml-[550px] mb-[50px] rounded-full w-[195px] h-[54px] border-[#7c7c7c]'><a href="#">Follow us</a></button>
                </div>
            </div>
        </>
    )
}

export default Tables