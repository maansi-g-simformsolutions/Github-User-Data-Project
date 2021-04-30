import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const USEeffectAPI = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      console.log("error occured");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="title">✦ 𝐿𝒾𝓈𝓉 🅾🅵 ... 𝒢𝒾𝓉𝒽𝓊𝒷 𝒰𝓈𝑒𝓇𝓈 ✦</h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((user) => {
            return (
              <div className="container d-flex justify-content-center">
                <div className="card p-3">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={user.avatar_url}
                        className="rounded"
                        alt="random"
                        width="155"
                      />{" "}
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className=" mt-0">
                        {user.login} <FaGithub />
                      </h4>{" "}
                      <span>{user.type}</span>
                      <div className="p-2 mt-4 bg-primary d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          {" "}
                          <span className="articles">User-ID</span>{" "}
                          <span className="number1">{user.id}</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          {" "}
                          <span className="followers">followers</span>{" "}
                          <span className="number2">980</span>{" "}
                        </div>
                        <div className="d-flex flex-column">
                          {" "}
                          <span className="rating">Rating</span>{" "}
                          <span className="number3">30</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default USEeffectAPI;
