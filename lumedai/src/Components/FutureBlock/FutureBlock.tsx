import React from 'react'
import Button from '../Button/Button'

interface IFutureBlock {
    futureArrow: string,
    futureText: string,
}

const FutureBlock: React.FC<IFutureBlock> = (
    {
        futureArrow,
        futureText,
    }
) => {
    return (
        <div className='future-block' >
            <div className='future-arrow'>
                <img src={futureArrow} alt="futureArrow" />
            </div>
            <div className='container'>
                <div className='future-text'>
                    <h2>{futureText}</h2>
                </div>
                <div className='future-btns'>
                    <Button btntext="Professional" btnHoverText='Free Trial'/>
                    <Button btntext="Individual" className="future-join" btnHoverText='Join Waitlist'/>
                </div>

                <div className='mobile-image-area'>
                    <div className='specialized-image'>
                        <img src="assets/images/specialized-image1.png" alt="specialized-image1" />
                    </div>
                </div>
                    <div className='doted-img'>
                        <img src="assets/images/banner-dots.png" alt="banner-dots" />
                    </div>

            </div>
        </div>
    )
}

export default FutureBlock