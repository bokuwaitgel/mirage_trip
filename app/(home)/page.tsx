import HomeSection from "../components/sections/HomeSection";
import VizaSection from "../components/sections/VizaSectoin";
import ContactSection from "../components/sections/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
    <div className="mx-auto">
          <div className="flex-col">
          <HomeSection />
          <div className="absolute top-0 right-0 -z-10">
            <Image 
              src="/images/blob-shape.png" 
              alt="blob background shape" 
              width={0}
              height={0}
              sizes="200vw"
              style={{ width: '100%', height: 'auto' }}

            />
          </div>
          {/* <VizaSection /> */}
          <div className="relative">
            <VizaSection />
            <div className="absolute top-0 right-0 z-[-1]">
              <Image 
                src="/images/plus-group.png" 
                alt="blob background shape" 
                width={0}
                height={0}
                sizes="200vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <ContactSection />
          </div>
      </div>
   </div>
  );
}
