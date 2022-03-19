import type { NextPage } from 'next'
import Image from 'next/image'
import ProjectIntro from '../../../components/general/ProjectIntro'
import Layout from '../../../components/layout/Layout'
import SEO from '../../../components/layout/SEO'
import { cryptoApp } from '../../../constants/projectsOutline'
import styles from './Crypto-app.module.css'
import CoverImage from '../../../public/assets/img/projects/crypto-app/cover.png'
import FrameImage from '../../../public/assets/img/projects/crypto-app/f.png'
import FrameTwoImage from '../../../public/assets/img/projects/crypto-app/f2.png'
import PainPointImage from '../../../public/assets/img/projects/crypto-app/points.png'
import ExperienceImage from '../../../public/assets/img/projects/crypto-app/experience.png'
import TxnImage from '../../../public/assets/img/projects/crypto-app/txn.png'
import HomeImage from '../../../public/assets/img/projects/crypto-app/home.png'
import OneImage from '../../../public/assets/img/projects/crypto-app/1.png'
import TwoImage from '../../../public/assets/img/projects/crypto-app/2.png'
import BadgeHeading from '../../../components/general/BadgeHeading'
import PersonaProfile from '../../../components/projects/PersonaProfile'
import ProjectLink from '../../../components/general/ProjectLink'


