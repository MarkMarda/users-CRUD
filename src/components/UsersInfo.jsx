import React from 'react';

const UsersInfo = ({user, deleteUsers, setUpdateUserInfo, handleOpenForm}) => {
  
  const handleUpdateUserClick = () =>{
    setUpdateUserInfo(user);
    handleOpenForm();
  };

  return (
    <article className='user-card'>
      <h3>Name: {user.first_name}</h3>
      <h3>Last name: {user.last_name}</h3>
      <p>Email: {user.email}</p>
      <p>Birthday: {user.birthday}</p>
      <button onClick={() => deleteUsers(user.id)} className='card__btn-delete'>Delete</button>
      <button onClick={handleUpdateUserClick} className='card__btn-update'>Update</button>
    </article>
  )
}

export default UsersInfo