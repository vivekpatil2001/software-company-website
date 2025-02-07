import React from 'react'
import WorkCard from '@/app/components/WorkCard/WorkCard'
import Footer from '@/app/components/Footer';

import CareersPage from "../components/CareersComponent";
import StayConnected from '../components/StayConnected';

const page = () => {
    return (
        <div className='bg-white'>
            <div className=' flex flex-col-reverse lg:flex-row justify-center items-center text-black h-[100vh]'>
                <div className='text-start md:ml-24 p-5 md:w-[80vw]'>
                    <h1 className='text-black font-bold text-3xl md:text-6xl mb-5'>Careers for <br /> Experienced Professionals</h1>
                    <p className='text-black font-medium mb-5'>Bring your expertise to some of the most influential organizations in the world, transforming industries alongside the best of the best.</p>
                </div>
                <div className='h-[80vh] w-[100vw] lg:w-[70vw] ' style={{
                    backgroundImage: "url('https://dynamicmedia.accenture.com/is/image/accenture/Workmates-talking-office?qlt=85&wid=1024&ts=1657868743370&fit=constrain&dpr=off')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                   backgroundRepeat: "no-repeat",
                }}></div>
            </div>

            <div className='bg-gray-200 text-black'>
                <div className='container my-5 pt-8 m-auto'>
                    <h1 className='text-black font-bold text-3xl lg:text-5xl'>Chart your course</h1>
                    <p className='mb-5 mt-5 lg:max-w-[60%]'>Get to know Arohi Softwares and find your fit. If you want to contribute across a range of industries and make a real difference, here’s where your experience could be put to work:</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Group-Discussions:16x9?ts=1710823877471&fit=constrain&dpr=off&wid=480' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Flexible Schedules" 
                        />
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Careers-Consulting-Marquee:16x9?ts=1697128696930&fit=constrain&dpr=off&wid=480' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Consulting Careers" 
                        />
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Lady-Smiling-While-Wearing-Eye-Glasses:16x9?ts=1685437177158&fit=constrain&dpr=off&wid=480' 
                            altText='this is img' 
                            text='We provide several voluntary options, including job-sharing opportunities, part-time and flex-time schedules.' 
                            title="Technology Careers"
                        />
                        <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Team-Having-Group-Discussions:16x9?ts=1685437177272&fit=constrain&dpr=off&wid=480' 
                            altText='this is img' 
                            text='Innovate security solutions by working with the sector’s brightest, using the coolest tech.' 
                            title="Security Careers"
                        />
                 <WorkCard 
                            images='https://dynamicmedia.accenture.com/is/image/accenture/Man-Wearing-Eye-Glasses:16x9?ts=1685437177220&fit=constrain&dpr=off&wid=480' 
                            altText='this is img' 
                            text='Innovate security solutions by working with the sector’s brightest, using the coolest tech.' 
                            title="Operations Careers"
                        />
                    </div>
                </div>
            </div>
            <CareersPage/>
            <StayConnected/>
            <Footer/>
        </div>
    );
};

export default page;