const CryptoApp: NextPage = (props) => {
    const { year, role, platform, industry, duration, title, description } = cryptoApp
    return (
        <>
            <SEO title="Project | Crypto Trading App" />
            <Layout>
                <div className={styles.container}>
                    <ProjectIntro
                        year={year}
                        role={role}
                        duration={duration}
                        title={title}
                        description={description}
                        platform={platform}
                        industry={industry}
                    />
                    <div className='mt-10 mb-16'>
                        <Image src={CoverImage} width={1272} height={908} alt={title} placeholder='blur' />
                    </div>
                    <div className='mb-10'>
                        <BadgeHeading text='PROJECT BRIEF' />
                        <p className='mt-10'>
                            With the rise in the use and adoption of cryptocurrencies as a valid digital currency. The entry level into cryptocurrency adoption or usage is still relatively low especially for people outside the technology industry. The aim is to target non technical people and to design a mobile solution that would imbibe them into the trading system.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-12'>
                        <div>
                            <BadgeHeading text='THE CHALLENGE' />
                            <p className='mt-10'>
                                As crypto is a fairly new concept to people and many are trying to get a hang of it, the average cryptocurrency trading application in the market is rather ambiguous in it’s functionality thereby elongating the learning curve  in most of these app. This results to a drop and disinterest in the product and similar ones.
                            </p>
                        </div>
                        <div>
                            <BadgeHeading text='SOLUTION' />
                            <p className='mt-10'>
                                The solution was to design an app that is user-centric in it’s approach in solving the challenge. A new solution focused simplifying the user experience and accomodating new users.
                            </p>
                        </div>
                    </div>
                    <div className='my-16'>
                        <Image src={FrameImage} width={1338} height={785} alt={'Frame'} placeholder='blur' />
                    </div>
                    <div className='max-w-[1056px] px-20 mx-auto mb-20 xxl:mb-24'>
                        <div>
                            <BadgeHeading text='RESEARCH' />
                            <p className='mt-10'>
                                Since there are a ton of similar apps on the market, it is important I take a critical look at what these products are doing well and where they fail short in the market.
                            </p>
                            <p className='mt-8'>
                                My first line of action is to download this apps(competitors and have a first hand experience of them myself, what this does for me is (i) I get to understand the in-app flow of all the competitors i examine. (ii) I get to experience the app as a user(though my judgement might be flawed due to my level of exposure to products such as this). (iii) I take note of the UX writing used across the product. (iv) Visual design/aesthetic inspiration.
                            </p>
                            <p className='mt-8'>
                                After this, I go online to see what other users are saying about this products, I pay special attention to comments on the mobile Stores(Apple App Store and Google Play Store) as it is a medium to vent a users’ distress directly to product owners. This method have always proved to be effective and really handy.
                            </p>
                            <div className='my-16'>
                                <Image src={PainPointImage} width={1056} height={712} alt={'Pain points'} placeholder='blur' />
                            </div>
                        </div>
                        <div className='mb-10'>
                            <BadgeHeading text='RESEARCH / Interview' />
                            <p className='mt-10'>
                                Based on the targeted users, I conducted group user interview via online messaging platforms to understand user’s first hand knowledge on this industry and how this new product can help solve any challenges they might be encountering presently and to overcome any restrain in a potential user.
                            </p>
                        </div>
                        <div className='mb-10'>
                            <BadgeHeading text='Persona' />
                            <div className='my-14'>
                                <PersonaProfile
                                    name='ella adebola'
                                    age={20}
                                    gender='Female'
                                    role='Software Developer'
                                    summary='Ella is an student(college) of computer science and a software engineer at a startup, she stays a lot on the internet while doing her work. She hears her colleagues and peers talking about this new technology called blockchain and how are friends are making money from one of this tech nology’s product called crypto.'
                                    challenges={["* Time is gold, she barely have enough free time.", "* Want a way to invest her money with little entry barrier."]}
                                    imageName='user'
                                />
                            </div>
                            <div className='mb-14'>
                                <PersonaProfile
                                    name='favour bucks'
                                    age={35}
                                    gender='Female'
                                    role='Fashion Designer'
                                    summary='Chidinma is a fashion designer who is newly married to a banker, she has always have a penchant for tech and investment since high school. She has heard about cryptocurrency and she is interested in investing into it.'
                                    challenges={["* Chidinma have no prior knowledge on cryptocurrency.", "* She needs to be able to trade/invest from her office."]}
                                    imageName='user2'
                                    inversed={true}
                                />
                            </div>
                        </div>
                        <div className='mb-10'>
                            <BadgeHeading text='THE EXPERIENCE' />
                            <p className='mt-10'>
                                Imagine the average crypto trading and exchange platform, now more optimized and personalized.
                            </p>
                            <div className="flex items-center mt-10 mb-16">
                                <div className='mr-16 max-w-2xl'>
                                    <p>
                                        Payment commitment are designed to be payed monthly to ease users affordability of the product and allow the company to track policy-activeness adequately.
                                    </p>
                                </div>
                                <div>
                                    <Image src={ExperienceImage} width={237} height={471} alt={title} placeholder='blur' />
                                </div>
                            </div>
                            <p className='text-center mb-10'>
                                Simplifying the interface for non tech users to navigate easily, making things easily accessible and sectioning items into smaller units to avoid information overload for users.
                            </p>
                            <div className='mb-16'>
                                <Image src={FrameTwoImage} width={874} height={519} alt={title} placeholder='blur' />
                            </div>
                            <div className='grid grid-cols-3 gap-6 mb-16'>
                                <div>
                                    <Image src={HomeImage} width={285} height={519} alt={title} placeholder='blur' />
                                </div>
                                <p className='flex items-center justify-center'>
                                    Easily accessed notification system with simple ux writing.
                                </p>
                                <div>
                                    <Image src={TxnImage} width={285} height={519} alt={title} placeholder='blur' />
                                </div>
                            </div>
                            <div>
                                <p className='mb-12'>Other screens</p>
                                <div className='mx-auto max-w-max mb-2'>
                                    <Image src={CoverImage} width={630} height={457} alt={title} placeholder='blur' />
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <Image src={OneImage} width={585} height={457} alt={title} placeholder='blur' />
                                    </div>
                                    <div>
                                        <Image src={TwoImage} width={585} height={457} alt={title} placeholder='blur' />
                                    </div>
                                </div>
                            </div>
                            <p className='mt-16 text-center'>
                                To read the extensive medium case study, click {' '}
                                <a className='text-blue underline' href="https://medium.com">here</a>
                            </p>
                        </div>
                        <div className='flex items-center justify-around mt-20'>
                            <ProjectLink next={false} text='INSURANCE SYSTEM' href='/project/insurance-system' />
                            <ProjectLink next={true} text='FLIGHT APP' href='/project/flight-app' />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CryptoApp
