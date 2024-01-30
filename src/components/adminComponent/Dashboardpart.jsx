import { useEffect, useState } from 'react';
import {fetchsCounts} from "../../../api/adminApi" // Replace with your API functions
const Dashboardadmin = () => {
  const [instructorsCount, setInstructorsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [courseCount,setCourseCount]=useState(0)
  const [ApprovedCourse, setApprovedCourse] = useState(0);
  const [ActiveInstructors,setActiveInstructors]=useState(0)
  const [ActiveStudents,setActiveStudents]=useState(0);

  useEffect(() => {
    // Fetch data for instructors count
    fetchsCounts()
      .then((res) => {
        setInstructorsCount(res?.data?.Instructorcount);
        setStudentsCount(res?.data?.studentsCount);
        setCourseCount(res?.data?.courseCount);
        setApprovedCourse(res?.data?.ApprovedcourseCount)
        setActiveInstructors(res?.data?.ActiveInstructors)
        setActiveStudents(res?.data?.ActiveStudents)
      })
      .catch((error) => {
        console.error('Error fetching instructors count:', error);
      });
    
  }, []);

  return (
    <>
 <div className='w-full h-screen'>
  
  <div className='flex flex-wrap justify-center bg-slate-700'>

  <div className="card w-full md:w-1/2 lg:w-1/4 xl:w-1/5 m-5 p-2 bg-blue-200 hover:bg-blue-300">
    {/* SVG icon for No of Students */}
    <svg className='w-10 h-auto' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="student"><path fill="#ffddcf" d="M293.495,193.813c19.429-14.499,34.51-38.827,41.552-63.706c-19.179,3.193-36.039,0.385-50.736-5.939
		c-0.53-0.229-1.061-0.458-1.581-0.697h-0.01c-0.01,0-0.01-0.01-0.021-0.01c-19.939-8.997-35.831-24.421-48.125-39.773
		c-14.78,16.069-28.79,26.741-41.77,29.684h-0.01h-0.01c-0.083,0.021-0.177,0.031-0.27,0.052c-6.75,1.456-13.178,0.822-19.304-2.257
		c3.401,30.818,20.916,64.455,45.286,82.635c11.275,8.425,24.026,13.542,37.506,13.542S282.221,202.227,293.495,193.813z"></path><path fill="#fce677" d="M218.494,231.579v-37.776c-24.369-18.181-41.885-51.817-45.286-82.635c6.126,3.079,12.554,3.713,19.304,2.257
		c0.094-0.021,0.187-0.031,0.27-0.052h0.01h0.01c12.98-2.943,26.99-13.615,41.77-29.684c12.294,15.352,28.187,30.776,48.125,39.773
		c0.01,0,0.01,0.01,0.021,0.01h0.01c0.52,0.239,1.05,0.468,1.581,0.697c14.696,6.324,31.556,9.132,50.736,5.939
		c-7.041,24.879-22.123,49.207-41.552,63.706v37.766l30.194,14.821l22.331,10.963v-0.01c-13.916-36.965-8.643-92.974,0-152.342
		c0-24.858-10.078-47.366-26.377-63.643c-15.768-15.789-37.371-25.742-61.313-26.346C257.55,15.01,256.78,15,256,15
		c-49.727,0-90.01,40.293-90.01,90.01c7.395,59.369,11.899,115.378,0,152.342l22.32-10.952L218.494,231.579z"></path><path fill="#9bc47c" d="M378.377,282.626c-1.04-6.397-5.086-11.878-10.869-14.717l-21.488-10.547L323.689,246.4l-59.961,66.597
		c-4.129,4.587-11.327,4.587-15.456,0L188.311,246.4l-22.32,10.952l-21.499,10.557c-5.783,2.839-9.829,8.321-10.869,14.717
		l-12.377,76.582h269.509L378.377,282.626z"></path><path fill="#f9d9cd" d="M293.495,193.813c-11.275,8.414-24.016,13.532-37.495,13.532s-26.231-5.117-37.506-13.542v37.776
		L188.311,246.4l59.961,66.597c4.129,4.587,11.327,4.587,15.456,0l59.961-66.597l-30.194-14.821V193.813z"></path><path fill="#988fc4" d="M410.287,359.208h-19.533H121.245h-19.533c-6.594,0-11.514,6.043-10.183,12.502l24.13,117
		c0.998,4.826,5.252,8.29,10.193,8.29h260.294c4.94,0,9.194-3.464,10.193-8.29l24.13-117
		C421.801,365.251,416.882,359.208,410.287,359.208z M256,462.459c-18.944,0-34.355-15.412-34.355-34.355
		c0-18.943,15.411-34.355,34.355-34.355c18.943,0,34.355,15.412,34.355,34.355C290.355,447.047,274.943,462.459,256,462.459z"></path><circle cx="256" cy="428.104" r="34.355" fill="#f5f5fc"></circle></svg>
          <div className="flex items-center">

    <h2 className="text-lg font-semibold mt-2">No of Students  :</h2>
    <p className="text-gray-600 pt-2 pl-1">{studentsCount}</p>
    </div>
    <div className="flex items-center">
    <h5 className="text-xs font-semibold  ">Active   :</h5>
    <p className="text-gray-600 pl-1 text-xs font-semibold">{ActiveStudents}</p>
    </div>
    <div className="flex items-center">
    <h5 className="text-xs font-semibold  ">Suspended   :</h5>
    <p className="text-gray-600 pl-1 text-xs font-semibold">{studentsCount-ActiveStudents}</p>
    </div>
  </div>

  <div className="card shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/5 m-5 p-2 bg-red-200 hover: hover:bg-red-300">
    {/* SVG icon for Number of Instructors */}
    <svg className='w-10 h-auto ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="lecturer"><path d="M62 .84H24a1 1 0 0 0-1 1V15.43a8.48 8.48 0 0 0-13 7.22V29a7.28 7.28 0 0 0 3.44 6.22l1.89 1.18a6 6 0 0 0 6.34 0l1.88-1.18A7.29 7.29 0 0 0 27 29v-.56h6.43V34a1 1 0 0 0 1.82.58l4.38-6.19H62a1 1 0 0 0 1-1V1.84A1 1 0 0 0 62 .84zM23.92 19A6.48 6.48 0 0 1 25 22.65v1.92a10.49 10.49 0 0 1-4.11-3.31A25.35 25.35 0 0 0 23.92 19zm-5.39-2.88a6.53 6.53 0 0 1 4.07 1.44A43.37 43.37 0 0 1 12 23.66v-1A6.51 6.51 0 0 1 18.53 16.14zM25 29a5.33 5.33 0 0 1-2.51 4.53l-1.88 1.17a4 4 0 0 1-4.22 0l-1.89-1.17A5.32 5.32 0 0 1 12 29V25.77a39.39 39.39 0 0 0 7.18-3.46A12.84 12.84 0 0 0 25 26.74zm36-2.56H39.14a1 1 0 0 0-.81.43l-2.87 4V27.42a1 1 0 0 0-1-1H27V22.65a8.51 8.51 0 0 0-2-5.51V2.84H61zM2 63H35.06a1 1 0 0 0 1-1V45.88A6.89 6.89 0 0 0 29.17 39H7.88A6.89 6.89 0 0 0 1 45.88V62A1 1 0 0 0 2 63zM3 45.88A4.89 4.89 0 0 1 7.88 41H29.17a4.89 4.89 0 0 1 4.89 4.88V61H29.44V52.12a1 1 0 0 0-2 0V61H9.61V52.12a1 1 0 0 0-2 0V61H3z"></path><path d="M31 8.57H48.69a1 1 0 0 0 0-2H31a1 1 0 0 0 0 2zM48.69 11.06H42.11a1 1 0 0 0 0 2h6.58a1 1 0 0 0 0-2zM31 13.06h7.27a1 1 0 0 0 0-2H31a1 1 0 0 0 0 2zM48.69 15.56H42.11a1 1 0 1 0 0 2h6.58a1 1 0 1 0 0-2zM31 17.56h7.27a1 1 0 1 0 0-2H31a1 1 0 0 0 0 2zM48.69 20.05H42.11a1 1 0 0 0 0 2h6.58a1 1 0 0 0 0-2zM31 22.05h7.27a1 1 0 0 0 0-2H31a1 1 0 0 0 0 2zM52.85 8.57h2.84a1 1 0 0 0 0-2H52.85a1 1 0 0 0 0 2zM52.85 13.06h2.84a1 1 0 0 0 0-2H52.85a1 1 0 1 0 0 2zM52.85 17.56h2.84a1 1 0 1 0 0-2H52.85a1 1 0 0 0 0 2zM52.85 22.05h2.84a1 1 0 0 0 0-2H52.85a1 1 0 0 0 0 2z"></path></svg>
    <div className="flex items-center">
    <h2 className="text-lg font-semibold mt-2">No of Instructors  :</h2>
    <p className="text-gray-600 mt-2 pl-1">{instructorsCount}</p>
    </div>
    <div className="flex items-center">
    <h5 className="text-xs font-semibold  ">Active   :</h5>
    <p className="text-gray-600 pl-1 text-xs font-semibold">{ActiveInstructors}</p>
    </div>
    <div className="flex items-center">
    <h5 className="text-xs font-semibold  ">Suspended   :</h5>
    <p className="text-gray-600 pl-1 text-xs font-semibold">{instructorsCount-ActiveInstructors}</p>
    </div>
  </div>
  

  <div className="card shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/5 m-5 p-2 bg-yellow-200  hover:bg-yellow-300">
    {/* SVG icon for No of Courses */}
    <svg className='w-10 h-auto ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="online-training"><defs><linearGradient id="a" x1="7.215" x2="120.785" y1="64" y2="64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#03bdff"></stop>
      <stop offset=".376" stop-color="#2a8cff"></stop><stop offset=".736" stop-color="#535aff"></stop></linearGradient></defs>
      <path fill="url(#a)" d="M120.78,73.357V34.519a9.654,9.654,0,0,0-9.637-9.649H99.351V12.3a6.312,6.312,0,0,0-6.3-6.3H34.953a6.312,6.312,0,0,0-6.3,6.3V24.87H16.857A9.654,9.654,0,0,0,7.22,34.519V73.357c0,.016,0,.032,0,.048s0,.032,0,.049v9.505a9.654,9.654,0,0,0,9.637,9.65H52.346L49.6,107.079h-10a12.013,12.013,0,0,0-12,12V120a2,2,0,0,0,2,2H98.4a2,2,0,0,0,2-2v-.921a12.013,12.013,0,0,0-12-12h-10l-2.742-14.47h35.489a9.654,9.654,0,0,0,9.637-9.65V73.454c0-.017,0-.032,0-.049S120.781,73.373,120.78,73.357ZM32.649,12.3a2.306,2.306,0,0,1,2.3-2.3H93.047a2.306,2.306,0,0,1,2.3,2.3V45.051a2.306,2.306,0,0,1-2.3,2.3H57.631a2,2,0,0,0-1.3.482L43.369,58.945V49.354a2,2,0,0,0-2-2H34.953a2.306,2.306,0,0,1-2.3-2.3ZM76.74,111.08H88.4A8.012,8.012,0,0,1,96.328,118H31.672a8.012,8.012,0,0,1,7.928-6.921H76.74Zm-23.065-4,2.741-14.47H71.584l2.741,14.47Zm63.105-24.12a5.65,5.65,0,0,1-5.637,5.65H16.857a5.65,5.65,0,0,1-5.637-5.65V75.405H116.78Zm0-11.554H11.22V34.519a5.649,5.649,0,0,1,5.637-5.649H28.649V45.051a6.311,6.311,0,0,0,6.3,6.3h4.416v9.619a3.046,3.046,0,0,0,2.03,2.891,3.123,3.123,0,0,0,1.064.189,3.041,3.041,0,0,0,2.209-.956l13.7-11.743H93.047a6.311,6.311,0,0,0,6.3-6.3V28.87h11.792a5.649,5.649,0,0,1,5.637,5.649ZM56.392,39.833a2,2,0,0,0,1.96.065l18.633-9.683a2,2,0,0,0,0-3.549L58.352,16.983a2,2,0,0,0-2.922,1.775V38.123A2,2,0,0,0,56.392,39.833ZM59.43,22.051l12.3,6.389-12.3,6.39Z" data-name="05 tutorial"></path></svg>
      <div className="flex items-center">
    <h2 className="text-lg font-semibold mt-2 ">No of Courses   :</h2>
    <p className="text-gray-600 pl-1 mt-2">{courseCount}</p>
    </div>

    <div className="flex items-center">
    <h5 className="text-xs font-semibold  ">Approved   :</h5>
    <p className="text-gray-600 pl-1 text-xs font-semibold">{ApprovedCourse}</p>
    </div>
    <div className="flex items-center">
    <h5 className="text-xs font-semibold  ">Pending Approval   :</h5>
    <p className="text-gray-600 pl-1 text-xs font-semibold">{courseCount-ApprovedCourse}</p>
    </div>
   
  </div>

  <div className="card shadow-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/5 m-5 p-2 bg-slate-200   hover:bg-slate-300">
    {/* SVG icon for Total Revenue */}
    <svg className='w-10 h-auto text-green-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="1 14 5 9 9 15 14 8 19 14 23 10" />
    </svg>
    <h2 className="text-lg font-semibold mt-2">Total Revenue</h2>
    <p className="text-gray-600">$5000</p>
  </div>

</div>

  
</div>


    </>
    
  );
};

export default Dashboardadmin;
