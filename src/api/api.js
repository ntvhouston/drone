import { toast } from "react-toastify"

export const apiURL = "https://react-assessment-api.herokuapp.com/api/drone"

export const fetchData = async () => {
    try {
        const res = await fetch(apiURL)
        const data = await res.json()
        return data
    } catch (error) {
        const err = error.message + " - Retrying..."
        toast.error(err, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        return []
    }
}