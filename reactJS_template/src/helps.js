import moment from 'moment'

const getDate = (milliseconds) => {
  let date = new Date(milliseconds);
  return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}

export default getDate