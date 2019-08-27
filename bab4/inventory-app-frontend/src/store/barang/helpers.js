// {
//  headers: {
//    Authorization: 'Bearer ' + token //the token is a variable which holds the token
//  }

export default function setAxiosHeaders (state) {
  let header = {
    headers: { Authorization: state.token }
  }

  return header
}
