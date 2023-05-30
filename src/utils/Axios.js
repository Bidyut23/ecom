// import axios from 'axios';
// //import { getData} from "./AsyncStorage";
// import {Buffer} from "buffer";
// const axiosBaseUrl = "https://ecom.loca.lt"
// const axiosInstance = axios.create({
//   baseURL: axiosBaseUrl,
//   timeout: 60000,
//   withCredentials: false, // set it to true for cookies
// });

// // export const setCsrfHeader = (token) => {
// //   axiosInstance.defaults.headers.common['XSRF-TOKEN'] = token;
// // };
// const token = "arif1234@gmail.com:zxcv12345";
// const encodedToken = Buffer.from(token).toString('base64');

// class HTTPService {
// //   constructor() {
// //     this.lastGetSession = false;
// //   }

//   invokeApi = (request, callback) => {
//     const config = {
//       method: request.method,
//       url: request.url,
//     };
//     if (request.data !== undefined) {
//       config.data = request.data;
//     }
//     if (request.params !== undefined) {
//       config.params = request.params;
//     }
//     if (request.headers !== undefined) {
//       config.headers = request.headers;
//     } else {
//       config.headers = {
//         'Content-Type': 'application/json',
//         'Authorization':'Basic ' + encodedToken
//       };
//     }
//     if (request.responseType) {
//       config.responseType = request.responseType;
//     }
//     if (this.lastGetSession && config.url === '/api/session') return;
//     axiosInstance.request(config)
//       .then((res) => {
//         callback(true, res.data);
//       })
//       .catch((err) => {
//         callback(false, err.response);
//       });
//   }

//   // same as invokeApi but returns a promise instead of accepting callback
//   invoke = (method, url, data, params, headers, responseType) => new Promise((resolve, reject) => {
//     this.invokeApi({
//       method, url, data, params, headers, responseType,
//     }, (isSuccess, response) => isSuccess ? resolve(response) : reject(response));
//   })
// }

// const HTTP = new HTTPService();

// axiosInstance.interceptors.request.use(async function (config) {
//   // Do something before request is sent
//   // If the header does not contain the token and the url not public, redirect to login
// //   var accessToken;
//   if (config && config.headers) {
//     config.headers['Authorization'] = 'Basic ' + encodedToken;
//   } else {
//     config.headers = { 'Authorization': 'Basic ' + encodedToken }
//   }
//   return config;
// });

// export default HTTP;