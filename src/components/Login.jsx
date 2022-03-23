import { useState } from "react";
import axios from "axios"

export const Login = () => {
    const [user, setUser] = useState({
        name: ""
    })

    const handleChange = (e) => {
      console.log(e.target.value)
        const {className, value} = e.target;
        setUser({
            ...user,
            [className]:value,
        })
        console.log(user)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/login", user).then(() => {
            console.log("Done")
        })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type = "text" value={user.name} onChange={handleChange} className="name" placeholder="enter username" />
                <input type = "password" placeholder="enter password" />
                <input type = "submit" value = "Login" />
            </form>

        </div>
    )
}