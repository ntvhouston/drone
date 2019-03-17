import { toast } from "react-toastify"

const apiURL = "https://react-assessment-api.herokuapp.com/api/"
const droneAPIUrl = apiURL + "drone"
const weatherLocationURL = apiURL + "weather/location/search/?lattlong="
const weatherDataAPIURL = apiURL + "weather/location/"


export const fetchData = async () => {
    try {
        const res1 = await fetch(droneAPIUrl)
        const data1 = await res1.json()

        const lat = data1.data[data1.data.length - 1].latitude
        const lng = data1.data[data1.data.length - 1].longitude

        const res2 = await fetch(weatherLocationURL + lat + "," + lng)
        const data2 = await res2.json()

        const wid = data2[data2.length - 1].woeid

        const res3 = await fetch(weatherDataAPIURL + wid)
        const data3 = await res3.json()

        const data = {
            data1, data2, data3
        }
        
        return data

    } catch (error) {
        const err = error.message + " - Retrying..."
        toast.error(err, {
            position: toast.POSITION.BOTTOM_RIGHT
          })
        return []
    }
}