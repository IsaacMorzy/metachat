import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>I am Login</h1>

      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Logo */}
        <Image
          className="object-cover rounded-full"
          src="https://avatars.dicebear.com/api/adventurer/yokdalur-custom-seed.svg"
          height={200}
          width={200}
        />

        {/* Logo Button */}
        <button
          onClick={() => authenticate()}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login To the Metaverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
        {/* Login Form */}
      </div>
    </div>
  );
}

export default Login;
