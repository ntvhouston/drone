export const apiURL = "https://react-assessment-api.herokuapp.com/api/drone"

export const fetchData = async () => {
    try {
        const res = await fetch(apiURL)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}