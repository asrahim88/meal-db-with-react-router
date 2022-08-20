import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

const FoodDetails = () => {
    const { foodId } = useParams();
    const [mealDetails, setMealDetails] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]))
    }, [foodId]);
    const { strMealThumb, strMeal, strArea, strInstructions, strSource, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6 } = mealDetails;
    return (
        <div>
            <img src={strMealThumb} className="mx-auto h-72" alt="" />
            <hr className='mt-2' />
            <div>
                <h1 className='text-center my-5 text-3xl text-cyan-700 font-bold'>All the Informations Of this Foods!!!</h1>
                <div className='grid grid-cols gap-4 md:grid-cols-2'>
                    <div className='flex items-center'>
                        <div>
                            <h1 className='text-2xl'>Name: {strMeal}</h1>
                            <p className='text-xl'>Nationality: {strArea}</p>
                            <p className='text-lg'>{strInstructions}</p>
                            <a href={strSource} target="_blank" rel="noopener noreferrer">Resources</a>
                            <br />
                            <a href={strYoutube} target="_blank" rel="noopener noreferrer">Watch Videos</a>
                        </div>
                    </div>
                    <div className='lg:ml-40'>
                        <div>
                            <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-4">
                                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Ingredients</h5>
                                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Measurement</h5>
                                </div>
                                <div className="flow-root">
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">

                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {strIngredient1}
                                                    </p>

                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {strMeasure1}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">

                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {strIngredient2}
                                                    </p>

                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {strMeasure2}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">

                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {strIngredient3}
                                                    </p>

                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {strMeasure3}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-3 sm:py-4">
                                            <div className="flex items-center space-x-4">

                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {strIngredient4}
                                                    </p>

                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {strMeasure4}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pt-3 pb-0 sm:pt-4">
                                            <div className="flex items-center space-x-4">

                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {strIngredient5}
                                                    </p>

                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {strMeasure5}
                                                </div>
                                            </div>
                                        </li>
                                        <li className="pt-3 pb-0 sm:pt-4">
                                            <div className="flex items-center space-x-4">

                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                        {strIngredient6}
                                                    </p>

                                                </div>
                                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                    {strMeasure6}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;