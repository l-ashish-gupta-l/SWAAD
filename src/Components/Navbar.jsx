import React from 'react'
import LOGO from "../assets/LOGO.png"
function Navbar() {
    return (
        <div className='fixed  z-50 text-white w-full flex px-12 font-["Bebas"] justify-between'>
            <div className='Logo '>
                <img src={LOGO} alt='LOGO' className='w-[8vw]' />
            </div>
            <div className='links flex justify-center items-center gap-16'>
                {["Home", "Menu", "Gallery", "Blog", "Contact"].map((item, index) => {
                    return (
                        <a className=' text-xl' key={index} href={`#${item}`}>
                            {item}
                        </a>
                    )
                })}
            </div>
            <div className='Bookbtn flex justify-center items-center ' >
                <button className='px-10 py-2 bg-[#282725] font-[200] text-sm rounded-full border-white border-[.5px] '>BOOK A TABLE </button>
            </div>
        </div>
    )
}

export default Navbar