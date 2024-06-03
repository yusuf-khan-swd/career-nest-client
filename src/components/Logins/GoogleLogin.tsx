import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  // const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    console.log("Google Login");
    // googleLogin().then((data) => {
    //   if (data?.user?.email) {
    //     const email = data?.user?.email;
    //     const name = data?.user?.displayName;
    //     const user = { email, name };

    //     fetch("http://localhost:5000/user", {
    //       method: "POST",
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //       body: JSON.stringify(user),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         localStorage.setItem("token", data?.token);
    //       });
    //   }
    // });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
