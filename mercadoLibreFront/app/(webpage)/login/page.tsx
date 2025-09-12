import LoginComponent from '@/components/molecules/LoginComponent';

const AmazonLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-sm">
      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        alt="Amazon logo"
        className="h-8 mb-4"
      />

      {/* Card */}
      <div className="w-[350px] border border-gray-300 rounded-md p-6 shadow-sm">
        <h1 className="text-xl font-semibold mb-4">Inicia sesión o crea una cuenta</h1>

        <LoginComponent />

        <p className="text-xs text-gray-700 mt-4">
          Al continuar, aceptas las{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Condiciones de uso
          </a>{' '}
          y el{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Aviso de privacidad
          </a>{' '}
          de Amazon.
        </p>

        <div className="mt-4">
          <a href="#" className="text-blue-600 text-sm hover:underline">
            ¿Necesitas ayuda?
          </a>
        </div>

        <hr className="my-4" />

        <div>
          <p className="font-semibold mb-1">¿Comprando para el trabajo?</p>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Crear una cuenta de empresa gratis
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 space-x-6 text-xs text-gray-600">
        <a href="#" className="hover:underline">
          Condiciones de uso
        </a>
        <a href="#" className="hover:underline">
          Aviso de privacidad
        </a>
        <a href="#" className="hover:underline">
          Ayuda
        </a>
        <p className="mt-2">&copy; 1996–2025, Amazon.com, Inc. o sus filiales</p>
      </footer>
    </div>
  );
};

export default AmazonLogin;