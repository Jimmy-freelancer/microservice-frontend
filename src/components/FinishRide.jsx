import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const FinishRide = (props) => {

    const navigate = useNavigate()


    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            ride : props.ride
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }

    }

    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Finish this Ride</h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 rounded-full object-cover w-12' src="https://cdn-icons-png.flaticon.com/512/4439/4439947.png" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>{props.ride?.distance < 1000 ? `${props.ride?.distance} meters` : `${(props.ride?.distance / 1000).toFixed(2)} KM`}</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill text-2xl"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.ride?.pickup?.split(' ')[0]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup?.split(' ').slice(1).join(' ')}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-fill text-2xl"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.ride?.destination?.split(' ')[0]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination?.split(' ').slice(1).join(' ')}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line text-2xl"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹ {props.ride?.fare} </h3>
                        </div>
                    </div>
                </div>

                <div className='mt-10 w-full'>

                    <button
                        onClick={endRide}
                        className='w-full mt-5 flex  text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>
                        Finish Ride
                    </button>

                </div>
            </div>
        </div>
    )
}

export default FinishRide