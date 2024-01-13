import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { favouriteStatus } from '../../../api/studentApi';

const FavCourseCard = ({value}) => {
 
  return (
    <div className="course-card bg-white rounded-lg shadow-md overflow-hidden relative">
    <img
      src={value?.courseId?.thumbnail}
      alt="Course"
      className="w-full h-40 object-cover"
    />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{value?.courseId?.courseName}</h2>
      <div className="flex pt-6">
        <img
          className="w-10 h-10 p-1ring-2 ring-gray-300 dark:ring-gray-500"
          src="https://thumbs.dreamstime.com/b/teacher-icon-vector-male-person-profile-avatar-book-teaching-school-college-university-education-glyph-113754458.jpg"
          alt="Bordered avatar"
        />
        <p className="text-sm text-gray-500 mt-4">
          <b> {value?.instructorId?.name}</b>
        </p>
      </div>
    </div>
   
  </div>
  )
}

export default FavCourseCard
