import React, { useState, useEffect } from 'react';

function CoachesList() {
  const [data_event, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/coaches");
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const jsonData = await res.json();
        setData(jsonData);
        // Move the log statement here
      } catch (error) {
        console.error(error);
        // Handle error, e.g., display an error message
      }
    };

    fetchData();
  }, []);
  
  // Return the array of 
  
   return data_event;
}

export default CoachesList;
