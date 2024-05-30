import AdminFooter from "./AdminFooter";
import AdminMenu from "./AdminMenu";
import { Link } from 'react-router-dom';

export default function () {
    return (
        <>
            <main classname="hold-transition sidebar-mini layout-fixed">
                <div classname="wrapper">
                    <AdminMenu />
                    <div className="content-wrapper">
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header bg-dark d-flex justify-content-between ">
                                            <h3 className="m-0">View User Details</h3>
                                        </div>
                                        <div className="card-body">
                                            <img src="dist/img/1511.jpg" className="img-circle mx-auto d-block" height={85} width={85} />
                                            <div className="justify-content-center mt-3">
                                                <h4 className="card-text">Name: Krish Patel</h4>
                                                <p className="card-text">Email: ghorikrish999@gmail.com</p>
                                                <p className="card-text">Address: Surat</p>
                                                <p className="card-text">Mobile No: 9427824534</p>
                                                <p className="card-text">Gender: Male</p>
                                            </div>
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