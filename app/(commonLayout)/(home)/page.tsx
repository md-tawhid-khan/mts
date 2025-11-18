import Image from 'next/image';
import styles from './home.module.css'


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

     
        
   
   </div>
  );
}
