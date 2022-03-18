import Image from "next/image"
import Link from "next/link"
import ArrowLeft from '../../../public/assets/img/svg/arrow-left.svg'
import ArrowRight from '../../../public/assets/img/svg/arrow-right.svg'

const ProjectLink = ({ text, href, next = true }: { text: string, href: string, next?: boolean }) => {
    return (
        <Link href={href} >
            <a className='border border-blue-light rounded-lg py-3.5 px-6 min-w-[268px] max-w-max bg-blue-darkest mb-10 text-lg uppercase text-white-darkest flex items-center transition-all duration-300 ease-in-out hover:bg-opacity-0 hover:shadow-lg hover:shadow-blue-darkest'>
                {next ?
                    <>
                        <p className='mr-8'>NEXT: {text}</p>
                        <Image src={ArrowRight} alt={'arrow-right'} width={24} height={24} />
                    </>
                    :
                    <>
                        <Image src={ArrowLeft} alt={'arrow-left'} width={24} height={24} />
                        <p className='ml-8'>PREV: {text}</p>
                    </>
                }
            </a>
        </Link>
    )
}

export default ProjectLink