import AboutContent from '@/Components/AboutContent/AboutContent'
import ContactBlock from '@/Components/ContactBlock/ContactBlock'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import WebBanner from '@/Components/WebBanner/WebBanner'
import React from 'react'

const About = () => {
    return (
        <div className='wrapper'>
            <div className='about-us'>
                <Header />
                <WebBanner title="About Us" heading="Shaping the Future of Healthcare" bannerLines="assets/images/banner-lines.png" bannerDots="assets/images/banner-dots.png" />
                <AboutContent digitalImage="assets/images/digital-image1.png" firstHeading="Our Vision" firstText="In a world rapidly advancing toward digitization, we at Lumed envision the future of healthcare deeply integrated with intelligent, adaptive systems. We see a seamless blend of data-driven precision with the human touch, where health record management is not merely about storing data but unlocking it for predictive, personalized care." secondText="
                With AI at our core, Lumed stands as a vanguard in the transformation of medical record-keeping. We're not merely enhancing existing administrative tasks; we're redefining them. Through Lumed, medical professionals attain an unmatched standard of administrative excellence, ensuring their primary focus remains unwavering on delivering exceptional patient care. Our goal is to establish the gold standard for healthcare's future, making it more accessible, anticipative, and impeccably organized." secondHeading="Our Story" textArea="We believe that technology is the most efficient means to swiftly enhance lives across the globe, and we eagerly embrace significant challenges. Lumed sprang to life from the passion of leveraging cutting-edge technology, aiming to elevate health and satisfaction at scale. We are a collective of innovators, dedicated to simplifying the complex and crafting solutions that are intuitive. Each member of our team brings a unique blend of expertise, perfectly suited for the intersection of healthcare and artificial intelligence. We aren’t just creating great products, we are on a mission to make a difference."/>
                <div className="section-email">
                    <ContactBlock />
                    <Footer
                        footerLogo="assets/images/logo.png"
                        copyRight="©Lumed 2023 All rights reserved."
                    />
                </div>
            </div>
        </div>
    )
}

export default About