import React from 'react'

interface IDocumentationSolution {
    documentationTitle: string,
    documentationHeading: string,
    documentationImg: string,
}

const DocumentationSolution: React.FC<IDocumentationSolution> = (
    {
        documentationTitle,
        documentationHeading,
        documentationImg,
    }
) => {
    return (
        <div className='documentation-solution'>
            <div className='container'>
                <div className='documentation-details'>
                    <div className='documentation-heading'>
                        <span className='documentation-title'>{documentationTitle}</span>
                        <h2>{documentationHeading}</h2>
                    </div>
                    <div className='documentatiom-img'>
                        <img src={documentationImg} alt="documentationImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DocumentationSolution