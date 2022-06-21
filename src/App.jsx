import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import CardUser from './Componenst/CardUser'
import Form from './Componenst/Form'
import { useForm } from 'react-hook-form'

const URL = 'https://users-crud1.herokuapp.com/users/'

function App() {

  const {handleSubmit, register, reset} = useForm ()

  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getAllUser = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUser()
  }, [])

  const createUser = newUser => {
    axios.post(URL, newUser)
      .then(res => {
        console.log(res.data)
        getAllUser()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, updateUser) => {

    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => {
        console.log(res.data)
        getAllUser()
        setObjectUpdate()
        setIsShowForm(false)
      })
      .catch(err => console.log(err))
  }

  const showForm = () => {
    const obj = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: ""
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }

  return (
    <div className="App">
      <div className="header">
      <div className='Title_bth'>
      <span className='Title'>Usuarios</span> <button onClick={showForm} className='bth_create'>{isShowForm ? 'Hide Form' :'Create a new User'}</button>
      </div>
      </div>
      <div className='Container_form'>
        {
          isShowForm && 
          <Form className='Form'
            createUser={createUser}
            updateUserById={updateUserById}
            objectUpdate={objectUpdate}
            handleSubmit={handleSubmit}
            reset={reset}
            register={register}
          />
        }
      </div>
      <div className="Container_card">
      {
        users?.map(user => (
          <CardUser 
            key={user.id}
            user={user}
            URL={URL}
            getAllUser={getAllUser}
            setObjectUpdate={setObjectUpdate}
            setIsShowForm={setIsShowForm}
            reset={reset}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App