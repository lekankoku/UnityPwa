import React, { Component } from "react";
import Header from "./header";
import Form from "./Form";
class Signup extends Component {
  render() {
    return (
      <div>
        <Header />
        <main class="signup__main">
          <img class="signup__bg" src="/assets/images/signup-bg.png" alt="bg" />

          <div class="container">
            <div class="signup__container">
              <div class="signup__head">
                <h3>Create a New Unity Account</h3>
                <p>
                  By singin up you can start posting, replying to topics, earn
                  badges, favorite, vote topics and many more.
                </p>
              </div>
              <Form />
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default Signup;
