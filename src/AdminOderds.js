import AdminFooter from "./AdminFooter";
import AdminMenu from "./AdminMenu";
import { Link } from 'react-router-dom';

export default function () {
    return (
        <>
            <main classname="hold-transition sidebar-mini layout-fixed">
                <div classname="wrapper">
                    <AdminMenu />
                    <main className="mt-2">
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card shadow">
                                            <div className="card-header bg-dark">
                                                <h3>Orderds</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-sm table-striped table-bordered">
                                                        <thead>
                                                            <tr className="text-center">
                                                                <th>Id No.</th>
                                                                <th>Customer Name</th>
                                                                <th>Date</th>
                                                                <th>Amounnt</th>
                                                                <th>Payment </th>
                                                                <th>Status</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="text-center">
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Krish Patel<br />
                                                                    Bhavnagar,360042</td>
                                                                <td>1-AUG-2023</td>
                                                                <td>125000</td>
                                                                <td>Online</td>
                                                                <td>Confirmed</td>
                                                                <td><Link to="/view-orderd"><i className="fa fa-eye fa-2x text-info " /></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Krish Patel<br />
                                                                    Bhavnagar,360042</td>
                                                                <td>1-AUG-2023</td>
                                                                <td>125000</td>
                                                                <td>Online</td>
                                                                <td>Confirmed</td>
                                                                <td><Link to="/view-oderd"><i className="fa fa-eye fa-2x text-info " /></Link></td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Krish Patel<br />
                                                                    Bhavnagar,360042</td>
                                                                <td>1-AUG-2023</td>
                                                                <td>125000</td>
                                                                <td>Online</td>
                                                                <td>Confirmed</td>
                                                                <td><Link to="//view-oderd"><i className="fa fa-eye fa-2x text-info " /></Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <AdminFooter />
                </div>
            </main>

        </>
    );
}