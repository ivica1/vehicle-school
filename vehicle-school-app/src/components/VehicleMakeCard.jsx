import React from 'react';
import { observer } from "mobx-react"

function VehicleMakeCard() {

    return (
        <div className='w-[400px] h-[100px] p-3 border border-gray-400 shadow-md hover:shadow-lg rounded-[5px] flex justify-between'>
                <>

                    <div>
                        <div className='text-[20px] font-medium'></div>
                        <div className='text-[30px] uppercase text-gray-500'></div>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <button
                            className='border border-yellow-400 rounded-[4px] p-1 px-2 text-yellow-400 hover:text-white hover:bg-yellow-400 transition-all duration-500'
                        >
                            Edit
                        </button>
                        <button
                            className='border border-red-700 rounded-[4px] p-1 px-2 text-red-700 hover:text-white hover:bg-red-700 transition-all duration-500'
                        >
                            Delete
                        </button>

                    </div>
                </>
            
                <>
                    <div>
                        <input
                         type="text"
                         className="border border-gray-400 rounded-[4px] p-1 pl-2 mb-1"
                          />
                        <input
                         type="text"
                         className="border border-gray-400 rounded-[4px] p-1 pl-2"
                        />
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <button
                         className='border border-yellow-400 rounded-[4px] p-1 px-2 text-yellow-400 hover:text-white hover:bg-yellow-400 transition-all duration-500'
                         >
                            Save
                        </button>
                        <button
                            className='border border-gray-500 rounded-[4px] p-1 px-2 text-gray-500 hover:text-white hover:bg-gray-500 transition-all duration-500'
                        >Back
                        </button>
                    </div>
                </>
        </div>
    );
}

const VehicleMakeCardObserver = observer(VehicleMakeCard)

export default VehicleMakeCardObserver;