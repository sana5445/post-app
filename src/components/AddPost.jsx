import React from 'react'
import PostNavbar from './PostNavbar'

const AddPost = () => {
  return (
    <div>
        <PostNavbar/>
        <div style={{ backgroundColor: '#FAF0E6', minHeight: '100vh', paddingBottom: '30px' }}>
         <div className="bg-light p-4 rounded shadow">
        <h2 style={{ color: "black", textAlign: "center" }}>ADD POST</h2>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="label form-label">UserId</div>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <div className="label form-label">Id</div>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <div className="label form-label">Title</div>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                             <div className="label form-label">Body</div>
                            <input type="text" className="form-control" />
                        </div>
                       <div className="col-12 d-flex justify-content-center mt-3">
                         <button className="btn btn-success">SUBMIT</button>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AddPost