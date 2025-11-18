import Image from "next/image";

export default function Services() {
  return (
    <div className="w-full bg-gray-100 py-16 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 mb-2">OUR SERVICES</h2>
      <p className="text-gray-500 tracking-wider mb-10">WHAT WE DO</p>

      <div className="relative w-full max-w-5xl flex justify-center">
        {/* Center Circle */}
        <div className="hidden sm:block  absolute top-1/2 transform -translate-y-1/2 z-20">
          <div className="w-40 h-40 bg-white shadow-xl rounded-full flex items-center justify-center border-4 border-blue-500">
            <span className="text-5xl"><Image src="/handshake.jpg" alt="no image" height={150} width={150} className="rounded-full" /></span>
          </div>
        </div>

        {/* Grid Container */}
        <div className=" md:grid grid-cols-2 gap-y-16 gap-x-6 w-full mt-20">
          {/* Top Left */}
          <div className="relative flex items-center ">
             
            <div className=" w-64 bg-yellow-500 rounded-full p-5 shadow-lg ">
                
             <div className="flex items-center">
                <Image src='/corporate.png' height={75} width={75} alt="No Image"/>
                 <h3 className="font-bold text-white mb-1">Corporate Websites</h3>
             </div>

              <p className="text-white text-sm p-5">
              A corporate website showcases professionalism, services, credibility, and communication.
              </p>
             
            </div>
          </div>

          {/* Top Right */}
          <div className="relative flex items-center justify-end">
            <div className="w-64 bg-teal-500 rounded-full p-5 shadow-lg ">
              <div className="flex items-center">
                <Image src='/corporate.png' height={75} width={75} alt="No Image" />
                 <h3 className="font-bold text-white mb-1">E-Commerce Websites</h3>
             </div>
              <p className="text-white text-sm p-5">
               Online stores enabling product browsing, purchasing, payments, delivery, user accounts, and sales.
              </p>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="relative flex items-center">
            <div className="w-64 bg-blue-700 rounded-full p-5 shadow-lg">
               <div className="flex items-center">
                <Image src='/corporate.png' height={75} width={75} alt="No Image"/>
                 <h3 className="font-bold text-white mb-1">Informational website</h3>
             </div>
              <p className="text-white text-sm p-5">
               Provides knowledge, articles, resources, education, news, guidance, facts, updates, and learning.
              </p>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="relative flex items-center justify-end">
            <div className="w-64 bg-orange-400 rounded-full p-5 shadow-lg">
               <div className="flex items-center">
                <Image src='/corporate.png' height={75} width={75} alt="No Image"/>
                 <h3 className="font-bold text-white mb-1">web application Websites</h3>
             </div>
              <p className="text-white text-sm p-5">
               Interactive platforms offering tools, dashboards, automation, user accounts, dynamic features, and productivity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Center Block */}
      <div className="mt-20 w-64 bg-pink-500 rounded-full p-5 shadow-lg text-center">
         <div className="flex items-center">
                <Image src='/corporate.png' height={75} width={75} alt="No Image"/>
                 <h3 className="font-bold text-white mb-1">entertainment website</h3>
             </div>
        <p className="text-white text-sm p-5">
          Delivers fun, media, videos, music, games, interaction, creativity, community, and enjoyment.
        </p>
      </div>
    </div>
  );
}
