import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='w-full border-t-2 border-solid border-dark
   font-medium text-lg dark:text-light dark:border-light'>
            <Layout className='py-8 flex items-center justify-between'>
                <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
                <div className='flex items-center'>
                    Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                    by&nbsp; <Link href="/">Prem</Link>

                </div>
                <Link href="/">Hello</Link>

            </Layout>
        </footer>
    )
}

export default Footer