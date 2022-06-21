import axios from 'axios'
import React from 'react'

const CardUser = ({user, getAllUser, URL, setObjectUpdate, setIsShowForm, reset}) => {

  const deleteUser = id => {
    axios.delete(`${URL}${id}/`)
      .then(res => {
        console.log(res.data)
        getAllUser()
      })
      .catch(err => console.log(err))
  }

  const updateUser = () => {
    setIsShowForm(true)

    const obj = {
      email: user.email,
      last_name: user.last_name,
      first_name: user.first_name,
      password: user.password,
      birthday: user.birthday_date
    }

    reset(obj)
    setObjectUpdate(user)
  }

  return (
    <article className='card'>
      <h2 className='user_card'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li><b className='card_email'>Email: </b>{user.email}</li>
        <li><b className='card_birthday'>Birthday Date: </b>{user.birthday}</li>
      </ul>
      <div className="bth">
      <button onClick={() => deleteUser(user.id)} className='bth_delete'>Trash</button>
      <button onClick={updateUser} className='bth_update'>Update</button>
      </div>
    </article>
  )
}

export default CardUser