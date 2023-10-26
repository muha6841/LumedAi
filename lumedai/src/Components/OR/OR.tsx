interface IOR {
    text: string,
}

const OR : React.FC<IOR> = ({text}) => {
    return (
        <div className="or-textholder">
            <span className="text">{text}</span>
        </div>
    )
}

export default OR