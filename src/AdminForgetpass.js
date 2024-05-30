export default function () {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow custom-card">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Forgot Password</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label visually-hidden">Email address</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-envelope" /></span>
                                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary w-75">Submit</button>
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