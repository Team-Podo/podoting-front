
interface CastProps {
    name: string,
    profile: {
        url:string
    },
    role: string
}

function CastItem ({ name, profile, role } :CastProps) {
    return <div>
        <div className="profile">
            <img src={profile.url} alt="캐스팅 프로필 이미지"/>
        </div>
        <p>{name}</p>
        <span>{role}</span>
    </div>
}

export default CastItem