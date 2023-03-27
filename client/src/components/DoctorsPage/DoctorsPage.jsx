import React,{useEffect} from 'react'
import './DoctorsPage.css'
import { useDispatch,useSelector } from 'react-redux'
import { findDoctors } from '../../Actions/userActions'
import DoctorCard from '../DoctorCard/DoctorCard'
import { Typography } from '@mui/material'

const DoctorsPage = () => {
    const dispatch=useDispatch();
    const {doctors}=useSelector(state=>state.doctors)
    useEffect(()=>{
        dispatch(findDoctors())
    },[])

    return doctors?(
        
            <div>
                <Typography sx={{
                    margin:"2rem",
                    textAlign:"center"
                }} variant='h1'>Doctors Page </Typography>
                {doctors.map((doctor)=>{
                    return(
                        <DoctorCard
                        doctorName={doctor.name}
                        imgUrl={doctor.imgUrl}
                        url={doctor.url}
                        />
                    )
                }
                )}
            </div>

    ):(
        <div>
            <Typography sx={{
                margin:"2rem",
                textAlign:"center"
            }} variant='h1'>Doctors Page </Typography>
            <DoctorCard
            doctorName={'Dr. John Doe'}
            />

        </div>
    )

}

export default DoctorsPage
