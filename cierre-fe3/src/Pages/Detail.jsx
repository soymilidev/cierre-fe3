import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
  const [dentistDetail, setDentistDetail] = useState({});
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDentistDetail(data))
  }, [url]);

  return (
    <div className="box-container">
      <h1>Detail Dentist id</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentistDetail.name}</td>
            <td>{dentistDetail.email}</td>
            <td>{dentistDetail.phone}</td>
            <td>{dentistDetail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Detail