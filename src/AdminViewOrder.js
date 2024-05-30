import AdminFooter from "./AdminFooter";
import AdminMenu from "./AdminMenu";
import { Link } from 'react-router-dom';

export default function () {
    return (
        <>
            <main classname="hold-transition sidebar-mini layout-fixed">
                <div classname="wrapper">
                    <AdminMenu />
                    <div className="mt-2">
                        <div className="content-wrapper">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card shadow">
                                            <div className="card-header bg-dark d-flex justify-content-between">
                                                <h3 className="m-0">View Order</h3>
                                                <Link to="/orders" className=" btn btn-info ">BACK<i className="fa fa-arrow-left" /></Link>
                                            </div>

                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-sm table-striped table-bordered">
                                                        <tbody><tr>
                                                            <th width="25%" colSpan={2}>Order Detail</th>
                                                            <th width="25%" colSpan={2}>Customer Detail</th>
                                                        </tr>
                                                            <tr>
                                                                <td width="25%">Order ID</td>
                                                                <td width="25%">1</td>
                                                                <td width="25%">Customer ID</td>
                                                                <td width="25%">101</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="25%">Date</td>
                                                                <td width="25%">Fri 05-02-2024</td>
                                                                <td width="25%">Name</td>
                                                                <td width="25%">Krish Patel</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="25%">Amount</td>
                                                                <td width="25%">300000</td>
                                                                <td width="25%">Address</td>
                                                                <td width="25%">
                                                                    Surat,mota varachha, near ABC circle
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td width="25%">Mode</td>
                                                                <td width="25%">Online</td>
                                                                <td width="25%">City</td>
                                                                <td width="25%">Surat</td>
                                                            </tr>
                                                            <tr>
                                                                <td width="25%">Payment status</td>
                                                                <td width="25%">Received</td>
                                                                <td width="25%">Pincode</td>
                                                                <td width="25%">000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Status</td>
                                                                <td>Confirmed
                                                                    <select className="form-select" name id>
                                                                        <option value={1}>Confirmed</option>
                                                                        <option value={2}>Dispathed</option>
                                                                        <option value={3}>Delivered</option>
                                                                        <option value={4}>Returned</option>
                                                                    </select>
                                                                    <button className="btn btn-primary mt-2 w-100">Save</button>
                                                                </td>
                                                                <td>Remarks</td>
                                                                <td>
                                                                    Gift packing with sticker is required
                                                                </td>
                                                            </tr>
                                                        </tbody></table>
                                                    <h3 className="border-bottom">Items</h3>
                                                    <tfooter>
                                                    </tfooter><table className="table table-bordered table-striped table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th width="10%">ID</th>
                                                                <th>Name</th>
                                                                <th>Price</th>
                                                                <th>Quantity</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>IPhone</td>
                                                                <td>200000</td>
                                                                <td>1</td>
                                                                <td>200000</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>IPod</td>
                                                                <td>50000</td>
                                                                <td>2</td>
                                                                <td>100000</td>
                                                            </tr>
                                                        </tbody>
                                                        <tbody><tr>
                                                            <td colSpan={4} className="text-bold">Total</td>
                                                            <td>300000</td>
                                                        </tr>
                                                        </tbody></table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AdminFooter />
                    </div>
                </div>
            </main>
        </>
    );
}