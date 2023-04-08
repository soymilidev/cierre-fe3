import React, { useState } from "react";


const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  })

  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.name.length < 5) {
      setMessage("⚠️ El nombre completo debe tener al menos 5 caracteres")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setMessage("⚠️ El correo electrónico no es válido")
    } else {
      setMessage(`Gracias ${user.name}, te contactaremos cuando antes vía mail 💌`)
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button
          type="submit"
          className="submitButton">
          Enviar
        </button>
      </form>
      <h4>{message}</h4>
    </div>
  );
};

export default Form