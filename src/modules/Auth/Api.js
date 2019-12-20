import request from './../req'

export const getTokenRequest = (value) => (request.post('company_api/oauth/token', value));
