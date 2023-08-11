import axios from "axios";

export default function Login() {
  const login = async (email: string, password: string) => {
    const result = await axios.post("http://172.20.110.45:4003/auth/login", {
      email,
      password,
    });
    console.log(result);
  };

  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <input type="text" />
      <input type="password" />
      <button>Login</button>
    </div>
  );
}
