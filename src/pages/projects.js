import AnimatedText from '@/Components/AnimatedText'
import { GithubIcon } from '@/Components/Icons'
import Layout from '@/Components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2x1 p-12 dark:bg-dark 
        dark:border-light
        '>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl dark:bg-light
        '/>
        
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className="w-full h-auto " />
            </Link>

            <div className='w-full flex flex-col items-start justify-between pl-6'> 
                <span className='text-primary font-bold text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
                <Link href={link} target='_blank'
                className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                dark:bg-light dark:text-dark'
                >Visit Project</Link>
               
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, summary, img, link, github})=>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light
        '/>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
            <Image src={img} alt={title} className="w-full h-auto" 
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
                 size="(max-width: 768px) 100w,
                 (max-width: 1200px)50vw,50vw"
            />
            </Link>

            <div className='w-full flex flex-col items-left justify-between mt-4'> 
                <span className='text-primary font-bold text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link 
                href={link} target='_blank'
                className=' text-dark text-lg font-semibold underline dark:text-light'
                >Visit 
                </Link>

                <Link href={github} target='_blank' className='w-8'>
                <GithubIcon/>{""}
                </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>NextJs | Projects Page</title>
                <meta name='description' content=" any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                    className='mb-16'
                    />
                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                            title= "mern stack"
                            img={project1}
                            summary="fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff
                            fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff "
                            link="/"
                            github="/"
                            type= "Featured Project"

                            />
                        </div>
                        <div className='col-span-6'>
                        <Project
                            title= "mern stack"
                            img={project1}
                            summary="fdfdffff"
                            link="/"
                            github="/"
                            type= "Featured Project"

                            />
                        </div>
                        <div className='col-span-6'>
                        <Project
                            title= "mern stack"
                            img={project1}
                            summary="fdfdffff"
                            link="/"
                            github="/"
                            type= "Featured Project"

                            />
                        </div>
                        <div className='col-span-12'>
                        <FeaturedProject
                            title= "mern stack"
                            img={project1}
                            summary="fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff
                            fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff fdfdffff "
                            link="/"
                            github="/"
                            type= "Featured Project"

                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                            title= "mern stack"
                            img={project1}
                            summary="fdfdffff"
                            link="/"
                            github="/"
                            type= "Featured Project"

                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                            title= "mern stack"
                            img={project1}
                            summary="fdfdffff"
                            link="/"
                            github="/"
                            type= "Featured Project"

                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>

    )
}

export default projects