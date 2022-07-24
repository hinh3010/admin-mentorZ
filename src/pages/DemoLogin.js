import React, { useState } from 'react';
import { authentication } from '../auth/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const DemoLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState('INPUT_PHONE_NUMBER');
    const [result, setResult] = useState('');

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, authentication);
    }

    const signin = () => {
        if (phoneNumber === "") return;

        generateRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setResult(result);
                setStep('VERIFY_OTP');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const ValidateOtp = () => {
        if (otp === null) return;


        let confirmationResult = window.confirmationResult;
        confirmationResult.confirm(otp).then((result) => {
            const user = result.user;
            console.log(user);
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div style={{ marginTop: 100 }}>
            <center>

                {step === 'INPUT_PHONE_NUMBER' &&
                    <div>
                        <input value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }}
                            placeholder="phone number" />
                        <br /><br />
                        <div id="recaptcha-container"></div>
                        <button onClick={signin}>Send OTP</button>
                    </div>
                }

                {step === 'VERIFY_OTP' &&
                    <div>
                        <input type="text" placeholder={"Enter your OTP"}
                            onChange={(e) => { setOtp(e.target.value) }} />
                        <br /><br />
                        <button onClick={ValidateOtp}>Verify</button>
                    </div>
                }

                {step === 'VERIFY_SUCCESS' &&
                    <h3>Verify success</h3>
                }

                {step === 'VERIFY_FAIL' &&
                    <h3>Verify Fail</h3>
                }
            </center>
        </div>
    );
}

export default DemoLogin;

