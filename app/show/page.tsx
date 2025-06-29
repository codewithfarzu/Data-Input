'use client';
import { useData } from "../_components/DataProvider";
import Link from "next/link";

const Show = () => {
    const { state, dispatch } = useData();
    return (
        <>
            <h2 className="bg-gray-600 text-2xl text-white w-max p-3 ml-5">
                Show
            </h2>

            <div>
                {
                    state.userRecords.map((row, i) => {
                        return (
                            <div key={i} className="border p-4 w-max mt-5 ml-5 text-2xl text-center" id="box">
                                <h3>{row.name}</h3>
                                <p className="box-p1">
                                    {row.age}
                                </p>
                                <p className="box-p2">
                                    {row.email}
                                </p>
                                <button onClick={() => dispatch({ type: 'del', payload: i })} className="border px-2 mt-2 hover:bg-gray-100"> X </button>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <Link href={"/edit/"+i}>Edit</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Show;