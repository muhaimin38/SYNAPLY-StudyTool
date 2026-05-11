import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    // FEATURES DATA
    const features = [
      {
        title: "AI Chat Tutor",
        description:
          "Get instant explanations, answers, and study guidance with AI.",
      },

      {
        title: "Smart Notes",
        description:
          "Generate organized notes and summaries from your study material.",
      },

      {
        title: "Flashcards",
        description:
          "Create flashcards automatically for quick revision and practice.",
      },

      {
        title: "Quiz Generator",
        description:
          "Generate quizzes and MCQs to test your understanding instantly.",
      },

      {
        title: "Study Planner",
        description:
          "Organize tasks, sessions, and learning goals efficiently.",
      },

      {
        title: "PDF Summarizer",
        description:
          "Convert long PDFs into concise and easy-to-read summaries.",
      },
    ];

    // PRICING DATA
    const pricing = [
      {
        plan: "Free Plan",
        price: "$0",
        description:
          "Basic AI tools, notes, quizzes, and limited study sessions.",
        button: "Start Free",
        buttonClass: "btn btn-outline-primary",
      },

      {
        plan: "Pro Plan",
        price: "$12/month",
        description:
          "Unlimited AI usage, advanced study tools, flashcards, and planner.",
        button: "Go Pro",
        buttonClass: "btn btn-primary",
      },
    ];

    return (
      <div>

     
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">

          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img
              src="src/assets/ChatGPT Image May 11, 2026, 11_39_39 AM.png"
              alt="logo"
              style={{
                width: "65px",
                marginRight: "10px",
              }}
            />

            <span style={{ color: "#2d2d8f" }}>
              Synap AI
            </span>
          </Link>

          <div className="ms-auto">
            <Link to="/login">
                        <button className="btn btn-outline-primary me-2 px-4">
              Login
            </button>
            </Link>

              <Link to="registration">
              
            <button className="btn btn-primary px-4">
              Sign Up
            </button>
            </Link>
          </div>

        </nav>

       
        <div
          className="text-white text-center d-flex align-items-center"
          style={{
            height: "90vh",
            backgroundImage:
            // https://images.unsplash.com/photo-1522202176988-66273c2fd55f
              "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('src/assets/abstract-gradient-background-with-grainy-effect_84443-3113.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">

            <h1 className="display-3 fw-bold">
              Your AI Study Workspace
            </h1>

            <p
              className="lead mt-4 mx-auto"
              style={{
                maxWidth: "750px",
                fontSize: "22px",
              }}
            >
              Synap AI helps students learn faster by combining
              AI chat, smart notes, quizzes, flashcards,
              PDF summaries, and study planning in one workspace.
            </p>

            <div className="mt-5">
                <Link to="/registration">
                   <button className="btn btn-primary btn-lg me-3 px-4">
                Get Started
              </button>
                </Link>
           

              <Link to="/login">
                      <button className="btn btn-outline-light btn-lg px-4">
                Login
              </button>
              </Link>
      
            </div>

          </div>
        </div>

        
        <div className="container py-5">

          <h2 className="text-center fw-bold mb-3">
            Powerful Features for Smarter Learning
          </h2>

          <p className="text-center text-muted mb-5">
            Everything students need to study, revise, and stay productive.
          </p>

          <div className="row">

            {features.map((feature, index) => (
              <div className="col-md-4 mb-4" key={index}>

                <div
                  className="card h-100 border-0 shadow p-4"
                  style={{
                    borderRadius: "20px",
                    transition: "0.3s",
                  }}
                >
                  <h4
                    className="fw-bold mb-3"
                    style={{ color: "#2d2d8f" }}
                  >
                    {feature.title}
                  </h4>

                  <p className="text-muted">
                    {feature.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* HOW IT WORKS */}
        <div className="container py-5 text-center">

          <h2 className="fw-bold">
            How It Works
          </h2>

          <p
            className="mt-4 text-muted mx-auto"
            style={{
              maxWidth: "750px",
              fontSize: "18px",
            }}
          >
            Upload your material, interact with AI,
            generate summaries and quizzes,
            organize notes, and study more effectively
            from one intelligent workspace.
          </p>

        </div>

        {/* PRICING */}
        <div
          className="container py-5"
        >
          <h2 className="text-center fw-bold mb-5">
            Simple Pricing
          </h2>

          <div className="row justify-content-center">

            {pricing.map((item, index) => (
              <div className="col-md-5 mb-4" key={index}>

                <div
                  className="card border-0 shadow p-5 text-center h-100"
                  style={{
                    borderRadius: "25px",
                  }}
                >

                  <h3 className="fw-bold mb-3">
                    {item.plan}
                  </h3>

                  <h1
                    className="fw-bold mb-4"
                    style={{
                      color: "#2d2d8f",
                    }}
                  >
                    {item.price}
                  </h1>

                  <p className="text-muted mb-4">
                    {item.description}
                  </p>

                  <button className={item.buttonClass}>
                    {item.button}
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* FINAL CTA */}
        <div
          className="text-center py-5 text-white"
          style={{
            backgroundColor: "#2d2d8f",
          }}
        >

          <h2 className="fw-bold">
            Start Learning Smarter with Synap AI
          </h2>

          <p className="mt-3">
            Your complete AI-powered learning workspace.
          </p>

          <Link to="/registration">
           <button className="btn btn-light btn-lg mt-3 px-4">
            Create Free Account
          </button>
          </Link>
         

        </div>

      
        <div className="bg-light text-center py-4">

          <small className="text-muted">
            © 2026 Synap AI. All rights reserved.
          </small>

        </div>

      </div>
    );
  }
}

export default LandingPage;