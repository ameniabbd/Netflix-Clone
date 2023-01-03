import React from 'react';
import './loginScreen.css'

function LoginScreen() {
    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                <img className='loginScreen_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button className='loginScreen_button'>
                    Sign In
                </button>
                <div className='loginScreen_gardient'/>

            </div>
<div className='loginScreen_body'>
<>
<h1>Unlimited films,TV programmes and more .</h1>
<h2>Watch anywhere. Cancel at any time.</h2>
<h3>Ready to watch ? Enter your email to create or restart your membership </h3>
</>

</div>

        </div>
    );
}

export default LoginScreen;