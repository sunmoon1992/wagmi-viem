import axios from 'axios'

export const test = async () => {
  const response = await axios.post('https://api.twitter.com/oauth/request_token', {
    oauth_callback: 'http%3A%2F%2Flocalhost%2Fsign-in-with-twitter%2F'
  })
  console.info(response)
  return response
}
