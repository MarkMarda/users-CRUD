import axios from 'axios';
import { useEffect, useState } from 'react';
import UsersForm from './components/UsersForm';
import UsersInfo from './components/UsersInfo';
import './Users.css';

function Users() {
  const [users, setUsers] = useState();

  const [updateUserInfo, setUpdateUserInfo] = useState();

  const [openForm, setOpenForm] = useState(false);
  
  const getUsers = () => {
    const URL = "https://users-crud1.herokuapp.com/users/";

    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err =>(console.log(err)))
  };

  useEffect(() => {
    getUsers();
  }, []);

  const createUsers = (data) => {
    const URL = "https://users-crud1.herokuapp.com/users/";

    axios.post(URL, data)
      .then(res => {
        console.log(res.data);
        getUsers(); //Updating information
      })
      .catch(err => console.log(err))
  };

  const deleteUsers = (id) => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`;

    axios.delete(URL)
      .then(res => {
        console.log(res.data);
        getUsers();
      })
      .catch(err => console.log(err))
  };

  const updateUsers = (data) => {
    const URL = `https://users-crud1.herokuapp.com/users/${updateUserInfo.id}/`;

    axios.patch(URL, data)
      .then(res => {
        console.log(res.data);
        getUsers();
      })
      .catch(err => console.log(err))
  };

  const handleOpenForm = () => setOpenForm(true);
  
  
  const handleCloseForm = () => setOpenForm();
  
  return (
    <div>
      <header className='users__header'>
        <h1 className='users__header-title'>Users CRUD</h1>
        <button className='users__btn-close-form' onClick={handleOpenForm}>Open form</button>
      </header>
      <div className={openForm ? "form-container" : "form-none"}>
        <UsersForm 
          createUsers={createUsers} 
          updateUserInfo={updateUserInfo}
          updateUsers={updateUsers}
          setUpdateUserInfo={setUpdateUserInfo}
          handleCloseForm={handleCloseForm}
        />
      </div>
      <div className='user-container'>
        {
          users?.map((user) => (
            <UsersInfo 
              key={user.id} 
              user={user} 
              deleteUsers={deleteUsers}
              setUpdateUserInfo={setUpdateUserInfo}
              handleOpenForm={handleOpenForm}
              />
          ))
        }
      </div>
    </div>
  )
}

export default Users