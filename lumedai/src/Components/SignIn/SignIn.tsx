import Input from "../Input/Input";
import Label from "../Label/Label";
import InputButton from "../InputButton/InputButton";
import OR from "../OR/OR";
import LoginGoogle from "../LoginGoogle/LoginGoogle";
import Account from "../Account/Account";

interface ISignIn {
    type?: string,
    placeholder?: string,
    image?: string,
    labeltext?: string,
    label?: string,
    bannerLines?: string,
    bannerDots?: string,
}

const SignIn: React.FC<ISignIn> = ({type, placeholder, image, bannerDots, bannerLines, labeltext, label}) => {
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
                    <h1>Sign In</h1>
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
                            <Label label="Password" labeltext="Forgot Password?" />
                        </div>
                        <div className="field-holder">
                            <Input
                                type="text"
                                placeholder=""
                                preImage="assets/images/password.svg"
                                postImage="assets/images/eye.svg"
                            />
                        </div>
                        <InputButton text="Sign In" />
                        <div className="or-text">
                            <OR text="or" />
                        </div>
                        <div className="google-holder">
                            <LoginGoogle
                                googleImage="assets/images/google.png"
                                text="Login With Google" 
                            />
                        </div>
                        <div className="account-holder secondary-btn">
                            <Account
                                label="Don't have an account?"
                                text="Create an Account" 
                            />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;