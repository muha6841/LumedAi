import Link from "next/link"

interface IInputButton{
    text: string,
}
const InputButton: React.FC<IInputButton> = ({text}) => {
return (
    <>
    <div className="sign-btn">
        <Link href="#">{text}</Link>
    </div>
    </>
)
}

export default InputButton