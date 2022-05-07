import type { NextPage } from 'next'
import Image from 'next/image'
import ProjectIntro from '../../../components/general/ProjectIntro'
import ProjectLink from '../../../components/general/ProjectLink'
import Layout from '../../../components/layout/Layout'
import SEO from '../../../components/layout/SEO'
import { flightApp } from '../../../constants/projectsOutline'
import styles from './Flight-app.module.css'
import CoverImage from '../../../public/assets/img/projects/flight-app/cover.png'
import StepImage from '../../../public/assets/img/projects/flight-app/step.png'
import ReviewsImage from '../../../public/assets/img/projects/flight-app/reviews.png'
import BoardImage from '../../../public/assets/img/projects/flight-app/board.png'
import OneImage from '../../../public/assets/img/projects/flight-app/1.png'
import TwoImage from '../../../public/assets/img/projects/flight-app/2.png'
import ThreeImage from '../../../public/assets/img/projects/flight-app/3.png'
import FourImage from '../../../public/assets/img/projects/flight-app/4.png'
import BadgeHeading from '../../../components/general/BadgeHeading'

const FlightApp: NextPage = (props) => {
    const { year, role, platform, industry, duration, title, description } = flightApp
    return (
        <div data-scroll-section>
            <SEO title="Project | Flight App" />
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
                    <div className={styles.imgContainer}>
                        <Image src={CoverImage} width={1272} height={763} alt={title} placeholder='blur' />
                    </div>
                    <div className='mb-8 sm:mb-16'>
                        <BadgeHeading text='PROJECT BRIEF' />
                        <p>
                            This project was created to solve the challenge of offline flight booking, to bring the offline flight ticketing and reservation experience online, so bookings can be done at the comfort of travelers’ home.
                        </p>
                    </div>
                    <div className='mb-8 sm:mb-16'>
                        <BadgeHeading text='THE OBJECTIVE' />
                        <p>
                            Discover the travel-planning experince and travelers’ pain points.
                        </p>
                        <p className='sm:mt-8'>
                            Deterrmine and understand the solution’s targeted audience.
                        </p>
                        <p className='sm:mt-8'>
                            Design a solution meeting user’s pain point that aligns with system-in-place and business goals.
                        </p>
                    </div>
                    <div className='mb-10 sm:mb-40 xxl:mb-48'>
                        <div className='mb-10'>
                            <BadgeHeading text='DESIGN PROCESS' />
                            <p>
                                My approach to this project isn't something directly linear like this but it is something close to this:
                            </p>
                        </div>
                        <div>
                            <Image src={StepImage} width={1280} height={268} alt={title} placeholder='blur' />
                        </div>
                    </div>
                    <div className='max-w-[1056px] sm:px-20 mx-auto sm:mb-20 xxl:mb-24'>
                        <div className='mb-10 sm:mb-40 xxl:mb-48'>
                            <div>
                                <BadgeHeading text='RESEARCH' />
                                <p>
                                    I conducted user interviews and competitor analysis to get real-time user data(challenges, painpoints etc) for this project.
                                </p>
                                <p className='mt-8 font-medium'>
                                    USER INTERVIEWS
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    The one-on-one interviews are aimed at getting an indepth approach of how our targeted users engage booking of flight(both offline and on competitor’s websites), determine their pain points, challenges, what and what they would love to see change on such platforms and how to make things better overall.
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    Questions like:
                                    <br />
                                    (i) How do you book flights?
                                    (ii) How is that process from question [i]?
                                    (iii) What kind of challenge have you encountered with this method of booking?
                                    (iv) Have you tried using another method(different from their regular method) to book your flight?
                                    (v) How was it(other method)?  (vi) What is that one annoying difficulty you don’t like in the flight ticketing and booking Process?
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    Helps to determine the current state of things and to usher a way forward in the right direction.
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    With the response I got from the user interviews, I decided to gather the data and section them to understand better and collate similar ideas through an affinity map.
                                </p>
                            </div>
                            <div className='my-10'>
                                <Image src={BoardImage} width={1055} height={632} alt={title} placeholder='blur' />
                            </div>
                            <div>
                                <p className='mt-8 font-medium'>
                                    COMPETITOR ANALYSIS
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    Now that I have a good idea what the targeted audience experience with the current system in place, their pain points and what they expect from the product, it gives me a clear direction as to how to approach the product design. But before I dive into the design, I conducted competitor analysis as the final(before design) level of research to know what and what works well for competitors and what doesn’t work so well.
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    For the sake of this study, I will be focusing on the weak points of competitors to drive the new product into the market using these achillies heel as USPs for the product.
                                </p>
                            </div>
                            <div className='my-10'>
                                <Image src={ReviewsImage} width={1052} height={657} alt={title} placeholder='blur' />
                            </div>
                            <div>
                                <p className='mt-8'>
                                    SO I AM GOING TO SKIP TO THE CREATED SOLUTION HERE, IF YOU WOULD LIKE TO READ THE FULL RESEARCH(AND CASE STUDY), PLEASE FOLLOW THIS
                                    <a href="https://medium.com/" className='text-blue'> LINK </a>
                                    THE TO MEDIUM CASE STUDY.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <BadgeHeading text='PRODUCT EXPERIENCE' />
                                <p className='sm:mt-10 font-medium'>
                                    ONBOARDING
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    A simple onboarding and sign up flow, removing all unnecesarily process and creating the product in such a way that users do not have to register to book a ticket, making registration optional really helped in inviting competitor’s loyal users to try the product. They come for the flexibility, they stay for the experience.
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    The optionality of registration will serve as a USP for the product from the data gathered and the a level of anonymity people want with their (travel)data.
                                </p>
                                <div className='my-10'>
                                    <Image src={OneImage} width={1056} height={610} alt={title} placeholder='blur' />
                                </div>
                                <p>
                                    Albeit the advantage that comes with registration comes a better UX for subsequent platform usage as infomation used for previous bookings are stored and available for re-use for registered users.
                                </p>
                            </div>
                            <div>
                                <p className='mt-8 font-medium'>
                                    NAVIGATION
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    One of the things that characterized the mobile application and gives it an edge over the website and competitors is the well thought out user flow and navigation system that is adopted during the design process of the mobile application. I opted in for a bottom navigation format putting the most important activities and goals in the app into consideration and also in relation to a simple interface set up for users.
                                </p>
                                <div className='my-10'>
                                    <Image src={FourImage} width={1056} height={610} alt={title} placeholder='blur' />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium'>
                                    EASE OF USE
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    Making decisions as simple as possible for users to decide is top priority, multiple selections, radio selections and switches requiring little amount of effort from the users thereby reducing decision time lapse.
                                </p>
                                <div className='my-10'>
                                    <Image src={ThreeImage} width={1056} height={610} alt={title} placeholder='blur' />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium'>
                                    SCHEDULING FLIGHT
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    Checking, reviewing and comfirming of upcoming travels are stored here. Solving of missed flight due to timing(change in travel time) led to the implemetation of a reminder/alarm system on the platform to remind users timings of scheduled flights.
                                </p>
                                <div className='my-10'>
                                    <Image src={TwoImage} width={1056} height={610} alt={title} placeholder='blur' />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium'>
                                    TESTING
                                </p>
                                <p className='mt-2 sm:mt-8'>
                                    Testing this prototype in line with the challenge that spur the creation of this product(study), the solution checks most of the boxes it is aimed at.
                                </p>
                                <p className='mt-2 sm:mt-8'>THANK YOU.</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-around mt-10 sm:mt-20'>
                            <ProjectLink next={false} text='CRYPTO APP' href='/project/crypto-app' />
                            <ProjectLink next={true} text='DESIGN SYSTEM' href='/project/system-design' />
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default FlightApp
