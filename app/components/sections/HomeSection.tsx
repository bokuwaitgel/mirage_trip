import Image from "next/image";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function HomeSection() {
    return (<section className="flex snap-start sm:py-32 py-4" id="home">
           
              <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
                  <div className="p-10 pl-10 sm:pl-40  flex flex-1 flex-col justify-normal md:justify-center">
                  
                    <GradualSpacing className="text-3xl  font-bold" text="Mirage Trip"/>
                    <GradualSpacing className="mb-10 text-1xl font-bold" text="-- Travel Agency --"/>
                    <p className="text-center">
                    АНУ,Канад,
                    Англи,
                    Европын 27 орнууд, 
                    Япон,Ирланд,
                    Австралийн визны зөвлөгөө үйлчилгээ, 
                    Виз мэдүүлэг болон Унгар улсын хөдөлмөрийн гэрээ
                    {/* АНУ, Шенгений орнууд, Япон Австрали, Канад, Англи, Дубай, Ирланд улсуудын аяллын визний үйлчилгээ, Чех болон Унгар улсын ажлын гэрээ, */}
                    </p>
                    
                </div>
                  <div className="p-10 flex flex-1 flex-col items-center justify-center md:justify-center rounded-xl">
                        <Image 
                                src="/front_im_2.png" 
                                alt="test"
                                width={0}
                                height={0}
                                className="rounded-2xl"
                                sizes="100vw"
                                style={{ width: '65%', height: 'auto' }}
                        />
                  </div>
              </div>
          </section>
          )
}