    interface IInput{
        type: string,
        placeholder: string,
        preImage?: string,
        postImage?: string,
    }
    const Input: React.FC<IInput> = ({type, placeholder, preImage, postImage}) => {
    return (
        <>
        <div className="field-holder">
            {
                preImage && 
                <div className="lock">
                    <img src={preImage}  alt=""/>
                </div>
            }
            <input 
                type={type} 
                placeholder={placeholder}
            />
             {
                postImage &&
                <div className="eye">
                     <img src={postImage}  alt=""/>
                </div>
            }
        </div>
        </>
    )
}

export default Input;