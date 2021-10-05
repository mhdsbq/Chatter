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
                <input type="text" class="input-text" id="username" required placeholder="Username...">
            </div>
            <div>
                <input type="password" class="input-text" id="password"  required placeholder="Password...">
            </div>
            <button type="submit" id="login-btn">Login</button>
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
                <button type="submit" id="signup-btn">Signup</button>
            </form>
        </div>
    `
})

// click login button to set default
loginSelect.click()

// auth
const loginBtn = document.getElementById('login-btn')
const signupBtn = document.getElementById('signup-btn') 

loginBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    fetch('/api/register',{
        method: 'POST',
        headers:{
            contentType:'application/json'},
        body: JSON.stringify({
            username,
            password
        })

    })
})

