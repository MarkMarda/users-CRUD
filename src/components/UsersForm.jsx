import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""
};

const UsersForm = ({createUsers, updateUserInfo, updateUsers, setUpdateUserInfo, handleCloseForm}) => {
  const {register, handleSubmit, reset} = useForm();
  
  useEffect(() => {
    if(updateUserInfo) {
      reset(updateUserInfo);
    }
  }, [updateUserInfo]);
  
  const submit = (data) => {
    if(updateUserInfo) {
      updateUsers(data);
      setUpdateUserInfo();
    } else {
      createUsers(data);
    }
    reset(defaultValues);
    handleCloseForm();
  };

  return (
    <form onSubmit={handleSubmit(submit)} className='form'>
      <button onClick={handleCloseForm} className='form__btn-close'><FontAwesomeIcon icon={faSquareXmark} /></button>
      <h2>{updateUserInfo ? "Update user information" : "Create new user"}</h2>
      <ul>
        <li>
          <label htmlFor="first_name">Firs name: </label>
          <input {...register("first_name")} id="first_name" type="text" placeholder='First name'/>
        </li>
        <li>
          <label htmlFor="last_name">Last name: </label>
          <input {...register("last_name")} id="last_name" type="text" placeholder='Last name'/>
        </li>
        <li>
          <label htmlFor="email">Email: </label>
          <input {...register("email")} id="email" type="email" placeholder='Email'/>
        </li>
        <li>
          <label htmlFor="password">Password: </label>
          <input {...register("password")} id="password" type="text" placeholder='Password'/>
        </li>
        <li>
          <label htmlFor="birthday">Birthday: </label>
          <input {...register("birthday")} id="birthday" type="text" placeholder='YYYY-MM-DD'/>
        </li>
      </ul>
      <button className='form__btn'>{updateUserInfo ? "Update" : "Create"}</button>
    </form>
  )
}

export default UsersForm