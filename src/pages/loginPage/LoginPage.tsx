import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {login} from "../../apis/auth";
import {LoginPageStyle} from "./LoginPageStyle";
import {useAlarm} from "../../hooks/useAlarm";

interface LoginFormData {
    email: string;
    password: string;
}

function LoginPage() {
    const {register, handleSubmit} = useForm<LoginFormData>()
    const navigate = useNavigate()
    const setAlarm = useAlarm()

    const onSubmit = handleSubmit((async data => {
        await login(data).then((res) => {
            if(res === 200) {
                navigate(-1)
            }else{
                setAlarm("로그인에 실패하였습니다. 다시 시도해 주세요.")
            }
        })
    }))

    return <LoginPageStyle className={"container"}>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor={"email"}>Email Address</label>
                <input type={"text"} {...register("email")} required={true} autoComplete={"off"} placeholder={"podo@test.com"}/>
            </div>
            <div>
                <label htmlFor={"password"}>Password</label>
                <input type={"password"} {...register("password")} required={true} autoComplete={"off"} placeholder={"password"}/>
            </div>
            <button className={"button"}>로그인</button>
        </form>
    </LoginPageStyle>
}

export default LoginPage