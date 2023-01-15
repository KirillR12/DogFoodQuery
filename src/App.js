import './App.css'
import React, {useState, useEffect} from 'react'
import products from './assets/data.json'
import { Footer } from './components/Footer/footer'
import { Header } from './components/Header/header'
import { Catalog } from './components/Pages/Catalog'
import { Home } from './components/Pages/Home'
import { Modal } from './components/Modal/Modal'
import { Api } from './Api.js'



const Dog = []

function App()  {
 const [user, setUser] = useState(localStorage.getItem("kirill"))
 const [modalActive, setModalActive] = useState(false)
 const [token, setToken] = useState(localStorage.getItem("token8"))
 const [api, setApi] = useState(new Api(token))
  
 useEffect (() => {
  console.log("Hello")
  console.log(token)
  if (token) {
  }
 }, [])

useEffect (() => {
  if (!user) {
    localStorage.removeItem("token8")
    setToken(null)
  }
}, [user])

 useEffect (() => {
  console.log("Change token")
  setApi(new Api(token))
  setUser(localStorage.getItem("kirill"))
 }, [token])

 useEffect (() => {
  if (token) {
  }
 }, [api])
 
 return (
    <>
    <div className="container">
    <Header 
    user={user} 
    setUser={setUser} 
    products={products} 
    setModalActive={setModalActive}
    />
    <main>
{user ? <Catalog data={products}/> : <Home data={Dog}/>}
    </main>
    <Footer />
    </div>
    <Modal isActive={modalActive} 
    setState={setModalActive}
    api={api}
    setToken={setToken}
    />
    </>
  );
}

export default App;
