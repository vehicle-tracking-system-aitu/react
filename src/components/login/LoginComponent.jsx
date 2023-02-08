import style from "./LoginCss.module.css"
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
const LoginComponent = ()=>{
    useEffect(() => {
        document.body.style.backgroundColor = '#222D32';

        return () => {
            // 👇️ optionally remove styles when component unmounts
            document.body.style.backgroundColor = null;
        };
    }, []);
    return(
        <>
            <div className={style.login__wrapper}>
                <div className={style.login__container}>
                <div className={style.fields}>
                    <div className={style.text}>Admin Panel</div>
                    <input className={style.email} placeholder="Email"/>
                    <input className={style.password} placeholder="Password"/>
                    <NavLink to="/" className={style.button}>Login</NavLink>
                </div>
                </div>
            </div>

        </>
    )
}
export default LoginComponent