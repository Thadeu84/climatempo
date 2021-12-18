import axios from 'axios'

export async function getDataCity(value) {
  let result = {}
  
  try {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${"2f856c0d7ddcc1dd3b83cb6bb77fdbc3"}&lang=pt_br`)
    .then(response => {
      result = response.data;
  })
  } catch (error) {
      console.log(error);
  }
  return result;
}

export async function getForecastNextDays(value) {
  let resultForecast = {}

  try {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${"2f856c0d7ddcc1dd3b83cb6bb77fdbc3"}&lang=pt_br`)
    .then(response => {
      resultForecast = response.data;
  })
  } catch (error) {
    console.log(error);
  }
  return resultForecast;
}




