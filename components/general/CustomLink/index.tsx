import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './CustomLink.module.css'
import ARROW from '../../../public/assets/img/svg/angle.svg'

interface linkPropTypes {
    href: string,
    text: string
}

const CustomLink = ({ href, text }: linkPropTypes) => {
    return (
        <Link href={href}>
            <a className={`${styles.link} group`} data-aos='fade-left'>
                <p className="mr-8">{text}</p>
                <div className='group-hover:visible'>
                    <Image src={ARROW} width={6} height={12} alt='arrow-right' />
                </div>
            </a>
        </Link>
    )
}

export default CustomLink