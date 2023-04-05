import React from 'react';
import "../Assets/Admin/css/style.css";
import "../Assets/Admin/css/bootstrap.min.css";
import product from "../Assets/Admin/img/product/product.jpg";
import  {allproducts}  from "../Services/Actions/product";

import { useEffect, useState } from 'react';

const AdminProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const data = await allproducts();
            setProducts(data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchProducts();
      }, []);
  
     
    return (
        <>
            
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title">
                                <span>Main</span>
                            </li>
                            <li>
                                <a href="index.html"><i className="fe fe-home"></i> <span>Dashboard</span></a>
                            </li>
                            <li>
                                <a href="appointment-list.html"><i className="fe fe-layout"></i> <span>Auctions</span></a>
                            </li>
                            <li>
                                <a href="specialities.html"><i className="fe fe-users"></i> <span>Categories</span></a>
                            </li>
                            <li>
                                <a href="doctor-list.html"><i className="fe fe-user-plus"></i> <span>Users</span></a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="page-wrapper">
                <div className="content container-fluid">


                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-7 col-auto">
                                <h3 className="page-title">Product List</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                    <li className="breadcrumb-item active">Product List</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="datatable table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Product Name</th>
                                                    <th>Price</th>
                                                    <th>Date</th>
                                                    <th className="text-right">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((product) => (
                                                  
                                                    <tr>
                                                        <td>{product.id}</td>

                                                        <td>
                                                            <h2 className="table-avatar">
                                                                <a className="avatar avatar-sm mr-2" data-toggle="modal" href="#edit_specialities_details">
                                                                    <img className="avatar-img rounded-circle" src={product} alt="product image" />
                                                                </a>
                                                                <a data-toggle="modal" href="#edit_specialities_details">Safi Natural Blood Purifier Syrup 200 ml</a>
                                                            </h2>
                                                        </td>

                                                        <td>${product.price}</td>

                                                        <td>12-05-2020</td>

                                                        <td className="text-right">
                                                            <div className="actions">
                                                                <a className="btn btn-sm bg-success-light" data-toggle="modal" href="#edit_specialities_details">
                                                                    <i className="fe fe-pencil"></i> Edit
                                                                </a>
                                                                <a data-toggle="modal" href="#delete_modal" className="btn btn-sm bg-danger-light">
                                                                    <i className="fe fe-trash"></i> Delete
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="Add_Specialities_details" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row form-row">
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Product Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input type="file" className="form-control" />
                                        </div>
                                    </div>

                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="edit_specialities_details" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row form-row">
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Product Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label>Image</label>
                                            <input type="file" className="form-control" />
                                        </div>
                                    </div>

                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-content p-2">
                                <h4 className="modal-title">Delete</h4>
                                <p className="mb-4">Are you sure want to delete?</p>
                                <button type="button" className="btn btn-primary">Save </button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdminProductList;