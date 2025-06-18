import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contacts, setcontacts] = useState([]);
  const getContactsData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) setcontacts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log("from admin user delete", data);
      if (response.ok) {
        getContactsData();
        toast.success("deleted succesfully");
      } else {
        toast.error("not deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  //   return (
  //     <>
  //       <section className="admin-contacts-section">
  //         <h1>Admin Contact Data</h1>
  //         <div className="container admin-users">
  //           {contacts.map((curData, index) => {
  //             const { username, email, message, _id } = curData;
  //             return (
  //               <div key={index}>
  //                 <p>{username}</p>
  //                 <p>{email}</p>
  //                 <p>{message}</p>
  //                 <button className="btn" onClick={() => deleteContactById(_id)}>
  //                   Delete
  //                 </button>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </section>
  //     </>
  //   );

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Contacts Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>message</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.message}</td>

                    <td>
                      <button onClick={() => deleteContactById(curUser._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
