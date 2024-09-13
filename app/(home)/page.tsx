'use client';

import Image from "next/image";

import Navbar from "../components/Navbar";

export default function Home() {
  
  return (
  
   <div className="min-h-screen">
      <div className="mx-auto">
          <Navbar /> 
          <div className="flex-col">
            <section className="flex min-h-screen w-full snap-start py-32" id="home">
              <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
                  <div className="p-10 pl-10 sm:pl-40  flex flex-1 flex-col justify-normal md:justify-center">
                    <h1 className="text-7xl  font-bold">
                      TEMP WEBSITE
                    </h1>
                    <h1 className="mb-10  text-xl sm:text-3xl font-bold">
                      Lorem ipsum dolor sit amet.
                    </h1>
                    <p>
                      {/* Дата Дижитс Инноваци
                      ХХК-н Big Data
                      Management болон
                      нэгдсэн өгөгдлийн сангаар
                      дагнан мэргэшсэн дата
                      суурьтай технологийн
                      компани юм. */}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eius ipsum iste, distinctio exercitationem, expedita maiores animi quidem reiciendis error nulla nemo vel rem illum, dolor officiis praesentium ex quisquam.
                    </p>
                  </div>
                  <div className="p-10 flex flex-1 flex-col justify-normal md:justify-center">
                        <Image 
                                src="/image.png" 
                                className="a rounded-xl" 
                                alt="logo" 
                                width="0"
                                height="0"
                                sizes={"(max-width: 640px) 200vw, (max-width: 1024px) 200vw, 1024px"}
                                style={{ width: '100%', height: 'auto' }} 
                        />
                  </div>
              </div>
            </section>
            
          </div>
      </div>
   </div>
  );
}
  