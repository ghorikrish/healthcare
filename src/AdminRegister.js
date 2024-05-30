
import { Link } from 'react-router-dom';
export default function () {
    return (
        <>
            <main className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    <div>
                        <div className="container mt-5">
                            <div className="row justify-content-center">
                                <div className="col-md-6">
                                    <div className="card shadow custom-card">
                                        <div className="card-body">
                                            <div align="center" className="mb-2"> <img src="dist/img/loginwc.png" /> </div>
                                            <h2 className="text-center mb-4 font-monospace"> Your Register!</h2>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="username" className="form-label visually-hidden">Username</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fas fa-user" /></span>
                                                        <input type="text" className="form-control" id="username" placeholder="Username" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label visually-hidden">Email address</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fas fa-envelope" /></span>
                                                        <input type="email" className="form-control" id="email" placeholder="Email address" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="password" className="form-label visually-hidden">Password</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fas fa-lock" /></span>
                                                        <input type="password" className="form-control" id="password" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="confirmPassword" className="form-label visually-hidden">Confirm Password</label>
                                                    <div className="input-group">
                                                        <span className="input-group-text"><i className="fas fa-lock" /></span>
                                                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary w-75">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}