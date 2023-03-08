import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Table1() {
  const [data, setData] = useState([]);

  function init() {
    axios.get("http://localhost:8080/findall")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteData = (perId) => {
    axios.delete(`http://localhost:8080/delete${perId}`)
      .then((response) => {
        const newdata = data.filter((item) => item.perId !== perId);
        setData(newdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateData = (perId, newData) => {
    axios.put(`http://localhost:8080/updatedata`, newData)
      .then((response) => {
        const newdata = data.map((item) => {
          if (item.perId === perId) {
            return { ...item, ...newData };
          }
          return item;
        });
        setData(newdata);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>perId</th>
          <th>perfumebrands</th>
          <th>perfumeedition</th>
          <th>available</th>
          <th>price</th>
          <th>perfumeflavours</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user) => (
          <tr key={user.perId}>
            <td>{user.perId}</td>
            <td>{user.perfumebrands}</td>
            <td>{user.perfumeedition}</td>
            <td>{user.available}</td>
            <td>{user.price}</td>
            <td>{user.perfumeflavours}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => deleteData(user.perId)}
              >
                Delete
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  const newData = prompt("Enter new data:");
                  if (newData) {
                    updateData(user.perId, { perfumebrands: newData });
                  }
                }}
              >
                Update
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
