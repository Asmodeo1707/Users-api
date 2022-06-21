import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({createUser, updateUserById, objectUpdate, handleSubmit, reset, register}) => {

  const defaultValuesForm = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
  }

  const submit = data => {
    if(objectUpdate !== undefined){
      updateUserById(objectUpdate.id, data)
      reset(defaultValuesForm)
    } else {
      createUser(data)
    }
    reset(defaultValuesForm)
  }

  return (
    <form onSubmit={handleSubmit(submit)} className='Form'>
        <div>
          <label htmlFor="first_name">First name </label>
          <input type="text" id='first_name' {...register('first_name')} />
        </div>
        <div>
          <label htmlFor="last-name">Last name </label>
          <input type="text" id='last-name' {...register('last_name')} />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input type="text" id='email' {...register('email')} />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input type="password" id='password' {...register('password')} />
        </div>
        <div>
          <label htmlFor="date">Birthday</label>
          <input type="date" id='date' {...register('birthday')} />
        </div>
        <button className='bth_submit'>Submit</button>
      </form>
  )
}

export default Form