import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    const getInputText = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    return (
        <div className='mt-12'>
            <h1 className='md:text-3xl text-xl text-center'>Search your favorites foods!!!</h1>

            <form className='md:w-5/12 md:mx-auto mt-5' >
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type='text' className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required="" onChange={getInputText} />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            <h1 className='text-center mb-10 mt-5'>Total Result found: {meals.length}</h1>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    meals.map(foods => <Foods foods={foods} key={foods.idMeal}></Foods>)
                }
            </div>
        </div>
    );
};

export default Home;