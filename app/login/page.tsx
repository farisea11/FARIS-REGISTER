"use client";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Login berhasil");
  };

  return (
    <div className="w-full h-dvh flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-100 w-full md:w-1/2 lg:w-1/3 p-5"
      >
        <h1 className="font-bold text-2xl text-center mb-5">LOGIN</h1>

        <input
          type="text"
          placeholder="Type your username"
          className="w-full p-2 border rounded-sm"
          required
        />

        <input
          type="password"
          placeholder="Type your password"
          className="w-full p-2 border rounded-sm mt-5"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-sm mt-5"
        >
          LOGIN
        </button>

        <button
          type="button"
          className="w-full bg-blue-500 text-white p-2 rounded-sm mt-5"
        >
          REGISTER
        </button>
      </form>
    </div>
  );
}
