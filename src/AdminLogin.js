
export default function AdminLogin() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-body ">
                                <div align="center"> <img src="dist/img/loginwc.png" /> </div>
                                <h2 className="text-center mb-4 mt-4 font-monospace">Hi! Welcome!</h2>
                                <form>
                                    <div className="mb-3">
                                        <label  className="form-label">Email Address:</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-envelope" /></span>
                                            <input type="email" className="form-control" id="email"  placeholder="Enter email" required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password:</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-lock" /></span>
                                            <input type="password" className="form-control" id="password" placeholder="Password" required />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-dark w-100 ">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}