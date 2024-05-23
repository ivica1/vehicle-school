import React, { useState } from 'react';
import vehicleModelStore from '../stores/VehicleModelStore';
import { observer } from "mobx-react"
import { toJS } from 'mobx';

function VehicleModelCard({ model, flag, setFlag }) {

    const [editingMode, setEditingMode] = useState(false)
    const [newName, setNewName] = useState(model.name)
    const [newAbrv, setNewAbrv] = useState(model.abrv)



    const editVehicleCard = () =>{
        vehicleModelStore.editVehicleModel(model.id, newName, newAbrv)
        setEditingMode(false)
        setFlag(!flag)
    }

    return (
        <div className='w-[400px] h-[100px] p-3 border border-gray-400 shadow-md hover:shadow-lg rounded-[5px] flex justify-between' key={model.id}>
            {!editingMode &&
                <>

                    <div>
                        <div className='text-[20px] font-medium'>{model.name}</div>
                        <div className='text-[30px] uppercase text-gray-500'>{model.abrv}</div>
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <button
                            onClick={() => setEditingMode(true)}
                            className='border border-yellow-400 rounded-[4px] p-1 px-2 text-yellow-400 hover:text-white hover:bg-yellow-400 transition-all duration-500'
                        >
                            Edit
                        </button>
                        <button
                            className='border border-red-700 rounded-[4px] p-1 px-2 text-red-700 hover:text-white hover:bg-red-700 transition-all duration-500'
                            onClick={() => {
                                vehicleModelStore.deleteVehicleModel(model.id);
                                setFlag(!flag)
                            }}
                        >
                            Delete
                        </button>

                    </div>
                </>
            }

            {editingMode &&
                <>
                    <div>
                        <input
                         type="text"
                         className="border border-gray-400 rounded-[4px] p-1 pl-2 mb-1"
                         defaultValue={model.name}
                         onChange={(e)=>setNewName(e.target.value)}
                          />
                        <input
                         type="text"
                         className="border border-gray-400 rounded-[4px] p-1 pl-2"
                         defaultValue={model.abrv}
                         onChange={(e)=>setNewAbrv(e.target.value)} />
                    </div>

                    <div className='flex flex-col gap-y-2'>
                        <button
                         className='border border-yellow-400 rounded-[4px] p-1 px-2 text-yellow-400 hover:text-white hover:bg-yellow-400 transition-all duration-500'
                         onClick={editVehicleCard}
                         >
                            Save
                        </button>
                        <button
                            className='border border-gray-500 rounded-[4px] p-1 px-2 text-gray-500 hover:text-white hover:bg-gray-500 transition-all duration-500'
                            onClick={() => setEditingMode(false)}
                        >Back
                        </button>

                    </div>


                </>

            }


        </div>
    );
}

const VehicleModelCardObserver = observer(VehicleModelCard)

export default VehicleModelCardObserver;