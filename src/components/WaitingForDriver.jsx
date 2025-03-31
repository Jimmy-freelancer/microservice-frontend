import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div className='px-3 py-6'>
      <h5 className='w-full text-center' onClick={() => {
        props.setWaitingForDriver(false)
        props.setLocationPanel(true)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

      <div>
        <h3 className='text-2xl font-semibold my-5 px-3'>Waiting for Driver</h3>
      </div>

      <div className='flex items-center justify-between px-4'>
        {props.vehicleType == "car" &&  <img className='w-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />}
        {props.vehicleType == "moto" && <img className='w-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />}
        {props.vehicleType == "auto" && <img className='w-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />}
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>{props.ride?.captain.fullname.firstname}</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>GJ-10-Ab-{props.ride?.captain.vehicle.plate}</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill text-2xl"></i>
            <div>
              <h3 className='text-lg font-medium'>{props.ride?.pickup.split(' ')[0]}</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup.split(' ').slice(1).join(' ')}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="ri-map-pin-range-line text-2xl"></i>
            <div>
              <h3 className='text-lg font-medium'>{props.ride?.destination.split(' ')[0]}</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination.split(' ').slice(1).join(' ')}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line text-2xl"></i>
            <div>
              <h3 className='text-lg font-medium'>₹ {props.ride?.fare} </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver