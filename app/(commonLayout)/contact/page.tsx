import FormData from '@/components/form/form';
import { Metadata } from 'next';
import Image from 'next/image';

 export const metadata: Metadata = {
  title: 'MTS/contact',
  description: 'Get in touch with MTS Tech for software development, web solutions, or service support. We’re here to answer your questions and start your next project.',
}

const ContactPage = () => {
   
    return (
        <div className='my-6 mx-auto'>
            <div className='flex justify-between items-center '>
                <div className='hidden sm:block pl-5 '>
                    <Image src="/orderPage.png" alt='no Image' width={600} height={600}/>
                </div>
            <div className=' flex flex-col items-center justify-center bg-fuchsia-50 mx-auto p-4'>
                <div className='space-y-2 flex flex-col items-center'>
                    <h1 className='text-5xl font-bold'>ORDER NOW</h1>
                    <p className='mb-7'>fill out the form to place your order</p>
                </div>
            <FormData/>
            </div>
            </div>
        </div>
    );
};

export default ContactPage;