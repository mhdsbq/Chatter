const loginSelect = document.getElementById('login-select')
const signupSelect = document.getElementById('signup-select')
const formContainer = document.getElementById('form-container')


loginSelect.addEventListener('click',()=>{
    loginSelect.style.backgroundColor = '#654597'
    loginSelect.style.boxShadow = `0px 0px 15px 0px rgba(156,51,212,0.75)`
    
    signupSelect.style.backgroundColor = '#AB81CD'
    signupSelect.style.boxShadow = `0px 0px 15px 0px rgba(49,45,45,0.75) inset`
    
    formContainer.innerHTML = `

        <form action="">
            <div>
                <input type="text" class="input-text" placeholder="Username...">
            </div>
            <div>
                <input type="password" class="input-text" placeholder="Password...">
            </div>
            <button type="submit">Login</button>
        </form>`
})

signupSelect.addEventListener('click',()=>{
    loginSelect.style.backgroundColor = '#AB81CD'
    loginSelect.style.boxShadow = `0px 0px 15px 0px rgba(49,45,45,0.75) inset`


    signupSelect.style.backgroundColor = '#654597'
    signupSelect.style.boxShadow = `0px 0px 15px 0px rgba(156,51,212,0.75)`
    
    formContainer.innerHTML = `

        <div class="signup-form">
            <form action="">
                <div>
                    <input type="text" class="input-text"placeholder="Username...">
                </div>
                <div>
                    <input type="text" class="input-text"id="" placeholder="Password...">
                </div>
                <div>
                    <input type="text" class="input-text" placeholder="confirm-password">
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    `
})

