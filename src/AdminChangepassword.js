import { Link } from 'react-router-dom';

export default function () {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2 className="text-center mb-4">Change Password</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="currentPassword" className="form-label visually-hidden">Current Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-lock" /></span>
                                            <input type="password" className="form-control" id="currentPassword" placeholder="Current Password" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newPassword" className="form-label visually-hidden">New Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-lock" /></span>
                                            <input type="password" className="form-control" id="newPassword" placeholder="New Password" />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label visually-hidden">Confirm New Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-lock" /></span>
                                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm New Password" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary w-75">Change Password</button>
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