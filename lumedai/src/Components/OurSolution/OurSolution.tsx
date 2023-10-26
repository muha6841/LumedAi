import React from 'react';

interface IOurSolution {
    blockImage: string,
    solutionTitle: string,
    solutionHeading: string,
    solutionText: string,
    moreSolutionText: string,
    className?: string,
}

const OurSolution: React.FC<IOurSolution> = (
    {
        blockImage,
        solutionTitle,
        solutionHeading,
        solutionText,
        moreSolutionText,
        className,
    }
) => {
    return (
        <div className={`our-solution ${className}`}>
            <div className='image-block'>
                <img src={blockImage} alt="blockImage" />
            </div>
            <div className='solution-content'>
                <span className='solution-title'>{solutionTitle}</span>
                <div className='solution-block-heading'>
                    <h2 className='text-gradient'>{solutionHeading}</h2>
                </div>
                <div className='solution-block-text'>
                    <p>{solutionText}</p>
                    <p>{moreSolutionText}</p>
                </div>
            </div>
        </div>
    )
}

export default OurSolution;