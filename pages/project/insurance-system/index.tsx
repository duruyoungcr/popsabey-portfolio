import type { NextPage } from 'next'
import Image from 'next/image'
import ProjectIntro from '../../../components/general/ProjectIntro'
import Layout from '../../../components/layout/Layout'
import SEO from '../../../components/layout/SEO'
import { insuranceApp } from '../../../constants/projectsOutline'
import styles from './Insurance-System.module.css'
import BannerImage from '../../../public/assets/img/projects/insurance-system.png'
import GroupTwoImage from '../../../public/assets/img/projects/insurance-system/2group.png'
import BadgeHeading from '../../../components/general/BadgeHeading'
import ResearchImage from '../../../public/assets/img/projects/insurance-system/research.png'
import PersonaImage from '../../../public/assets/img/projects/insurance-system/persona.png'
import UserFlowImage from '../../../public/assets/img/projects/insurance-system/userflow.png'
import GroupThreeImage from '../../../public/assets/img/projects/insurance-system/3group.png'
import GroupThreeTwoImage from '../../../public/assets/img/projects/insurance-system/3group2.png'
import HMockImage from '../../../public/assets/img/projects/insurance-system/homepage_mockup.png'
import HMockTwoImage from '../../../public/assets/img/projects/insurance-system/homepage_mockup1.png'
import PMockImage from '../../../public/assets/img/projects/insurance-system/payments_mockup.png'

import ProjectLink from '../../../components/general/ProjectLink'

const InsuranceSystem: NextPage = (props) => {
    const { year, role, platform, industry, duration, title, description } = insuranceApp

    return (
        <>
            <SEO title="Project | Insurance System" />
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
                        <Image src={BannerImage} width={1272} height={763} alt={title} placeholder='blur' />
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
                        <div>
                            <BadgeHeading text='THE CHALLENGE' />
                            <p>
                                Lowering the barrier of insurance registration and access to insurance services in Nigeria. Finding an easy opt-in way for millenials and GenZs to adopt insurance and it’s benefit.
                            </p>
                        </div>
                        <div>
                            <BadgeHeading text='My Approach' />
                            <p>
                                Creating a solution that encourages and motivates targeted users into using solution-focused technologies aimed at easing the barrier of insurance registration and adoption in Nigeria.
                            </p>
                        </div>
                    </div>
                    <div className='sm:px-20'>
                        <div className={styles.imgContainer}>
                            <Image src={GroupTwoImage} width={1065} height={745} alt={title} placeholder='blur' />
                        </div>
                        <div className='mb-10'>
                            <div className='mb-10 sm:mb-16'>
                                <BadgeHeading text='RESEARCH' />
                                <p>
                                    Like always, research opens me up to a lot of things as regarding the project, in the industry including close-competitors and public insurance data which aided my decision-making while working on this product.
                                </p>
                            </div>
                            <div>
                                <BadgeHeading text='RESEARCH / INTERVIEWS' />
                                <p>
                                    I conducted user interviews with our target demography of users asking on their experience so far, limitations, knowledge of insurance, how oppen they are to this solution and if they have used any similar solution before. I tried to capture and segment this result from the interviews on a affinity map to better understand the data gotten from the research.
                                </p>
                            </div>
                        </div>
                        <div className='mb-10 sm:mb-16'>
                            <Image src={ResearchImage} width={1060} height={751} alt={title} placeholder='blur' />
                            <p className='mt-4 sm:mt-10'>
                                I got insight into platforms and solution not formally known to me and also the what our potential users think on the solution at hand.
                            </p>
                        </div>
                        <div className='mb-10 sm:mb-16'>
                            <div className='mb-6'>
                                <BadgeHeading text='USER PERSONA' />
                                <p>
                                    I created the user persona based on product’s targeted audience to help shape the flow and to tailor the experince to the demographies..
                                </p>
                            </div>
                            <div>
                                <Image src={PersonaImage} width={1056} height={869} alt={title} placeholder='blur' />
                            </div>
                        </div>
                        <div className='mb-10 sm:mb-16'>
                            <div className='mb-6'>
                                <BadgeHeading text='USER FLOW' />
                                <p>
                                    I proceeded next to mapping out the flow of the proposed solution and the try to sort the right data under proper sections, I did informational architure to sort and priotize this flow.
                                </p>
                            </div>
                            <div>
                                <Image src={UserFlowImage} width={1056} height={869} alt={title} placeholder='blur' />
                            </div>
                        </div>
                        <div className='mb-10 sm:mb-16'>
                            <div className='mb-6'>
                                <BadgeHeading text='THE EXPERIENCE' />
                                <p>
                                    There is need for a simple platform onboarding, one of the primary goal of this project is to SIMPLIFY and that exactly what I implemented in the design.
                                </p>
                            </div>
                            <div>
                                <Image src={GroupThreeTwoImage} width={1160} height={745} alt={title} placeholder='blur' />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <div className='max-w-[518px] mb-6'>
                                <p className='mb-4'>HOMEPAGE</p>
                                <p>
                                    Making active insurance accessible first-glance is paramount to build trust with users and to reduce the steps to perform certain actions on an existing plan.
                                </p>
                            </div>
                            <div className='relative max-w-[200px]'>
                                <div className='z-10'>
                                    <Image src={HMockTwoImage} width={300} height={555} alt={title} placeholder='blur' />
                                </div>
                                <div className='absolute top-20 -right-20 z-[1] max-w-[200px] sm:max-w-max'>
                                    <Image src={HMockImage} width={308} height={567} alt={title} placeholder='blur' />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center mt-10 sm:mb-16">
                            <div className='max-w-[250px]'>
                                <Image src={PMockImage} width={290} height={530} alt={title} placeholder='blur' />
                            </div>
                            <div className='-order-1 my-6 sm:my-0 sm:order-1 sm:ml-8 max-w-2xl'>
                                <p className='mb-4'>PAYMENTS</p>
                                <p>
                                    Payment commitment are designed to be payed monthly to ease users affordability of the product and allow the company to track policy-activeness adequately.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='mb-6'>
                                <p className='uppercase mb-6'>POLICIES</p>
                                <p>
                                    Introducing users to the list of all available insurance policies and indicating which they have active, for users who are not aware of which policies is suitable for them, this highlight proved advantageous to them. Making sure there is no extra stress is involved in claim riped policies, at a glance a user sees the details of the policy, the total caim fee of the riped policy and can in three to four clicks claim their money into their local bank account.
                                </p>
                            </div>
                            <div className='mx-auto max-w-max mb-10'>
                                <Image src={GroupThreeImage} width={950} height={600} alt={title} placeholder='blur' />
                            </div>
                        </div>
                        <div>
                            <BadgeHeading text='CONCLUSION' />
                            <p>
                                I saw a lot of positive reviews when the prototype was tested, particularly on the ease of navigation and calming visual language. Though as at the time collating this study, the product isn’t live and in use(real time), I’ve gotten a lot of insight and positivity on the designed solution.
                            </p>
                            <p>THANK YOU.</p>
                        </div>
                        <div className='flex items-center gap-2 sm:gap-0 justify-between sm:justify-around mt-16'>
                            <ProjectLink next={false} text='DESIGN SYSTEM' href='/project/system-design' />
                            <ProjectLink next={true} text='CRYPTO EXCHANGE' href='/project/crypto-app' />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default InsuranceSystem
