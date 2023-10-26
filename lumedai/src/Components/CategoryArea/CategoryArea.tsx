import React from 'react';

interface ICategoryArea {
    categoryIcon: string,
    categoryHeading: string,
    categoryText: string,
}

const CategoryArea: React.FC<ICategoryArea> = (
    {
        categoryIcon,
        categoryHeading,
        categoryText,
    }
) => {
    return (
        <div className='Category-area'>
            <div className='category-icon'>
                <img src={categoryIcon} alt="categoryIcon" />
            </div>
            <div className='categories-heading'>
                <h2>{categoryHeading}</h2>
            </div>
            <div className='category-text'>
                <p>{categoryText}</p>
            </div>
        </div>
    )
}

export default CategoryArea;