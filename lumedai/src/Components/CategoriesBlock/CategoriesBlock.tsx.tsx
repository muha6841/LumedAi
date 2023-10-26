import React from 'react';
import CategoryArea from '../CategoryArea/CategoryArea';

interface ICategoriesBlock {
    categoryTitile: string,
    categoryHeading: string,
}

const CategoriesBlock: React.FC<ICategoriesBlock> = (
    {
        categoryTitile,
        categoryHeading,
    }
) => {
    return (
        <div className='categories-block'>
            <div className='container'>
                <div className='category-title-area'>
                    <span className='category-title'>{categoryTitile}</span>
                </div>
                <div className='category-heading'>
                    <h2>{categoryHeading}</h2>
                </div>
                <div className='categories'>
                    <CategoryArea categoryIcon="assets/images/tick-icon.svg" categoryHeading="Restoring Care Quality" categoryText="Central to Lumed is our commitment to refocusing medical attention. By reducing administrative burdens, we restore the passion for caring that drives every physician, fostering happy doctors and healthy patients." />
                    <CategoryArea categoryIcon="assets/images/money-icon.svg" categoryHeading="Affordable Excellence" categoryText="Lumed exemplifies why AI can revolutionize healthcare economics. By leveraging the precision, efficiency, and flexibility of our tools, providers can offer superior healthcare without exorbitant costs." />
                    <CategoryArea categoryIcon="assets/images/location-icon.svg" categoryHeading="Transcending Boundaries" categoryText="Lumed’s technology knows no borders. Functioning in over 20 languages, we're determined to make cutting-edge solutions universally attainable and accessible, ensuring that innovation speaks every language." />
                    <CategoryArea categoryIcon="assets/images/compliant-icon.svg" categoryHeading="Uncompromised Privacy" categoryText="Each innovation we introduce has rigorous data protection measures, ensuring that your personal information remains just that—personal. We use only anonymized, voluntary feedback to refine our services. " />
                    <CategoryArea categoryIcon="assets/images/population-icon.svg" categoryHeading="Easing the Golden Years" categoryText="Amidst a swiftly expanding elderly demographic, healthcare providers grapple with escalating demands. Lumed enables providers to center efforts on providing seniors with compassionate and effective care." />
                    <CategoryArea categoryIcon="assets/images/clock-icon.svg" categoryHeading="Novel Patient Journeys" categoryText="With Lumed, the prolonged wait times become a thing of the past. Our AI-powered solutions ensure prompt medical attention, elevating patient satisfaction and enhancing health outcomes." />
                </div>
            </div>
        </div>
    )
}

export default CategoriesBlock;