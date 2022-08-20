import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Foods = (props) => {
    const { strMeal, idMeal, strArea, strMealThumb} = props.foods;
    const path = useNavigate();
    const showDetails = () => {
        path(`/foodDetails/${idMeal}`)
    }
    return (
        <>
            <div className='border-8 border-double border-cyan-600 rounded-lg p-2 '>
                <img src={strMealThumb} alt="foods" className='md:w-full md:h-60 rounded-t-lg' />
                <h1>{strMeal}</h1>
                <p>Nationality: {strArea}</p>
                <div className='flex justify-around'>
                    <Link to={`/foodDetails/${idMeal}`}>Show Details</Link>
                    <button onClick={showDetails}>Go</button>
                </div>
            </div>
        </>
    );
};

export default Foods;