import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Dashboard = () => {
  const [getstudCount, setstudCount] = useState([]);
  const [getTotalBook, setTotalBook] = useState([]);
  const [getIssueBook, setIssueBook] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/totalstudent");
        setstudCount(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const fetchData1 = async () => {
      try {
        const res = await axios.get("/totalbook");
        setTotalBook(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData1();
    const fetchData2 = async () => {
      try {
        const res = await axios.get("/totalIssueBook");
        setIssueBook(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData2();
  }, []);
  
  return (
    <>
      {/* ============================================================== */}
      {/* Bread crumb and right sidebar toggle */}
      {/* ============================================================== */}
      <div className="page-breadcrumb bg-white">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <h4 className="page-title">Dashboard</h4>
          </div>
          <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
            <div className="d-md-flex">
              <ol className="breadcrumb ms-auto">
                <li>
                  <NavLink to="/" className="fw-normal">
                    Dashboard
                  </NavLink>
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.col-lg-12 */}
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-12">
            <div className="white-box analytics-info">
              <h3 className="box-title">Total Student</h3>
              <ul className="list-inline two-part d-flex align-items-center mb-0">
                <li>
                  <div id="sparklinedash">
                    <canvas
                      width={67}
                      height={30}
                      style={{
                        display: "inline-block",
                        width: "67px",
                        height: "30px",
                        verticalAlign: "top",
                      }}
                    />
                  </div>
                </li>
                <li className="ms-auto">
                  <span className="counter text-success">
                    {getstudCount.map((ele, index) => (
                      <div key={index}>{ele.count}</div>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="white-box analytics-info">
              <h3 className="box-title">Total Books</h3>
              <ul className="list-inline two-part d-flex align-items-center mb-0">
                <li>
                  <div id="sparklinedash2">
                    <canvas
                      width={67}
                      height={30}
                      style={{
                        display: "inline-block",
                        width: "67px",
                        height: "30px",
                        verticalAlign: "top",
                      }}
                    />
                  </div>
                </li>
                <li className="ms-auto">
                  <span className="counter text-purple">
                    {getTotalBook.map((ele, index) => (
                      <div key={index}>{ele.count}</div>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="white-box analytics-info">
              <h3 className="box-title">Total Book issue Details</h3>
              <ul className="list-inline two-part d-flex align-items-center mb-0">
                <li>
                  <div id="sparklinedash3">
                    <canvas
                      width={67}
                      height={30}
                      style={{
                        display: "inline-block",
                        width: "67px",
                        height: "30px",
                        verticalAlign: "top",
                      }}
                    />
                  </div>
                </li>
                <li className="ms-auto">
                  <span className="counter text-info">
                  {getIssueBook.map((ele, index) => (
                    <div key={index}>{ele.count}</div>
                  ))}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*
          <div className="row">
            <div className="col-md-12 col-lg-12 col-sm-12">
              <div className="white-box">
                <div className="d-md-flex mb-3">
                  <h3 className="box-title mb-0">Recent sales</h3>
                  <div className="col-md-3 col-sm-4 col-xs-6 ms-auto">
                    <select className="form-select shadow-none row border-top">
                      <option>March 2021</option>
                      <option>April 2021</option>
                      <option>May 2021</option>
                      <option>June 2021</option>
                      <option>July 2021</option>
                    </select>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table no-wrap">
                    <thead>
                      <tr>
                        <th className="border-top-0">#</th>
                        <th className="border-top-0">Name</th>
                        <th className="border-top-0">Status</th>
                        <th className="border-top-0">Date</th>
                        <th className="border-top-0">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="txt-oflo">Elite admin</td>
                        <td>SALE</td>
                        <td className="txt-oflo">April 18, 2021</td>
                        <td><span className="text-success">$24</span></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td className="txt-oflo">Real Homes WP Theme</td>
                        <td>EXTENDED</td>
                        <td className="txt-oflo">April 19, 2021</td>
                        <td><span className="text-info">$1250</span></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td className="txt-oflo">Ample Admin</td>
                        <td>EXTENDED</td>
                        <td className="txt-oflo">April 19, 2021</td>
                        <td><span className="text-info">$1250</span></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td className="txt-oflo">Medical Pro WP Theme</td>
                        <td>TAX</td>
                        <td className="txt-oflo">April 20, 2021</td>
                        <td><span className="text-danger">-$24</span></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td className="txt-oflo">Hosting press html</td>
                        <td>SALE</td>
                        <td className="txt-oflo">April 21, 2021</td>
                        <td><span className="text-success">$24</span></td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td className="txt-oflo">Digital Agency PSD</td>
                        <td>SALE</td>
                        <td className="txt-oflo">April 23, 2021</td>
                        <td><span className="text-danger">-$14</span></td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td className="txt-oflo">Helping Hands WP Theme</td>
                        <td>MEMBER</td>
                        <td className="txt-oflo">April 22, 2021</td>
                        <td><span className="text-success">$64</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          */}
        {/* ============================================================== */}
        {/* Recent Comments */}
        {/* ============================================================== */}
      </div>
      {/* ============================================================== */}
      {/* End Container fluid  */}
      {/* ============================================================== */}
    </>
  );
};

export default Dashboard;
