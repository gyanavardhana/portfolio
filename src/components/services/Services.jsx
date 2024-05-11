import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/devops.png'
import Image3 from '../../assets/deep-learning.png'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Web Development",
        description:
            "Ensuring that that a website meets the correct standards, and also ensuring it's well maintained",
    },
    {
        id: 2,
        image: Image2,
        title: "DevOps Practices",
        description:
            "Automating and scaling software delivery while ensuring security and monitoring",
    },
    {
        id: 3,
        image: Image3,
        title: "Machine Learning",
        description:
            "Building, maintaining, and monitoring high-quality machine learning models",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services