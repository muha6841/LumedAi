import Input from "../Input/Input";
import Label from "../Label/Label";
import InputButton from "../InputButton/InputButton";
import OR from "../OR/OR";
import LoginGoogle from "../LoginGoogle/LoginGoogle";
import Account from "../Account/Account";
import { useRouter } from 'next/router';

interface ICreateAccount {
    type?: string,
    placeholder?: string,
    image?: string,
    labeltext?: string,
    label?: string,
    bannerLines?: string,
    bannerDots?: string,
}

const CreateAccount: React.FC<ICreateAccount> = ({type, placeholder, image, bannerLines, bannerDots, labeltext, label}) => {
    const router = useRouter()
    return (
        <div className="input-box">
              <div className='banner-lines-wrap'>
                <img src={bannerLines} alt="banner-lines" />
            </div>
            <div className='banner-dots-wrap'>
                <img src={bannerDots} alt="banner-dots" />
            </div>
            <div className="input-holder">
                <div className="sign-form">
                    <h1>Create an Account</h1>        
                        <div className="label-holder">
                            <Label label="Name" />
                        </div>
                        <div className="field-holder">
                            <Input
                                type="text"
                                placeholder=""
                                preImage="assets/images/user.svg"
                            />
                        </div>
                        <div className="label-holder">
                            <Label label="Email" />
                        </div>
                        <div className="field-holder">
                            <Input
                                type="text"
                                placeholder=""
                                preImage="assets/images/email.svg"
                            />
                        </div>
                        <div className="label-holder">
                            <Label label="Password" />
                        </div>
                        <div className="field-holder">
                            <Input
                                type="text"
                                placeholder=""
                                preImage="assets/images/password.svg"
                                postImage="assets/images/eye.svg"
                            />
                        </div>
                        <div className="label-holder">
                            <Label label="Confirm Password" />
                        </div>
                        <div className="field-holder">
                            <Input
                                type="text"
                                placeholder=""
                                preImage="assets/images/password.svg"
                                postImage="assets/images/eye.svg"
                            />
                        </div>
                        <InputButton text="Create Account" />
                        <div className="or-text">
                            <OR text="or" />
                        </div>

                        <div className="google-holder">
                            <LoginGoogle
                                googleImage="assets/images/google.png"
                                text="Create Account With Google" 
                            />
                        </div>
                        <div className="account-holder  secondary-btn">
                            <Account text="Sign In" label="Already have an Account?" onClick={() => router.push('/SignInForm')} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;