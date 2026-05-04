function Login(){

    return (


<div class="d-flex justify-content-center align-items-center vh-100">
    

    <div class="card p-4 rounded-4 shadow px-5 w-90"  >
        
        
        <h3 class="text-center mb-3">Login</h3>
      

        <form>
            <input type="email" class="form-control mb-3 " placeholder="Email" required />

            <input type="password" class="form-control mb-2 " placeholder="Password" required />

            <div class="text-end mb-3">
                <a href="#" >Forgot Password?</a>
            </div>

            <button class="btn btn-primary w-100 mb-3">Login</button>

        </form>

        <p class="text-center mb-0">
            Don’t have an account?
            <a href="#">Register</a>
        </p>

    </div>

</div>
    );
}

export default Login;