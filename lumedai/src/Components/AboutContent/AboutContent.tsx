import React from 'react';

interface IAboutContent {
    digitalImage: string,
    firstHeading: string,
    firstText?: string,
    secondText?: string,
    secondHeading: string,
    textArea: string,
    secondtextArea?: string,
}

const AboutContent: React.FC<IAboutContent> = (
    {
        digitalImage,
        firstHeading,
        firstText,
        secondText,
        secondHeading,
        textArea,
        secondtextArea,
    }
) => {
    return (
        <div className='about-content'>
            <div className='container'>
                <div className='two-cols'>
                    <div className='col'>
                        <div className='content-area'>
                            <div className='heading'>
                                <h2>{firstHeading}</h2>
                            </div>
                            <p>{firstText}</p>
                            <p>{secondText}</p>
                        </div>
                        <div className='digital-image'>
                            <img src={digitalImage} alt="digital-image1" />
                        </div>
                        <div className='content-area'>
                            <div className='heading'>
                                <h2>{secondHeading}</h2>
                            </div>
                            <p>{textArea}</p>
                            <p>{secondtextArea}</p>
                        </div>
                    </div>
                    <div className='col'>
                        <img src={digitalImage} alt="digital-image1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent