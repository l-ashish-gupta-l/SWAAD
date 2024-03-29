import React from 'react'
import HomeBg from "../assets/HomeBg.jpg"
import Mainherobg from "../assets/Mainherobg.png"
import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar';


function Mainbtn({ Text }) {
    return (
        <button className='px-8 py-2 font-["Bebas"] bg-[#282725] text-white mt-5'>
            {Text}
        </button>
    )
}

function LandingPage() {
    return (
        <div className='relative w-full h-screen'>
            <img src={HomeBg} alt='HomeBg' className='w-full h-full object-cover' />
            <div className='overlay absolute w-full h-full top-0 left-0 bg-black opacity-65'>
            </div>
            <div className='absolute top-[58%] left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 '>
                <div className='relative '>
                    <img src={Mainherobg} alt='Mainherobg' className='object-cover' />
                    <div className=' absolute  font-["Bebas"] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col  items-center'>
                        <h2 className='uppercase text-2xl'>Experience the taste of INDIA</h2>
                        <h1 className='text-stroke stroke-white mt-3 text-[7vw] whitespace-nowrap leading-none'>GREAT DINING</h1>
                        <TypeAnimation
                            sequence={[
                                'Experence',
                                2000,
                                'RESTAURANT',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-8xl text-white"
                            repeat={Infinity}
                            cursor={false}
                        />
                        <Mainbtn Text={"Authentic experience"} />
                    </div>
                </div>
                <div className='circle absolute right-0 top-[70%] w-[150px] h-[150px] bg-[#DADADA] rounded-full '>
                    <div className='text absolute w-full h-full '>
                        <p className='text-white w-full h-full text-sm '>
                            {('THE SWAAD EXPERENCE THE REAL TASTE OF INDIA').split('').map((letter, index) => {
                                return (
                                    <span className={`rotate-[${index * 8.3}deg]  origin-[0_100%] `}>{letter}</span>
                                )
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
export { Mainbtn }