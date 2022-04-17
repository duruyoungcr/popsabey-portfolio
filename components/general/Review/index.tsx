import Image from 'next/image'
import React from 'react'

interface IReviewPropTypes {
    text: string,
    imagePath: string,
    name: string,
    position: string,
}

const Review = ({ text, imagePath, name, position }: IReviewPropTypes) => {
    return (
        <div
            style={{
                background: 'linear-gradient(180deg, #030732 0 %, #010424 100 %)'
            }}
            className='border-[0.5px] border-black-light rounded-3xl p-7 max-w-[589px]'
        >
            <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2825 0.511475C10.1944 1.00954 0.0056 2.14121 0 16.0229V33.4886H15.8168V14.8016H10.5649C10.2322 9.81181 14.341 8.52338 18.8091 7.53434L17.2825 0.511475V0.511475ZM38.4733 0.511475C31.3852 1.00954 21.1964 2.14124 21.1908 16.0229V33.4886H37.0077V14.8016H31.7557C31.423 9.81181 35.5319 8.52338 40 7.53434L38.4733 0.511475V0.511475Z" fill="#9BB3DA" />
            </svg>
            <div className="flex mt-2 sm:mt-[25.5px] justify-between flex-col h-[250px] sm:h-[300px]">
                <p className='text-xl xl:text-[28px] 2xl:text-2xl'>{text}</p>
                <div className='flex justify-start sm:justify-end'>
                    <div className='flex items-center'>
                        <Image src={imagePath} width={48} height={48} alt={name} className='rounded-full' />
                        <div className='ml-[7px] '>
                            <h4 className='text-blue leading-4'>{name}</h4>
                            <p className='text-xs text-white-dark'>{position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review