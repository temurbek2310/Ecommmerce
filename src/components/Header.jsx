import React from 'react'
import { BsPersonFillExclamation } from 'react-icons/bs'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <React.Fragment>
            <navbar className='flex justify-between mx-auto py-[38px] px-[100px]'>
                <ul className='gap-11 flex mx-auto items-center'>
                    <Link to="/">
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to={'/product'}>
                        <li>
                            Product
                        </li>
                    </Link>
                    <Link to={'/'}>
                        <li>
                            About
                        </li>
                    </Link>
                    <Link to={'/'}>
                        <li>
                            Contact
                        </li>
                    </Link>
                </ul>
                <div className='flex items-center gap-6'>
                    <BsPersonFillExclamation />
                    <CiSearch />
                    <CiHeart />
                    <IoCartOutline />
                </div>
            </navbar>
        </React.Fragment>
    )
}

export default Header