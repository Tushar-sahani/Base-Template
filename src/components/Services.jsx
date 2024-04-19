import React, { useState } from 'react';
import serviceData from '../utils/services';
const Services = () => {
    return (
        <div className=" text-white box-border animate-fade" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="flex align-middle justify-center flex-col">
                <div className="m-auto p-16">
                    <h1 className="text-5xl mt-3">Services</h1>
                </div>
                <div className="flex flex-wrap justify-center m-auto sm:max-lg:flex-col sm:max-lg:text-center max-md:flex-col max-md:text-center max-md:mb-4">
                    {serviceData.map((data) => (
                        <div
                            key={data.name}
                            className="bg-[#1f1e1e] cursor-pointer hover:bg-[#484848d5] rounded-md lg:m-4 w-96 max-md:mt-4 overflow-hidden relative"
                        >
                            <img src={data.img_url} alt={data.name} className="w-full hover:scale-105 duration-300 transition-all opacity-85 hover:opacity-100" />
                            <div className='relative'>
                                <h1 className="lg:text-xl p-3 absolute -top-8 left-24 backdrop-blur-sm bg-[#ffffff0f] rounded-lg font-bold">{data.name}</h1>
                                <h4 className="p-2 pt-7">Charges: <span className='font-bold'>{data.charges}</span></h4>
                                <p className="p-2 text-sm text-[#e3e0e0]">{data.descripiton}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
