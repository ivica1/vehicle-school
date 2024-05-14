import React from 'react';
import { observer } from "mobx-react"
import { useNavigate } from 'react-router-dom';

function VehicleMakePage() {

    const navigate = useNavigate()

    return (
        <div className='w-full max-w-[1400px] mx-auto mt-10'>
            <div className='flex justify-between mr-10'>
                <div className='text-[35px] font-semibold ml-10'>
                    This is our Vehicle Brands collection</div>

                <button
                    className='w-[300px] h-[50px] rounded-[8px] text-[25px] uppercase bg-[#C02A1B] hover:bg-[#843333] text-white'
                    onClick={() => navigate('/vehicle-models')}>
                    Go to Vehicle Models
                </button>
            </div>

            <div className='mt-10  text-[25px] font-semibold ml-10 uppercase text-gray-600 underline'>
                We currently have 3  brands
            </div>

            <div
                className='mb-10 ml-10 mt-4 p-2 py-3 border border-green-400 text-green-400 w-[250px] rounded-[6px] cursor-pointer hover:text-white hover:bg-green-400 transition-all duration-500'
            >
                + Add new
            </div>

            <div className='flex gap-x-5'>
                <div>
                    <div className='ml-10 mt-2'>Type in Vehicle Make:</div>
                    <input
                        type="text"
                        className='w-[250px] h-[50px] border border-gray-400 rounded-[4px] ml-10 mt-2 pl-4'
                    />
                </div>
                <div>
                    <div className='mt-2'>
                        <div className='mb-2'>Sort by</div>
                        <select name="" id="" className='w-[250px] h-[50px] border border-gray-400 rounded-[4px]'>
                            <option hidden >Select Sorting parameter</option>
                            <option value="1">Name</option>
                            <option value="2">Abreviation</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='mt-10 ml-10 flex flex-col gap-y-5'>


            </div>

            <div className='mt-10 ml-10 flex flex-col gap-y-5'>
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
                </div>
            </div>
        </div>
    );
}
const VehicleMakePageObserver = observer(VehicleMakePage)
export default VehicleMakePageObserver;