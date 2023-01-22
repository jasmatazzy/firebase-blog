import React from 'react'
import './Header.css'
import { FaHome } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

function Header() {

    const categories = ["Health", "Food", "Travel", "Technology"]
    const [user] = useAuthState(auth);

    let navigate = useNavigate();

    return (
        <div className="header-container">
            <FaHome onClick={() => navigate("/")} />
            <div className="categories-container">
                {
                    categories.map(item => <Link to={`/category/${item}`}
                        className="nav-link" key={item}>{item}</Link>)
                }
            </div>
            {
                user ?
                    <div>
                        <span className='username'>{user.displayName}</span>
                        <button className='auth-link' onClick={()=>signOut(auth)}>Logout</button>
                    </div>
                    :
                    <Link className="auth-link" to="/auth">Signup</Link>
            }

        </div>
    )
}

export default Header