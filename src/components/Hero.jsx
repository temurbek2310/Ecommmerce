import React from 'react'
import heroImg from '../assets/hero_img.png'
import sideTable from '../assets/side-table.png'
import sideTable2 from '../assets/side-table2.png'

const Hero = () => {
    return (
        <React.Fragment>
            <div className='bg-[#fbebb5] '>
                <div className="container flex mx-auto h-[1000px]">
                    <div className='container ml-[202px] mt-[388px] mx-auto'>
                        <h1 className='text-5xl mb-4'>Rocket single <br /> seater</h1>
                        <a className='btn underline text-md' href="#">
                            Shop Now
                        </a>
                    </div>
                    <div className=''>
                        <img className='mr-[700px]' src={heroImg} alt="Chair" />
                    </div>
                </div>
            </div>
            <div className='h-[672px]bg-[#faf4f4] flex'>
                <div className='container flex mx-auto '>
                    <div className=''>
                        <div>
                            <img src={sideTable} alt="Table" />
                            <h1 className='text-3xl mb-3'>Side table</h1>
                            <a className='btn underline' href="#">View more</a>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img src={sideTable2} alt="Table" />
                            <h1 className='text-3xl mb-3'>Side table</h1>
                            <a className='btn underline' href="#">View more</a>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Hero