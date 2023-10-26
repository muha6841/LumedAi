import Link from "next/link"

interface ILoginGoogle{
    googleImage: string,
    text: string,
}
const LoginGoogle: React.FC<ILoginGoogle> = ({googleImage, text}) => {
    return (
        <div className="google">
            <Link href="#">
                <img src={googleImage} alt="" />
                <p>{text}</p>
            </Link>
        </div>
    )
}

export default LoginGoogle