import Image from 'next/image'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import UI1 from '../../public/assets/img/uis/1.png'
import UI2 from '../../public/assets/img/uis/2.png'
import UI3 from '../../public/assets/img/uis/3.png'
import UI4 from '../../public/assets/img/uis/4.png'
import UI5 from '../../public/assets/img/uis/5.png'
import UI6 from '../../public/assets/img/uis/6.png'
import UI7 from '../../public/assets/img/uis/7.png'
import UI8 from '../../public/assets/img/uis/8.png'
import UI9 from '../../public/assets/img/uis/9.png'
import styles from './UI.module.css'

const UI = () => {
    const { scroll } = useLocomotiveScroll()
    return (
        <div className={styles.container}>
            <p className='mb-10'>
                Please visit my <a href="https://instagram.com/popsabey" target="_blank" className="text-blue mb-10 underline underline-offset-2"> instagram profile</a>  to view my latest/updated UI designs
            </p>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-8'>
                    <div>
                        <Image src={UI1} alt='ui_image' width='659' height='395' placeholder='blur' />
                    </div>
                    <div>
                        <Image src={UI2} alt='ui_image' width='593' height='395' placeholder='blur' />
                    </div>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-8'>
                    <div className='col-span-2 sm:col-span-1 max-h-[185px] sm:max-h-max'>
                        <Image src={UI3} alt='ui_image' width='411' height='395' placeholder='blur' />
                    </div>
                    <div>
                        <Image src={UI4} alt='ui_image' width='411' height='395' placeholder='blur' />
                    </div>
                    <div>
                        <Image src={UI5} alt='ui_image' width='411' height='395' placeholder='blur' />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-8'>
                    <div className='sm:col-span-1'>
                        <Image src={UI6} alt='ui_image' width='518' height='395' placeholder='blur' />
                    </div>
                    <div className='sm:col-span-2'>
                        <Image src={UI7} alt='ui_image' width='734' height='395' placeholder='blur' />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-4 sm:mb-8'>
                    <div className='sm:col-span-2'>
                        <Image src={UI8} alt='ui_image' width='719' height='395' placeholder='blur' />
                    </div>
                    <div className='sm:col-span-1'>
                        <Image src={UI9} alt='ui_image' width='530' height='395' placeholder='blur' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UI