"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { standardInput } from "@/utils/Tokens"

type RegisterForm = {
	email: string
	telefono: string
	nombre: string
	contraseña: string
}

export default function RegisterComponent() {
	const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>()

	const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
		try {
			// Enviar tanto 'contraseña' como 'password' en el body
			const body = { ...data, password: data.contraseña };
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			})
			const result = await res.json()
			if (res.ok) {
				alert(result.mensaje || "Registro exitoso")
			} else {
				alert(result.error || "Error en el registro")
			}
		} catch (e) {
			alert("Error de conexión")
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div>
				<label className="font-semibold" htmlFor="email">Correo electrónico</label>
				<input id="email" type="email" className={standardInput} {...register("email", { required: true })} />
				{errors.email && <span className="text-red-500 text-xs">Campo requerido</span>}
			</div>
			<div>
				<label className="font-semibold" htmlFor="telefono">Teléfono</label>
				<input id="telefono" type="text" className={standardInput} {...register("telefono", { required: true })} />
				{errors.telefono && <span className="text-red-500 text-xs">Campo requerido</span>}
			</div>
			<div>
				<label className="font-semibold" htmlFor="nombre">Nombre</label>
				<input id="nombre" type="text" className={standardInput} {...register("nombre", { required: true })} />
				{errors.nombre && <span className="text-red-500 text-xs">Campo requerido</span>}
			</div>
			<div>
				<label className="font-semibold" htmlFor="contraseña">Contraseña</label>
				<input id="contraseña" type="password" className={standardInput} {...register("contraseña", { required: true })} />
				{errors.contraseña && <span className="text-red-500 text-xs">Campo requerido</span>}
			</div>
			<button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-medium py-2 rounded-lg transition">Registrarse</button>
		</form>
	)
}
