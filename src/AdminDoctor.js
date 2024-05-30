import AdminFooter from "./AdminFooter";
import AdminMenu from "./AdminMenu";
import { Link } from 'react-router-dom';

export default function () {
    return (
        <>
            <main className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    <AdminMenu />
                    <div className="content-wrapper">
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1 className="m-0">Doctors</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4  col-sm-6 col-12">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                <div> <Link to="/user-detail" className="text-white">
                                                    <img src="dist/img/1511.jpg" width={65} height={65} className="img-circle float-left mr-3" alt="Right-aligned Image" />
                                                    <h5 className="text-info">Doctor Name</h5>
                                                </Link>
                                                </div>
                                                <h6 className="text-dark">type of doctor</h6>
                                                <h6 className="text-dark">other details</h6>
                                                <a href="admin-remove.html" type="submit" className="btn btn-info float-right">Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-12">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                <div>
                                                    <Link to="/user-detail" className="text-white">
                                                        <img src="dist/img/1511.jpg" width={65} height={65} className="img-circle float-left mr-3" alt="Right-aligned Image" />
                                                        <h5 className="text-info">Doctor Name</h5>
                                                    </Link>
                                                </div>
                                                <h6 className="text-dark">type of doctor</h6>
                                                <h6 className="text-dark">other details</h6>
                                                <a href="admin-remove.html" type="submit" className="btn btn-info float-right">Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-12">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                <div> <Link to="/user-detail" className="text-white">
                                                    <img src="dist/img/1511.jpg" width={65} height={65} className="img-circle float-left mr-3" alt="Right-aligned Image" />
                                                    <h5 className="text-info">Doctor Name</h5>
                                                </Link>
                                                </div>
                                                <h6 className="text-dark">type of doctor</h6>
                                                <h6 className="text-dark">other details</h6>
                                                <a href="admin-remove.html" type="submit" className="btn btn-info float-right">Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-12">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                <div> <Link to="/user-detail" className="text-white">
                                                    <img src="dist/img/1511.jpg" width={65} height={65} className="img-circle float-left mr-3" alt="Right-aligned Image" />
                                                    <h5 className="text-info">Doctor Name</h5>
                                                </Link>
                                                </div>
                                                <h6 className="text-dark">type of doctor</h6>
                                                <h6 className="text-dark">other details</h6>
                                                <a href="admin-remove.html" type="submit" className="btn btn-info float-right">Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-12">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                <div> <Link to="/user-detail" className="text-white">
                                                    <img src="dist/img/1511.jpg" width={65} height={65} className="img-circle float-left mr-3" alt="Right-aligned Image" />
                                                    <h5 className="text-info">Doctor Name</h5>
                                                </Link>
                                                </div>
                                                <h6 className="text-dark">type of doctor</h6>
                                                <h6 className="text-dark">other details</h6>
                                                <a href="admin-remove.html" type="submit" className="btn btn-info float-right">Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4  col-sm-6 col-12">
                                        <div className="card shadow">
                                            <div className="card-body">
                                                <div> <Link to="/user-detail" className="text-white">
                                                    <img src="dist/img/1511.jpg" width={65} height={65} className="img-circle float-left mr-3" alt="Right-aligned Image" />
                                                    <h5 className="text-info">Doctor Name</h5>
                                                </Link>
                                                </div>
                                                <h6 className="text-dark">type of doctor</h6>
                                                <h6 className="text-dark">other details</h6>
                                                <a href="admin-remove.html" type="submit" className="btn btn-info float-right">Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <AdminFooter />
                </div>
            </main>
        </>
    );
}