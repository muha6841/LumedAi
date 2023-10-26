import Link from "next/link"

interface IAccount{
    label?: string,
    text?: string,
    onClick?: () => void,
}
const Account: React.FC<IAccount> = ({label, text, onClick}) => {
    return (
        <div className="account-btn" onClick={onClick}>
            <label>{label}</label>
            <div className="text-area">
                <Link href="/SignUpForm">
                    <p>{text}</p>
                </Link>
            </div>
        </div>
    )
}

export default Account