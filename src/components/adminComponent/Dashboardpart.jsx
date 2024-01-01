import { useEffect, useState } from 'react';
import { fetchInstructorsCount, fetchStudentsCount} from "../../../api/adminApi" // Replace with your API functions

const Dashboardadmin = () => {
  const [instructorsCount, setInstructorsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Fetch data for instructors count
    fetchInstructorsCount()
      .then((count) => {
        setInstructorsCount(count);
      })
      .catch((error) => {
        console.error('Error fetching instructors count:', error);
      });

    // Fetch data for students count
    fetchStudentsCount()
      .then((count) => {
        setStudentsCount(count);
      })
      .catch((error) => {
        console.error('Error fetching students count:', error);
      });

    // Fetch data for total revenue
    
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 rounded-lg p-6 flex flex-col justify-center items-center space-y-2">
            <h2 className="text-xl font-semibold">Total Instructors</h2>
            <p className="text-4xl font-bold">{instructorsCount}</p>
          </div>
          <div className="bg-green-100 rounded-lg p-6 flex flex-col justify-center items-center space-y-2">
            <h2 className="text-xl font-semibold">Total Students</h2>
            <p className="text-4xl font-bold">{studentsCount}</p>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6 flex flex-col justify-center items-center space-y-2">
            <h2 className="text-xl font-semibold">Total Revenue</h2>
            <p className="text-4xl font-bold">{15000}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardadmin;
