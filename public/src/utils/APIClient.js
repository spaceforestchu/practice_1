import superagent from 'superagent'

export default {
  get: (endpoint, params, callback) => {
    superagent
    .get(endpoint)
    .query(params)
    .set('Accept', 'text/json')
    .end((err, response) => {
      if(err){
        callback(err, null)
        return
      }

      const resp = response.body
      if (resp.confirmation != 'success'){
        callback({message: resp.message}, null)
        return
      }

      callback(null, resp)
    })
  }
}
