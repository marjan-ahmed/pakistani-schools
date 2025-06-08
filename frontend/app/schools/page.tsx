'use client';

import { useState, useEffect } from "react";

interface School {
  name: string;
  email: string;
  phone: string;
  address: string;
  principal: string;
}

export default function SchoolsList() {
  const [schools, setSchools] = useState<School[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/schools")
      .then(res => res.json())
      .then(data => setSchools(data.schools))
      .catch(err => console.error("Failed to fetch schools:", err));
  }, []);

  return (
    <div>
      <h2>Registered Schools</h2>
      <ul>
        {schools.map((school, index) => (
          <li key={index}>
            {school.principal} - {school.address} - {school.name} - {school.email} - {school.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
