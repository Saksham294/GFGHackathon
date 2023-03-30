import axios from 'axios'


export const loginUser=(email,password)=>async (dispatch )=>{
    try {

        dispatch({
            type:"loginRequest"
        })

        const {data}=await axios.post("/api/login",{email,password},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        
        dispatch({
            type:"loginSuccess",
            payload:data.user,
        })
        
    } catch (error) {

        dispatch({
            type:"loginFailure",
            payload: error.response.data.message,
        })
    }
}
export const registerUser = (name, email, password,city,avatar) => async (dispatch) => {
    try {
      dispatch({
        type: "registerRequest",
      });

      const { data } = await axios.post(
        "/api/register",
        { name, email, password, city,avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "registerSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "registerFailure",
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "loadUserRequest",
      });
  
      const { data } = await axios.get("/api/me");
  
      dispatch({
        type: "loadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "loadUserFailure",
        payload: error.response.data.message,
      });
    }
  };

export const logoutUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "logoutUserRequest",
      });
  
      await axios.get("/api/logout");
  
      dispatch({
        type: "logoutUserSuccess",

      });
    } catch (error) {
      dispatch({
        type: "logoutUserFailure",
        payload: error.response.data.message,
      });
    }
  };


export const findDoctors = () => async (dispatch) => {
  try {
      dispatch({
          type:"findDoctorsRequest"
      })

      const {data}=await axios.get("/api/doctors")

      dispatch({
          type:"findDoctorsSuccess",
          payload:data.doctors
      })
      console.log(data.doctors)

  } catch (error) {
      dispatch({
          type:"findDoctorsFailure",
          payload:error.response.data.message
      })
    
  }
}

export const getDoctorProfile = (id) => async (dispatch) => {
  try {
    dispatch({
        type:"getDoctorProfileRequest"
    })

    const {data}=await axios.get("/api/doctors/"+id)

    dispatch({
        type:"getDoctorProfileSuccess",
        payload:data.doctor
    })
} catch (error) {
    dispatch({
        type:"getDoctorProfileFailure",
        payload:error.response.data.message
    })
  
}
}

export const registerDoctor = (name, email, password,phone,city,avatar) => async (dispatch) => {
  try {
    dispatch({
      type: "doctorRegisterRequest",
    });

    const { data } = await axios.post(
      "/api/doctor/register",
      { name
      , email
      , password
      ,phone
      ,city
      ,avatar
     
    },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    dispatch({
      type: "doctorRegisterSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "doctorRegisterFailure",
      payload: error.response.data.message,
    });
  }
};

export const loginDoctor = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "doctorLoginRequest",
    });

    const { data } = await axios.post(
      "/api/doctor/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "doctorLoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    console.log(error)
    dispatch({
      type: "doctorLoginFailure",
      payload: error.response.data.message,
    });
  }
}

export const loadDoctor = () => async (dispatch) => {
  try {
    dispatch({
      type: "doctorLoadUserRequest",
    });

    const { data } = await axios.get("/api/doctor/me");

    dispatch({
      type: "doctorLoadUserSuccess",
      payload: data.doctor,
    });
  } catch (error) {
    dispatch({
      type: "doctorLoadUserFailure",
      payload: error.response.data.message,
    });
  }
}

export const logoutDoctor = () => async (dispatch) => {
  try {
    dispatch({
      type: "doctorLogoutUserRequest",
    });

    await axios.get("/api/doctor/logout");

    dispatch({
      type: "doctorLogoutUserSuccess",

    });
  } catch (error) {
    dispatch({
      type: "doctorLogoutUserFailure",
      payload: error.response.data.message,
    });
  }
}