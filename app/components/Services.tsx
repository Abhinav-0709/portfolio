import React from "react";
import Container from "./Container";
import AnimatedTitle from "./AnimatedTitle"; 
import ServiceItem from "./ServiceItem"; 

const services = [
    {
        number: "01",
        title: "Web Development",
        description: "Building responsive, high-performance websites and apps.",
        imageUrl: "/images/web.jpg",
    },
    {
        number: "02",
        title: "UI/UX Design",
        description: "Crafting intuitive and beautiful user interfaces.",
        imageUrl: "/images/uiux.webp",
    },
    {
        number: "03",
        title: "AI Integration",
        description: "Leveraging AI models to build smarter applications.",
        imageUrl: "/images/ai.webp",
    },
    {
        number: "04",
        title: "Deployment & Scaling",
        description: "Ensuring your application is fast, reliable, and scalable.",
        imageUrl: "/images/deploy.webp",
    },
];


const Services = () => {
    return (
        <section id="services" className="bg-black text-white py-24 mx-auto">
            <Container>
                <AnimatedTitle text="Services" />

                <div className="flex justify-between items-center
                        py-4 mt-12
                        border-y border-white/20
                        text-md text-white/70"
                >
                    <span>designer</span>
                    <span>develop</span>
                    <span>execute</span>
                    <span>deploy</span>
                </div>

                <div className="mt-8">
                    {services.map((service) => (
                        <ServiceItem
                            key={service.number}
                            number={service.number}
                            title={service.title}
                            description={service.description}
                            imageUrl={service.imageUrl}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;