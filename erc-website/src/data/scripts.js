// contains methods for querying data
import { computed, ref } from 'vue'

/**
 * Returns an object that contains the required data, error message and the load function
 * Load function needs to be called in order to load the values into the data variable
 * If any error occurs, the message gets stored into the error variable
 * Refs are used to update the variables
 * @param {string} link contains the link to the json file
 * @returns {object}
 */
const getDataWithParams = (link) => {
  const data = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      let tempData = await fetch(link)
      if (!tempData.ok) {
        throw Error(`Couldn't find any data on the given link: ${link}`)
      }
      data.value = await tempData.json()
    } catch (err) {
      error.value = err
      // eslint-disable-next-line
      console.log(error.value.message)
    }
  }
  return { data, error, load }
}

/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// FUNCTION STILL NOT WORKING AS MENTIONED
/**
 * Function that can return data directly without returning any params like the getDataWithParams function
 * @param {string} link contains the link which contains the data
 * @param {any} defaultValue default value of the variable
 * @param {any} loadingValue value of the variable when the data is loading
 */
const getData = (link, defaultValue, loadingValue) => {
  const { data, error, load } = getDataWithParams(link)
  load()

  return computed(() => {
    try {
      return data.value
    } catch (err) {
      if (err.message.includes('null') || error.value != null) {
        // eslint-disable-next-line
        console.log(err.message)
        return loadingValue
      }
      return defaultValue
    }
  })
}
/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */

export { getData, getDataWithParams }
