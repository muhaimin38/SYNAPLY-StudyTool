function LandingPage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SYNAPLY
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FlashCards
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  nav-item
                  dropdown
                >
                  Summarizer
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Upload Book
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Upload File
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item" href="">
                <a class="nav-link" href="#" aria-disabled="true">
                  Quiz Generator
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Ask Anything"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Chat
              </button>
            </form>
          </div>
        </div>
      </nav>

      <section class="d-flex justify-content-center align-items-center vh-100 text-center bg-light">
        <div>
          <h1 class="display-4 fw-bold">Synapse AI</h1>
          <p class="lead">Your smart AI study companion for faster learning</p>
          <a href="#" class="btn btn-primary mt-3">
            Get Started
          </a>
        </div>
      </section>

      {/* <div className="text-center p-5 bg-light">
        <h1 className="mb-3">Welcome to Synaply</h1>
        <p className="text-muted">
          Your AI-powered study assistant for smarter learning
        </p>
      </div> */}
      {/* <img src="https://unsplash.com/photos/ai-letters-on-a-glowing-orange-and-blue-background-pd9jBKNLyj4" alt="photo" /> */}

      <footer class="bg-dark text-white text-center p-4 mt-5">
        <p class="mb-1">© 2026 Synapse AI. All rights reserved.</p>
        <small>Built to make learning smarter and faster</small>
      </footer>
    </div>
  );
}

export default LandingPage;
