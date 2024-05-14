import React from 'react';
import Modal from 'react-modal';


function AddVehicleMakeModal({ isOpen, setIsOpen}) {


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: "30px",
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customStyles}
        >
            <div className='mb-3'>Type in the informations of the Vehicle make you want to create</div>

            <div className='mb-3'>
                <div className='text-gray-400'> Name:</div>
                <input
                    type="text"
                    className='w-[200px] h-[50px] border border-gray-400 p-2 pl-4 rounded-[6px]'
                />
            </div>

            <div className='mb-6'>
                <div className='text-gray-400'> Abreviation:</div>
                <input
                    type="text"
                    className='w-[200px] h-[50px] border border-gray-400 p-2 pl-4 rounded-[6px]'
                />
            </div>

            <div className='w-full flex gap-x-2'>
                <button
                    className="h-[50px] grow text-white bg-gray-400 hover:bg-green-500"
                    // className={`h-[50px] grow text-white ${(!name || !abrv) ? 'bg-gray-400' : 'bg-green-400 hover:bg-green-500'}`}
                    >
                    Add
                </button>
                <button
                    className='h-[50px] grow text-white bg-red-400 hover:bg-red-500'
                >
                    Cancel
                </button>

            </div>
        </Modal>
    );
}

export default AddVehicleMakeModal;