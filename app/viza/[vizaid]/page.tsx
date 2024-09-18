
'use client'

import { useEffect, useState } from "react";

import viza from "@/public/text";

type Props = {
  params: { vizaid: string };
};


export default function ProductDetails({ params }: Props) {
  const [product, setProduct] = useState<{ title: { mn: string; en: string; }, info: { mn: string[]}, time: {mn: string[]}, material: {mn: string[]}; background: string; } | null>(null);
    useEffect(() => {
        const product = viza.find((product, index) => index === parseInt(params.vizaid));
        if (!product) {
            setProduct(viza[0])
            return;
        }
        setProduct(product);
    }, [params.vizaid]);
   
  return (
    <div className="min-h-screen">
    <div className="mx-auto">
            <section className="flex min-h-screen w-full snap-start py-24" id="contact">
                <div className="container mx-auto  xl:max-w-7xl">
                  <div className="pt-12">
                    <h2 className="text-xl lg:text-3xl uppercase font-black text-center">{product?.title?.mn}</h2>
                  </div>
                  <ul className="px-4 pl-6">
                    {product?.info?.mn.map((info, index) => (
                      <li key={index} className="text-sm lg:text-lg text-justify list-decimal">{info}</li>
                    ))}
                  </ul>
                  {
                    product?.time.mn && product?.time.mn.length > 0 && (
                      <ul className="pt-4 px-4 pl-6">
                        <h3 className="text-lg lg:text-xl uppercase font-black pl-3">Цаг авахад</h3>
                        {product?.time.mn.map((time, index) => (
                          <li key={index} className="text-sm lg:text-lg text-justify list-decimal">{time}</li>
                        ))}
                      </ul>
                    )
                  }
                 
                    <ul className="pt-4 px-4 pl-6">
                      <h3 className="text-lg lg:text-xl uppercase font-black pl-3">{
                        product?.time.mn && product?.time.mn.length > 0 ? "Ярилцлаганд ороход бүрдүүлэх материалиуд" : "Бүрдүүлэх материалиуд"
                      }</h3>
                      {product?.material.mn.map((m, index) => (
                        <li key={index} className="text-sm lg:text-lg text-justify list-decimal">{m}</li>
                      ))}
                    </ul>
                </div>
             </section>
        </div>
    </div>
    );
}