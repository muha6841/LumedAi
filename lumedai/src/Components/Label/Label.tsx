import Link from "next/link"

interface ILabel{
    label?: string,
    labeltext?: string,
    type?: string,
}
const Label: React.FC<ILabel> = ({label, labeltext, type}) => {
return (
    <>
    <div className="label">
        <label>{label}</label>
        <Link href='#'>{labeltext}</Link>
    </div>
    </>
)
}

export default Label