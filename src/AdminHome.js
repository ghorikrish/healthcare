

import AdminFooter from './AdminFooter';
import AdminMenu from './AdminMenu';
import { Link } from 'react-router-dom';
export default function AdminHome() {
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
              <h1 className="m-0">Dashboard</h1>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
          <div className="col-lg-4 col-6">
              <div className="small-box bg-dark">
                <div className="inner">
                <h5><i class="fa-solid fa-users text-primary"></i></h5>
                    <hr className='bg-white'/>
                    <h4 className="mt-3" align="center">Wel Come Uers</h4>
                  
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-6">
              <div className="small-box bg-dark">
                <div className="inner">
                  <Link to="/users" className="text-white">
                    <h5><i className="fa fa-user-alt " /><b>&nbsp;&nbsp;&nbsp;&nbsp;10</b></h5>
                    <hr className='bg-white'/>
                    <h4 className="mt-3" align="center">User</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="small-box bg-dark">
                <div className="inner">
                  <Link to="/hospital" className="text-white">
                    <h5><i className="fa fa-hospital-alt" /><b>&nbsp;&nbsp;&nbsp;&nbsp;10</b></h5>
                    <hr className='bg-white'/>
                    <h4 className="mt-3" align="center">Hospitals</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="small-box bg-dark">
                <div className="inner">
                  <Link to="/doctor" className="text-white">
                    <h5><i className="fa fa-user-doctor" /><b>&nbsp;&nbsp;&nbsp;&nbsp;10</b></h5>
                    <hr className='bg-white'/>
                    <h4 className="mt-3" align="center">Doctors</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="small-box bg-dark">
                <div className="inner">
                  <Link to="/appointment" className="text-white">
                    <h5><i className="fa fa-calendar-check" /><b>&nbsp;&nbsp;&nbsp;10</b></h5>
                    <hr className='bg-white'/>
                    <h4 className="mt-3" align="center">Appointment</h4>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="small-box bg-dark">
                <div className="inner">
                  <Link to="/orderds" className="text-white">
                    <h5 className><i className="fa fa-cart-plus" /><b>&nbsp;&nbsp;&nbsp;&nbsp;10</b></h5>
                    <hr className='bg-white'/>
                    <h4 className="mt-3" align="center">Orderds</h4>
                  </Link>
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
