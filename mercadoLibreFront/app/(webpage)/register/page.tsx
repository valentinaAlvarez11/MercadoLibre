import RegisterComponent from '@/components/molecules/RegisterComponent';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-sm">
      <div className="w-[350px] border border-gray-300 rounded-md p-6 shadow-sm mt-10">
        <h1 className="text-xl font-semibold mb-4">Crea tu cuenta</h1>
        <RegisterComponent />
      </div>
    </div>
  );
}
