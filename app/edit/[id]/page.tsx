'use client';

import React, { useState } from "react";
import { useData } from "@/app/_components/DataProvider";

const Edit = ({ params }: { params: Promise<{ id: number }> }) => {
    const { id } = React.use(params);
    const { state, dispatch } = useData();

    const [data, setData] = useState(state.userRecords[id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleUpdate = () => {
        dispatch({type:"update", payload:{index:id,data:data}});
        setData({ name: "", age: 0, email: "" });
        console.log('Data has been Updated');
    }
    
    if (state.userRecords[id]) {
        console.log(state.userRecords[id]);
    }
    else {
        console.log('No');
        return <h2>No Data Record for Edit</h2>
    }


    return (
        <>
            {/* <h2>Edit Records of having id={id}</h2> */}

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

                <input type="button" value="Update" className="bg-gray-400 pr-5 pl-5 pt-2 pb-2 outline-2 mt-10 mr-5 rounded-sm" onClick={handleUpdate} />
                <input type="button" value="Cancel" className="bg-gray-400 pr-5 pl-5 pt-2 pb-2 outline-2 mt-10 ml-5 rounded-sm" onClick={handleUpdate} />
            </div>
        </>
    );
}

export default Edit;