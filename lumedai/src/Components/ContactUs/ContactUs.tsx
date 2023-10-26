import Input from "../Input/Input";
import Label from "../Label/Label";
import InputButton from "../InputButton/InputButton";

interface IContactUs {
    type?: string,
    placeholder?: string,
    image?: string,
    labeltext?: string,
    label?: string,
}

const ContactUs: React.FC<IContactUs> = ({type, placeholder, image, labeltext, label}) => {
    return (
        <div className="contact-block">
            <div className="contact-holder">       
                    <div className="label-holder">
                        <Label
                            label="Name"
                        />
                    </div>
                    <div className="field-holder">
                        <Input
                            type="text"
                            placeholder=""
                            preImage="assets/images/user.svg"
                        />
                    </div>
                    <div className="label-holder">
                        <Label
                            label="Email"
                        />
                    </div>

                    <div className="field-holder">
                        <Input
                            type="text"
                            placeholder=""
                            preImage="assets/images/email.svg"
                        />
                    </div>

                    <div className="label-holder">
                        <Label
                            label="Message"
                        />
                    </div>
                    <div className="post-text">
                        <textarea/>
                    </div>
                    <InputButton
                        text="Submit" 
                    />
                </div>
            </div>
    )
}

export default ContactUs;