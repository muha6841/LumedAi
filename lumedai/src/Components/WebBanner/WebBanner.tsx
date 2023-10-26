import React from 'react';
import Button from '../Button/Button';

interface IWebBanner {
    title?: string,
    heading: string,
    bannerText?: string,
    bannerDescription?: string,
    trialBtn?: string,
    joinBtn?: string,
    downArrow?: string,
    bannerLines: string,
    bannerDots: string,
    freeHoverText?: string;
    joinHoverText?: string;
}

const WebBanner: React.FC<IWebBanner> = (
    {
        title,
        heading,
        bannerText,
        bannerDescription,
        trialBtn,
        joinBtn,
        downArrow,
        bannerLines,
        bannerDots,
        freeHoverText,
        joinHoverText
    }
) => {
    return (
        <div className='web-banner'>
            <div className='container'>
                <div className='banner-content'>
                    <div className='title'>
                        <span className='banner-title'>{title}</span>
                    </div>
                    <div className='heading'>
                        <h1>{heading}</h1>
                    </div>
                    <div className='banner-para'>
                        <p>{bannerText}</p>
                        <p>{bannerDescription}</p>
                    </div>
                    <div className='banner-btns'>
                        <Button btntext={trialBtn} btnHoverText={freeHoverText}/>
                        <Button btntext={joinBtn} className='Join-btn'  btnHoverText={joinHoverText}/>
                    </div>
                </div>
            </div>
            <div className='down-arrow'>
                <img src={downArrow} alt="down-arrow" />
            </div>
            <div className='banner-lines'>
                <img src={bannerLines} alt="banner-lines" />
            </div>
            <div className='banner-dots'>
                <img src={bannerDots} alt="banner-dots" />
            </div>
        </div>
    )
}

export default WebBanner;