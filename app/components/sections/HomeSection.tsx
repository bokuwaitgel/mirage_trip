import Image from "next/image";
import GradualSpacing from "@/components/magicui/gradual-spacing";

export default function HomeSection() {
    return (<section className="flex snap-start py-32" id="home">
           
              <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
                  <div className="p-10 pl-10 sm:pl-40  flex flex-1 flex-col justify-normal md:justify-center">
                  
                    <GradualSpacing className="text-3xl  font-bold" text="Mirage Trip"/>
                    <GradualSpacing className="mb-10 text-1xl font-bold" text="-- Travel Agency --"/>
                    <p>
                    {/* 🇺🇸АНУ-10 жил,🇨🇦Канад 4-10 жил,
                    🇬🇧Англи 6 сар-2 жил,
                    🇪🇺Европын 27 орнууд 10-90 хоног, 
                    🇯🇵Япон-90 хоног,🇮🇪Ирланд-2 жил,
                    🇦🇺Австралийн-1 жил хүртэлх визны зөвлөгөө үйлчилгээ, 
                    Виз мэдүүлэг болон 🇭🇺Унгар улсын 2 жилийн хөдөлмөрийн гэрээ */}
                    АНУ, Шенгений орнууд, Япон Австрали, Канад, Англи, Дубай, Ирланд улсуудын аяллын визний үйлчилгээ, Чех болон Унгар улсын ажлын гэрээ,
                    </p>
                    
                </div>
                  <div className="p-10 flex flex-1 flex-col items-center justify-center md:justify-center">
                        <Image 
                                src="/images/lady-with-aircraft.png" 
                                alt="test"
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ width: '70%', height: 'auto' }}
                        />
                  </div>
              </div>
          </section>
          )
}