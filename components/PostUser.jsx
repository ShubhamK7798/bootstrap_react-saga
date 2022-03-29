import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers, postUsersData } from "../redux/users/userAction";

const PostUser = () => {
  const dispatch = useDispatch();

  const initialVal = {
    userName: "",
    company: "",
    role: "",
  };
  const [userPostData, setUserPostData] = useState(initialVal);

  const handlePostUser = (e) => {
    e.preventDefault();
    dispatch(postUsersData(userPostData));
    setUserPostData(initialVal)
    dispatch(getUsers())
  };

  const handleForm = (e) => {
    setUserPostData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form onSubmit={handlePostUser}>
      <div className="mb-3 row">
        <label htmlFor="userName" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={userPostData.userName}
            onChange={handleForm}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="company" className="col-sm-2 col-form-label">
          Company
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            value={userPostData.company}
            onChange={handleForm}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="role" className="col-sm-2 col-form-label">
          Role
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value={userPostData.role}
            onChange={handleForm}
          />
        </div>
      </div>
      <button className="btn  btn-outline-primary" type="submit">Submit</button>
    </form>
  );
};

export default PostUser;
