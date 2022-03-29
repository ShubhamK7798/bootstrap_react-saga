import React from "react";

const Table = ({ usersData }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Company</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map(({ userName, company, role },index) => {
          return (
            <tr key={index}>
              <td>{userName}</td>
              <td>{company}</td>
              <td>{role}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
