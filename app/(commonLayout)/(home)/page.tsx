import Image from 'next/image';
import styles from './home.module.css'
import Link from 'next/link';


export default function Home() {
  return (
  <div >
     
     <section className={styles.backgroundImage} >
      
          <div className='flex justify-start items-center h-full pl-6'>
         <h1 className='text-emerald-200 text-5xl'>HELLO WORLD</h1>
           </div>
        
     </section>

     <section className='grid grid-cols-2 items-center  my-10 p-7'>
      <div className='col-span-1'>
           <Image src='/about.png' alt='no image' height={600} width={500}/>
        </div>
        <div className='col-span-1'>
             <div className='flex flex-col items-center justify-center space-y-3'>
          <h1 className='text-2xl lg:text-4xl font-semibold'>About MTS Tech</h1>
          <p>At MTS Tech, we turn ideas into fast,secure, and user-friendly digital experiences.
We are a team of passionate  developers and designers dedicated to delivering  world-class solutions for startups, brands, and enterprises.</p>
        </div>
        </div>
        
        
     </section>


      <section className='my-10 p-7'>
           <div >
            <h1 className='text-4xl my-6 font-semibold'>Experience Our Solutions</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
              <Link href={"https://next-mart-frontend.vercel.app/"}>
              <div className='border-4 bg-amber-100 flex flex-col items-center justify-center p-2'>
               <h1 className='my-2'>e-comerce site </h1>
               <Image src='/commerce.jpg' alt="No image" height={120} width={120}  />
            </div>
              </Link>
              <Link href={"https://next-mart-frontend.vercel.app/"}>
              <div className='border-4 bg-amber-100 flex flex-col items-center justify-center p-2'>
               <h1 className='my-2'>e-comerce site </h1>
               <Image src='/commerce.jpg' alt="No image" height={120} width={120}  />
            </div>
              </Link>
              <Link href={"https://next-mart-frontend.vercel.app/"}>
              <div className='border-4 bg-amber-100 flex flex-col items-center justify-center p-2'>
               <h1 className='my-2'>e-comerce site </h1>
               <Image src='/commerce.jpg' alt="No image" height={120} width={120}  />
            </div>
              </Link>
              <Link href={"https://next-mart-frontend.vercel.app/"}>
              <div className='border-4 bg-amber-100 flex flex-col items-center justify-center p-2'>
               <h1 className='my-2'>e-comerce site </h1>
               <Image src='/commerce.jpg' alt="No image" height={120} width={120}  />
            </div>
              </Link>
              <Link href={"https://next-mart-frontend.vercel.app/"}>
              <div className='border-4 bg-amber-100 flex flex-col items-center justify-center p-2'>
               <h1 className='my-2'>e-comerce site </h1>
               <Image src='/commerce.jpg' alt="No image" height={120} width={120}  />
            </div>
              </Link>
                
             
                
            </div>
            
           </div>
        </section>     
        
   
   </div>
  );
}
