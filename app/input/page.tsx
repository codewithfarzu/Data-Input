'use client';
import React, { useState } from 'react';
import { useData } from '../_components/DataProvider';


const Input = () => {
    const [data, setData] = useState({ name: "", age: 0, email: "" });
    const{dispatch}=useData();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSave = () => {
        // console.log(data);

        //push Data into array in context
        dispatch({ type: 'add', payload: data });
        setData({ name: "", age: 0, email: "" });
        console.log('Record has been saved');
    }
    return (
        <>
            <h2 className="bg-gray-600 text-2xl text-white w-max p-3 ml-5">
                Input
            </h2>
            <div className="mt-10 ml-5 text-2xl">
                <label>Name :
                    <input type="text" className="m-3 outline-2 pl-3 rounded-sm" name='name' value={data.name} onChange={handleChange} /><br />
                </label>

                <label>Age :
                    <input type="text" className="m-8.5 outline-2 pl-3 rounded-sm" name='age' value={data.age} onChange={handleChange} /><br />
                </label>


                <label>Email :
                    <input type="text" className="m-4.5 outline-2 pl-3 rounded-sm" name='email' value={data.email} onChange={handleChange} /><br />
                </label>

                <input type="button" value="Save" className="bg-gray-400 pr-5 pl-5 pt-2 pb-2 outline-2 mt-10 rounded-sm" onClick={handleSave} />
            </div>
        </>
    )
};

export default Input;