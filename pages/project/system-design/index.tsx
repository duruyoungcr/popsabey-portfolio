import type { NextPage } from 'next'
import Image from 'next/image'
import BadgeHeading from '../../../components/general/BadgeHeading'
import ProjectIntro from '../../../components/general/ProjectIntro'
import Layout from '../../../components/layout/Layout'
import SEO from '../../../components/layout/SEO'
import { designSystem } from '../../../constants/projectsOutline'
import CoverImage from '../../../public/assets/img/projects/system-design/cover.png'
import FigmaImage from '../../../public/assets/img/projects/system-design/figma.png'
import FigmaTwoImage from '../../../public/assets/img/projects/system-design/figma2.png'
import OutlineImage from '../../../public/assets/img/projects/system-design/outline.png'
import FrameImage from '../../../public/assets/img/projects/system-design/frame.png'
import HowImage from '../../../public/assets/img/projects/system-design/how.png'
import styles from './SystemDesign.module.css'
import ProjectLink from '../../../components/general/ProjectLink'

const SystemDesign: NextPage = (props) => {
    const { year, role, platform, industry, duration, title, description } = designSystem
    return (
        <div>
            <SEO title="Project | Design System" />
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
                    <div className='my-10 sm:my-20'>
                        <div>
                            <BadgeHeading text='WHY A DESIGN SYSTEM?' />
                            <p className={styles.paragraph} data-aos='fade-up' data-aos-delay='100'>
                                “Design doesn’t scale easily. Efficiency doesn’t emerge from thin air. Scaling design through hiring, without putting standards in place, is a myth. With every new hire, new ideas for color palettes, typography and patterns appear in the product, growing the inconsistency and increasing the maintenance cost. Every new hire increases the design entropy. There’s only one way to stop the growth of the chaos. Committing to running a design system process. Gradual growth of a design system equals gradual increase in consistency and speed of software development.
                            </p>
                            <p className='mt-2 sm:mt-8' data-aos='fade-up' data-aos-delay='200'>
                                Design scales. But it scales only with a design system.” - UXPIN.
                            </p>
                        </div>
                    </div>
                    <div className='mb-10 sm:mb-20'>
                        <div>
                            <BadgeHeading text='MY PROCESS' />
                            <p className={styles.paragraph} data-aos='fade-up' data-aos-delay='100'>
                                Having been tasked with creating the design system from scratch solely, I had to map out an approach to tackling this project.
                            </p>
                            <p className='mt-2 sm:mt-8' data-aos='fade-up' data-aos-delay='200'>
                                Knowing what is required, the first step I took is breaking down this task into sub parts. These are the following categorization(sub part) for the design system: Content Outline, Instructions & Guidelines, Components & Widgets, Usage & Examples, Documentation.
                            </p>
                            <p className='mt-2 sm:mt-8' data-aos='fade-up' data-aos-delay='300'>
                                Follow me as i break down each sub part and how I tackled it.
                            </p>
                        </div>
                    </div>
                    <div className='mb-20' data-aos='fade-up'>
                        <Image data-aos='fade-up' data-aos-delay='400' src={CoverImage} alt={title} placeholder='blur' width={1272} height={826} />
                    </div>
                    <div className='max-w-[1056px] sm:px-20 mx-auto mb-10 sm:mb-40 xxl:mb-48'>
                        <div className='mb-20 xxl:mb-24' >
                            <div className='mb-10'>
                                <BadgeHeading text='Components & Widgets' />
                                <p className={styles.paragraph} data-aos='fade-up' data-aos-delay='100'>
                                    This part was about going through the entire designs already in place and rebuilding these components with a defined set of rules stated down based on the brand’s guidelines like color, corner radius(based on brand personality), typography, imagery etc. to forms, shapes, sections, cards etc in other to correct all inconsistencies in the UI.
                                </p>
                                <p className='mt-2 sm:mt-8' data-aos='fade-up' data-aos-delay='200'>
                                    This takes bulk of the time, it is the also one the part I really enjoy.
                                </p>
                                <p className='mt-8 mb-2' data-aos='fade-up' data-aos-delay='300'>
                                    NAMING CONVENTION
                                </p>
                                <p data-aos='fade-up' data-aos-delay='400'>
                                    Picking how to name components is as important as creating the components itself, since the sole purpose of a design system is having a store of reuseable component to pick when building, that purpose will be defeated if team members cannot find a component because of a bad naming structure.
                                </p>
                                <p className='mt-2 sm:mt-8' data-aos='fade-up' data-aos-delay='500'>
                                    After much deliberation, the naming structure I adopted was based on Name/Type, Hierarchy, Attributes and/or Form.
                                </p>
                            </div>
                            <div className='grid sm:grid-cols-2 gap-8 sm:gap-16'>
                                <div>
                                    <Image data-aos='fade-up' data-aos-delay='100' src={FigmaImage} alt={title} placeholder='blur' width={445} height={395} />
                                </div>
                                <div>
                                    <Image data-aos='fade-up' data-aos-delay='200' src={FigmaTwoImage} alt={title} placeholder='blur' width={445} height={387} />
                                </div>
                            </div>
                        </div>
                        <div className='mb-10 sm:mb-20 xxl:mb-24'>
                            <div className='mb-10'>
                                <BadgeHeading text='Usage & Examples' />
                                <p className={styles.paragraph} data-aos='fade-up' data-aos-delay='100'>
                                    I have realized over the time that the best way to strenghten a design direction is to lead by examples, once teammates can see a type, it becomes easier to be able to follow in such footstep with little barrier.
                                </p>
                                <p className='mt-2 sm:mt-8' data-aos='fade-up' data-aos-delay='200'>
                                    In this section, I put the designed elements into use by creating likely usage scenarios so anyone working with the design system anywhere can understand how it is expected to be used and/or adopted.
                                </p>
                            </div>
                            <div>
                                <Image data-aos='fade-up' data-aos-delay='300' src={FrameImage} alt={title} placeholder='blur' width={445} height={395} />
                            </div>
                        </div>
                        <div className='mb-10 sm:mb-20 xxl:mb-24'>
                            <div className='mb-10'>
                                <BadgeHeading text='Documentation' />
                                <p className={styles.paragraph} data-aos='fade-up' data-aos-delay='100'>
                                    Handing over a new design system to another designer can get really tedius on both ends, numerous questions will be asked as regarding the designs made on the design system in terms of sizing, language used and/or any other different thing done on the design system.
                                </p>
                                <p className='mt-2 sm:mt-8' data-aos='fade-up' data-aos-delay='200'>
                                    This section is geered towards giving insight into how the decision for each(or group of) element was made for a neutral person to easily be onboarded.
                                </p>
                            </div>
                            <div>
                                <Image data-aos='fade-up' data-aos-delay='300' src={HowImage} alt={title} placeholder='blur' width={495} height={338} />
                            </div>
                        </div>
                        <div className='mb-16'>
                            <div className='mb-10'>
                                <BadgeHeading text='Instructions and Guideline' />
                                <div data-aos='fade-up' data-aos-delay='100'>
                                    <p >
                                        This was created to help the entire Product and Engineering team know who is in charge of what, role designation and generally system purpose. This section covers five(5) major parts which are:
                                    </p>
                                    <p className='mt-2 sm:mt-8'>
                                        (i)   Who it is for?
                                    </p>
                                    <p className='mt-2 sm:mt-8'>
                                        (ii)  How to use
                                    </p>
                                    <p className='mt-2 sm:mt-8'>
                                        (iii) How to manage
                                    </p>
                                    <p className='mt-2 sm:mt-8'>
                                        (iv) Who will manage?
                                    </p>
                                    <p className='mt-2 sm:mt-8'>
                                        (v) Rules to managing
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-10 sm:mb-20 xxl:mb-24'>
                            <div className='mb-10'>
                                <BadgeHeading text='Content Outline' />
                                <p data-aos='fade-up' data-aos-delay='100'>
                                    Well, this is just a means of helping stakeholders and teammates identify the content structure of the design system file and what is where within the document.
                                </p>
                            </div>
                            <div>
                                <Image data-aos='fade-up' data-aos-delay='200' src={OutlineImage} alt={title} placeholder='blur' width={588} height={438} />
                            </div>
                        </div>
                    </div>
                    <div className='mb-10 sm:mb-40 xxl:mb-48' >
                        <BadgeHeading text='WHAT IS NEXT?' />
                        <p className={styles.paragraph} data-aos='fade-up' data-aos-delay='100'>
                            “A design system is a living thing, it is always evolving.” -A DS Expert.
                        </p>
                        <p data-aos='fade-up' data-aos-delay='200'>
                            We must continue to work on the system and the foundation to the team’s products to constantly adapt it to the brand’s direction.
                        </p>
                        <p className='mt-8' data-aos='fade-up' data-aos-delay='300'>
                           As part of our design system development, we are now assigning tokens to design assets. To ensure consistency and clarity, we have chosen to name our tokens based on their semantic meaning, reflecting how they will be used within our design system...
                        </p>
                      
                        <p className='mt-8' data-aos='fade-up' data-aos-delay='500'>
                            THANK YOU.
                        </p>
                    </div>
                    <div className='flex items-center justify-around sm:mb-16'>
                        <ProjectLink next={false} text='ANTLERS FLIGHT APP' href='/project/flight-app' />
                        <ProjectLink next={true} text='INSURANCE APP' href='/project/insurance-system' />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default SystemDesign
