import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()

    const submitHander = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
                params: {
                    rideId: props.ride._id,
                    otp: otp
                },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            if (response.status === 200) {
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
                // console.log(props.ride)
                navigate('/captain-riding', { state: { ride: props.ride } })
            }
        } catch (error) {
            const message = error.response.data.message;
            toast.error(message);
        }
    }

    return (
        <div>
            <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to Start</h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 rounded-full object-cover w-12' src="https://cdn-icons-png.flaticon.com/512/4439/4439947.png" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>{props.ride?.distance < 1000 ? `${props.ride?.distance} meters` : `${(props.ride?.distance / 1000).toFixed(2)} KM`}</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-4'>
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
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-currency-line text-2xl"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹ {props.ride?.fare} </h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-time-line text-2xl"></i>
                        <div>
                            <h3 className='text-lg font-medium'>
                                {Math.floor(props.ride?.duration / 3600)}h  {Math.floor((props.ride?.duration % 3600) / 60)}m  {props.ride?.duration % 60} s
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <form onSubmit={submitHander}>
                        <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" className='bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3' placeholder='Enter OTP' />
                        <div className='flex gap-3'>
                            <button className='w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
                            <button onClick={() => {
                                props.setConfirmRidePopupPanel(false)
                                props.setRidePopupPanel(false)

                            }} className='w-full mt-5 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp