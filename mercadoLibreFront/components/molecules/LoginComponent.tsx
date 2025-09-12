'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"

import InputComponents from "../atoms/InputComponents"

import { LoginDTO } from "@/interfaces/login"
import { loginScheme } from "@/schemas/login"

import { loginService } from "@/libs/authService"

import { standardInput } from "@/utils/Tokens"

export default function LoginComponent() {
  const [successMsg, setSuccessMsg] = useState("");

  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginScheme)
  })
  
  const onSubmit: SubmitHandler<LoginDTO> = (data) => {
    loginService(data)
      .then((info) => {
        if (info.token) {
          localStorage.setItem('token', info.token)
          setSuccessMsg("¡Iniciaste sesión con éxito!");
          console.log("TOKEN:", info.token);
        } else if (info.error) {
          setSuccessMsg("");
          alert(info.error)
        } else {
          setSuccessMsg("");
          alert('Error desconocido en login')
        }
      })
      .catch(e => {
        setSuccessMsg("");
        console.error('Error en solicitud');
        alert('Error en solicitud')
      })
  }

  const onErrors = () => {
    setSuccessMsg("");
    console.log('Errores', errors);
    alert('Informacion incompleta')
  };
  
  return (
    <>
      {successMsg && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded text-center">{successMsg}</div>
      )}
      <form onSubmit={handleSubmit(onSubmit, onErrors)} className="space-y-4">
        <div>
          <InputComponents 
            label="Introduce el correo"
            typeElement="text"
            idElement="email"
            nameRegister="email"
            register={register}
          />
        </div>
        <div>
          <InputComponents 
            label="Introduce la contraseña"
            typeElement="password"
            idElement="password"
            nameRegister="password"
            register={register}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 rounded-lg transition"
        >
          Continuar
        </button>
      </form>

    </>
  )
}
