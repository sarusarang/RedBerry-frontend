import { Flame } from "lucide-react";
import { CountingNumber } from "../animate-ui/text/counting-number";
import { MotionEffect } from "../animate-ui/effects/motion-effect";



// Feature data
const features = [
    {
        count: 2000,
        label: "Happy Clients",
        image: "/Happy Clients-whyus.jpg",
    },
    {
        count: 150,
        label: "Your Growth Partner",
        image: "/Growth Partners - whyus.jpg",
    },
    {
        count: null,
        label: "Premium Quality & Innovations ",
        image: "/Premium Quality & Innovations -whyus.jpg",
    },
    {
        count: null,
        label: "Error Free Delivery",
        image: "/Free Delivery - whyus.jpg",
    }
];



export default function WhyChooseUs() {


    return (


        <section className="bg-white py-10 sm:py-10 border-t-2 border-dashed border-gray-300 px-2 sm:px-10 lg:px-20 text-black">


            {/* Section Header */}
            <MotionEffect
                fade
                blur="10px"
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut',
                }}
                inView
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Many, Chosen for a Reason</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We have earned the trust of numerous clients through consistent quality, creativity, and commitment. Our results-driven approach and attention to detail make us the preferred choice for printing and advertising solutions
                    </p>
                </div>
            </MotionEffect>



            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                {features.map((item, idx) => (

                    <MotionEffect inView key={idx} slide={{ direction: 'down', }} fade zoom delay={0.4 + idx * 0.1}>

                        <div
                            key={idx}
                            className="rounded-3xl overflow-hidden relative group shadow-md"
                        >

                            <img
                                src={item.image}
                                alt={item.label}
                                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-black/40"></div>

                            <div className="absolute bottom-4 left-4 text-white">

                                <div className="flex items-center gap-2 text-2xl font-bold">
                                    <p>{item.count && (<> <CountingNumber inView number={item?.count} className="text-2xl" /> + </>)}</p>
                                    <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center">
                                        <Flame className="w-4 h-4" />
                                    </div>
                                </div>

                                <p className="text-md font-medium mt-1">{item.label}</p>

                            </div>

                        </div>

                    </MotionEffect>

                ))}


            </div>

        </section>

    );
}
