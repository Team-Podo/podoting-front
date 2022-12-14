import {useForm} from "react-hook-form";
import {button} from "aws-amplify";
import {useNavigate} from "react-router-dom";
import {join} from "../../apis/auth";
import {LoginPageStyle} from "../loginPage/LoginPageStyle";
import {useAlarm} from "../../hooks/useAlarm";


interface JoinFormData {
    email: string;
    password: string;
}

function JoinPage() {
    const {register, handleSubmit} = useForm<JoinFormData>()
    const navigate = useNavigate()
    const setAlarm = useAlarm()

    const onSubmit = handleSubmit((async data => {
        await join(data).then((res) => {
            if(res === 200) {
                navigate(-1)
                setAlarm("회원가입 되었습니다.")
            }
        })
    }))

    return <LoginPageStyle className={"container"}>
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor={"email"}>Email Address</label>
                    <input type={"text"} {...register("email")} required={true} autoComplete={"off"} placeholder={"podo@test.com"}/>
                </div>
                <div>
                    <label htmlFor={"password"}>Password</label>
                    <input type={"password"} {...register("password")} required={true} autoComplete={"off"} placeholder={"password"}/>
                </div>
                <button className={"button"}>가입하기</button>
            </form>
        </div>
    </LoginPageStyle>
}

export default JoinPage