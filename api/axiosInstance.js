// import axios from "axios";
// const baseUrl = 'http://localhost:3000';
// const studentbaseUrl = baseUrl;




// const createaxiosInstance = (baseUrl) => {
//     const instance = axios.create({
//         baseUrl,
//         timeout: 200000,
//         timeoutErrorMessage: "sorry, req has been Timed Out!! please try again"


//     })

//     return instance;
// }

// const attachToken = (req, tokenName) => {
//     let authToken = localStorage.getItem(tokenName)
//     if (authToken) {
//         req.headers.Authorization = `Bearer ${authToken}`
//     }
//     else {
//         return req;
//     }
// }

// export const studentaxiosInstance = createaxiosInstance(baseUrl);



// // student request interceptors

// studentaxiosInstance.interceptors.request.use(async (req) => {
//     const modifiedreq = attachToken(req, 'usertoken')
//     return modifiedreq;
// })
import axios from "axios";

const baseURL = 'http://localhost:3000';
const studentBaseURL = baseURL;
const instructorBaseURL = `${baseURL}/instructor`
const adminBaseURL = `${baseURL}/admin`

const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL,
    timeout: 200000,
    timeoutErrorMessage: "Request Timeout... Please try again!..",
  });
  return instance;
};



const attachToken = (req, tokenName) => {
  let authToken = localStorage.getItem(tokenName);
  if (authToken) {
    req.headers.Autherization = `Bearer ${authToken}`;
  }
  return req;
};



//user request interceptor

export const studentaxiosInstance = createAxiosInstance(baseURL);
studentaxiosInstance.interceptors.request.use(async (req) => {
  const modifiedReq = attachToken(req, "studentToken");
  return modifiedReq;
});


// instructor request interceptor

export const instructoraxiosInstance = createAxiosInstance(instructorBaseURL);
instructoraxiosInstance.interceptors.request.use(async (req) => {
  const modifiedReq = attachToken(req, "instructorToken");
  return modifiedReq;
});

// Admin request Interceptor

export const adminAxiosInstance = createAxiosInstance(adminBaseURL);
adminAxiosInstance.interceptors.request.use(async (req) => {
  const modifiedReq = attachToken(req, "adminToken");
  return modifiedReq;
})




