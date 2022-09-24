const axios = require("axios").default

export async function getFleetData() {
  const url = "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"

  // axios
  let fleetData = await axios.get(url).then(
    (response) => {
      return response.data
    },
    (error) => {
      console.log(error)
    }
  )

  return fleetData
}

export default getFleetData
