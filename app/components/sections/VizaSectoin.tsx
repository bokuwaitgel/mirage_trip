import Link from 'next/link'
import viza from '../../../public/text'
import CountryCard from "../common/CountryCard";

export default function VizaSection() {
    return (
        <section id="viza">
            <div className="container mx-auto  xl:max-w-7xl">
                <div className="pt-20">
                    <p className="volkhov text-[1.5rem] text-title font-[700] text-center px-5 pb-5">
                        Бидний санал болгож буй хөтөлбөрүүд
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 place-items-stretch">
                        {viza.map((v, index) => (
                            // <Link href={`/viza/${index}`} key={index}>
                                    <CountryCard key={index} imageUrl={v.background} title={v.title.mn} index={index} />
                            // </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}