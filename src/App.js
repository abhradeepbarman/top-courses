import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {filterData, apiUrl} from "./data"
import {toast} from "react-toastify"

const App = () => {

  let [courses, setCourses] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();

        //save data into a variable
        setCourses(output.data);
      }
      catch(err) {
        toast.error("Something went wrong!");
      }
    }

    fetchData();
  }, [])

  return (
    <>
      <Navbar />
      <Filter filterData={filterData} />
      <Cards courses={courses} />
    </>
  )
};

export default App;
