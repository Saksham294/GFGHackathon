import React, { useEffect } from 'react'
import './DoctorsPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { findDoctors } from '../../Actions/userActions'
import DoctorCard from '../DoctorCard/DoctorCard'
import { Typography } from '@mui/material'

const DoctorsPage = () => {

    const dispatch = useDispatch();
    const {user}=useSelector(state=>state.user)
    console.log(user)
    const { doctors:docs } = useSelector(state => state.doctors)
    let doctors=[]
    console.log(doctors)
    useEffect(() => {
        dispatch(findDoctors())
    }, [dispatch])

    if (docs) {
        doctors = docs
    }

    return doctors ? (
        <div>
            <Typography sx={{
                margin: "2rem",
                textAlign: "center"
            }} variant='h1'>Doctors Page </Typography>
           <div className="doctorsContainer">
           {doctors.map((doctor) => {
                return (
                    <DoctorCard
                        doctorName={doctor.name}
                        imgUrl={doctor.imgUrl}
                        url={doctor.url}
                        city={doctor.city}
                        phone={doctor.phone}
                    />
                )
            }
            )}
           </div>
        </div>

    ) : (
        <div>
            <Typography sx={{
                margin: "2rem",
                textAlign: "center"
            }} variant='h1'>Doctors Page </Typography>
            <DoctorCard
                doctorName={'Dr. John Doe'}
            />

        </div>
    )

}

export default DoctorsPage
