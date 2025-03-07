import axios from 'axios'

const url = import.meta.env.VITE_REST_URL

/*-------------------- Login User ----------------------------*/
export const loginUser = async (formData: Object) => {
  try {
    const res = await axios.post(`${url}/auth/login`, formData, { withCredentials: true })
    if (res.status == 200) return res
  } catch (error) {
    return error
  }
}

/*-------------------- Register User --------------*/
export const registerUser = async (formData: Object) => {
  try {
    const res = await axios.post(`${url}/auth/register`, formData, { withCredentials: true })
    return res
  } catch (error) {
    return error
  }
}

/*-------------------- Logout User ---------------------------*/
export const logoutUser = async () => {
  try {
    const res = await axios.get(`${url}/dashboard/user/logout`, { withCredentials: true })
    if (res.status == 200) return res
  } catch (error) {
    return error
  }
}

/*-------------------- Verify User With Cookies --------------*/
export const getUser = async () => {
  try {
    const res = await axios.get(`${url}/auth/validate-token`, { withCredentials: true })
    return res
  } catch (error) {
    return error
  }
}
