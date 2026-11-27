import { useState } from "react";

function AdminPage() {
  const users = [
    {
      id: "1",
      username: "Bob",
      role: "normal user",
      blocked: false,
    },
    {
      id: "2",
      username: "Magix",
      role: "DM",
      blocked: false,
    },
    {
      id: "3",
      username: "Lorax",
      role: "normal user",
      blocked: true,
    },
    {
      id: "4",
      username: "Gill",
      role: "normal user",
      blocked: false,
    },
    {
      id: "5",
      username: "05",
      role: "normal user",
      blocked: false,
    },
  ];

  const [userData, setUserData] = useState(users);
  const [isEditRoleOpen, setIsEditRoleOpen] = useState("");

  function setRole(userId, changes) {
    setUserData((prevUsers) => prevUsers.map((user) => (user.id === userId ? { ...user, ...changes } : user)));
  }

  function toggleBlockUser(userId) {
    setUserData((prevUsers) => prevUsers.map((user) => (user.id === userId ? { ...user, blocked: !user.blocked } : user)));
  }

  return (
    <main>
      <header className="bg-main-200 lg:sticky  flex items-center justify-end px-4 lg:px-16 py-4   lg:w-full   lg:top-0  lg:left-0  lg:z-10 ">
        <button className="bg-main-300 text-light-100 px-5 py-1 rounded-2xl hover:bg-light-100 border border-main-300 hover:text-main-300 cursor-pointer">Log out</button>
      </header>
      <main className="my-10">
        <h1 className="text-center">Users</h1>
        <div className="mx-auto w-1/2 rounded-xl overflow-hidden border border-main-200">
          <table className="mx-auto w-full">
            <thead className="bg-main-200 text-main-400 text-left">
              <tr className="flex w-full">
                <th className="grow px-4 py-1">Username</th>
                <th className="w-40 px-4 py-1">Role</th>
                <th className="w-40 px-4 py-1"></th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id} className={`flex ${user.blocked ? "bg-light-200" : "bg-light-100"}`}>
                  <tb className="grow px-4 py-1">{user.username}</tb>
                  <tb className="w-40 px-4 py-1">
                    <button className="cursor-pointer" onClick={() => setIsEditRoleOpen(user.id)}>
                      {user.role}
                    </button>
                    {isEditRoleOpen === user.id && (
                      <div className=" text-right mr-2 z-50  w-40 rounded-lg border-2 bg-light-100 p-3 shadow-lg">
                        <div className="flex justify-items-start ">
                          <button className="cursor-pointer" type="button" onClick={() => setIsEditRoleOpen(false)} aria-label="Close menu">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5 text-dark-100" aria-hidden="true">
                              <path
                                fill="currentColor"
                                d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                              />
                            </svg>
                          </button>
                        </div>

                        <ul className="flex flex-col gap-2 ">
                          <li>
                            <button
                              className="cursor-pointer underline"
                              type="button"
                              onClick={() => {
                                setRole(user.id, { role: "normal user" });
                                setIsEditRoleOpen("");
                              }}
                            >
                              Normal user
                            </button>
                          </li>

                          <li>
                            <button
                              className="cursor-pointer underline"
                              type="button"
                              onClick={() => {
                                setRole(user.id, { role: "DM" });
                                setIsEditRoleOpen("");
                              }}
                            >
                              DM
                            </button>
                          </li>

                          <li>
                            <button
                              className="cursor-pointer underline"
                              type="button"
                              onClick={() => {
                                setRole(user.id, { role: "admin" });
                                setIsEditRoleOpen("");
                              }}
                            >
                              Admin
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </tb>
                  <tb className="w-40 px-4 py-1">
                    <button className="cursor-pointer" onClick={() => toggleBlockUser(user.id)}>
                      {user.blocked ? "Unblock" : "Block"}
                    </button>
                  </tb>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </main>
  );
}
export default AdminPage;
