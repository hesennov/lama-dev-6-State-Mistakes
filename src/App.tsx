import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(user);

  return (
    <div>
      <form>
        <input onChange={handleChange} name="name" type="text" />
        <input onChange={handleChange} name="surname" type="text" />
        <input onChange={handleChange} name="email" type="text" />
        <input onChange={handleChange} name="password" type="password" />
      </form>
    </div>
  );
};
export default App;
