function Registration() {
  return (

    <div class="position-absolute top-50 start-50 translate-middle  " >
        <div class="card p-4 rounded-4 shadow" style={{width: "350px"}}>
          <h3 class="text-center mb-3">Create Account</h3>

          <form>
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              class="form-control mb-3"
              placeholder="Email"
              required
            />

            <input
              type="password"
              class="form-control mb-3"
              placeholder="Password"
              required
            />

            <input
              type="password"
              class="form-control mb-3"
              placeholder="Confirm Password"
              required
            />

            <button class="btn btn-primary w-100 mb-3 ">Register</button>
          </form>

          <p class="text-center mb-0">
            Already have an account?
            <a href="#">Login</a>
          </p>
        </div>
      </div>
  );
}

export default Registration;
