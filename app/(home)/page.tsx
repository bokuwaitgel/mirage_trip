import Image from "next/image";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";

import viza from "../../public/text";

export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="mx-auto">
          <div className="flex-col">
          <section className="flex min-h-screen w- snap-start py-32" id="home">
           
              <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
                  <div className="p-10 pl-10 sm:pl-40  flex flex-1 flex-col justify-normal md:justify-center">
                  
                    <GradualSpacing className="text-3xl  font-bold" text="Mirage Trip"/>
                    <GradualSpacing className="mb-10 text-1xl font-bold" text="-- Travel Agency --"/>
                    <p>
                    🇺🇸АНУ-10 жил,🇨🇦Канад 4-10 жил,
                    🇬🇧Англи 6 сар-2 жил,
                    🇪🇺Европын 27 орнууд 10-90 хоног, 
                    🇯🇵Япон-90 хоног,🇮🇪Ирланд-2 жил,
                    🇦🇺Австралийн-1 жил хүртэлх визны зөвлөгөө үйлчилгээ, 
                    Виз мэдүүлэг болон 🇭🇺Унгар улсын 2 жилийн хөдөлмөрийн гэрээ
                    </p>
                    
                </div>
                  <div className="p-10 flex flex-1 flex-col items-center justify-center md:justify-center">
                        <Image 
                                src="/front.png" 
                                className="a rounded-xl" 
                                alt="logo" 
                                width="0"
                                height="0"
                                sizes={"(max-width: 640px) 200vw, (max-width: 1024px) 200vw, 1024px"}
                                style={{ width: '70%', height: 'auto' }} 
                        />
                  </div>
              </div>
            </section>

            <section id="viza">
                <div className="container mx-auto xl:max-w-7xl flex min-h-screen w-full snap-start py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 place-items-stretch">
                        {
                            viza.map((item, index) => (
                              <BlurFade key={index} delay={0.25 + index * 0.05}>
                                <div key={index} className="p-3  hover:shadow-2xl dark:hover:shadow-white rounded-2xl m-2">
                                    <Link href={{
                                        pathname: '/viza/'+index,
                                    }}
                                        className="flex flex-col items-center justify-center gap-4">
                                        <div className=" rounded-2xl">
                                            <Image
                                                
                                                // check dark mode
                                                src={item.background}
                                                alt="logo" 
                                                width="0"
                                                height="0"
                                                sizes={"(max-width: 640px) 200vw, (max-width: 1024px) 200vw, 1024px"}
                                                style={{ width: '100%', height: 'auto' }}  
                                            />
                                        </div>
                                        <h3 className="font-medium text-xl leading-8 text-center">
                                            <span dangerouslySetInnerHTML={{ __html: item.title.mn }} />
                                        </h3>
                                    </Link>
                                </div>
                                </BlurFade>
                            ))
                        }
                        
                    </div>
                </div>
            </section>

            <section className="flex min-h-screen w-full snap-start py-32 m-2" id="contact">
                <div className="container mx-auto  xl:max-w-7xl">
                <div className="pt-12">
                  <h2 className="text-3xl lg:text-5xl uppercase font-black text-center">CONTACT</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-24 gap-12">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-row items-center gap-6">
                      <div>
                          <svg className="w-8 h-8 stroke-black dark:stroke-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="stroke-2" d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" strokeLinecap="round" strokeLinejoin="round"/>
                            <rect className="stroke-2" x="3" y="5" width="18" height="14" rx="2"  strokeLinecap="round"/>
                          </svg>
                        </div>
                      <div>Mirage.trip.llc@gmail.com</div>
                      </div>
                      <div className="flex flex-row items-center gap-6">
                        <div>
                          <svg className="w-8 h-8 fill-[#1C274C]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                          <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
                          </svg>
                        </div>
                        <div>7733 6464</div>
                      </div>
                      <div className="flex flex-row items-center gap-6">
                        <div>
                          <svg className="w-8 h-8 fill-[#1C274C]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                          <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
                          </svg>
                        </div>
                        <div>МЕНЕЖЕР - 8018 5004
                        </div>
                      </div>
                      <div className="flex flex-row items-center gap-6">
                        <div>
                          <svg className="w-8 h-8 fill-[#1C274C]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
                          <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" />
                          </svg>
                        </div>
                        <div>МЕНЕЖЕР - 8003 3942</div>
                      </div>
                      
                      
                      <div className="flex flex-row items-center gap-6">
                        <div>
                          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg"  version="1.0" id="Layer_1" viewBox="0 0 64 64" >
                          <g>
                            <path fill="#F76D57" d="M32,52.789l-12-18C18.5,32,16,28.031,16,24c0-8.836,7.164-16,16-16s16,7.164,16,16   c0,4.031-2.055,8-4,10.789L32,52.789z"/>
                            <g>
                              <path className="dark:fill-white" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289    l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289    C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M44,34.789l-12,18l-12-18C18.5,32,16,28.031,16,24    c0-8.836,7.164-16,16-16s16,7.164,16,16C48,28.031,45.945,32,44,34.789z"/>
                              <circle className="dark:fill-white" cx="32" cy="24" r="8"/>
                            </g>
                          </g>
                          </svg>
                        </div>
                        <div>
                            Сүхбаатар дүүрэг,8-р хороо, 
                            Сансрын Е-март дэлгүүрийн зүүн талд, 
                            Сэлбэ гол дагуу Архитектор ордон 8 давхар 802тоот , 
                            Ulaanbaatar, Mongolia
                        </div>
                      </div>
                    </div>
                      <div className="flex place-items-center justify-center mr-2">
                        <iframe
                          className="flex border-2 rounded-md w-full h-full items-center justify-center	"
                          loading="lazy"
                          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgFWCbHn3SOr3vCHrIXLCZrXdqKfy80T4
                          &q=Монголын+архитекторуудын+эвлэл">
                        </iframe>
                      </div>
                </div>
              </div>
            </section>
          </div>
      </div>
   </div>
  );
}
