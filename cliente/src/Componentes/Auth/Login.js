import React, { Fragment, Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Fragment>
                <div className="login">
                <div>
                    <a className="hiddenanchor" id="signup" />
                    <a className="hiddenanchor" id="signin" />
                    <div className="login_wrapper">
                        <div className="animate form login_form">
                            <section className="login_content">
                                <form>
                                    <h1>Login Form</h1>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Username" required />
                                    </div>
                                    <div>
                                        <input type="password" className="form-control" placeholder="Password" required />
                                    </div>
                                    <div>
                                        <a className="btn btn-default submit" href="index.html">Log in</a>
                                        <a className="reset_pass" href="#">Lost your password?</a>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="separator">
                                        <p className="change_link">New to site?
                                        <a href="#signup" className="to_register"> Create Account </a>
                                        </p>
                                        <div className="clearfix" />
                                        <br />
                                        <div>
                                            <h1><i className="fa fa-paw" /> Gentelella Alela!</h1>
                                            <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                        <div id="register" className="animate form registration_form">
                            <section className="login_content">
                                <form>
                                    <h1>Create Account</h1>
                                    <div>
                                        <input type="text" className="form-control" placeholder="Username" required />
                                    </div>
                                    <div>
                                        <input type="email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div>
                                        <input type="password" className="form-control" placeholder="Password" required />
                                    </div>
                                    <div>
                                        <a className="btn btn-default submit" href="index.html">Submit</a>
                                    </div>
                                    <div className="clearfix" />
                                    <div className="separator">
                                        <p className="change_link">Already a member ?
              <a href="#signin" className="to_register"> Log in </a>
                                        </p>
                                        <div className="clearfix" />
                                        <br />
                                        <div>
                                            <h1><i className="fa fa-paw" /> Gentelella Alela!</h1>
                                            <p>©2016 All Rights Reserved. Gentelella Alela! is a Bootstrap 3 template. Privacy and Terms</p>
                                        </div>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;

