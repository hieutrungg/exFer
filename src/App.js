function App() {
  return (
    <div class="container-fluid">
      <div class="bg-light p-5 mb-4">
        <h2>Let's test the grid!</h2>
      </div>
      <div className="w-75 mx-auto">
        <div class="row">
          <div class="col-md-6 border bg-secondary py-3">Frist col</div>
          <div class="col-md-6 border bg-secondary py-3">Second col</div>
        </div>
        <div class="row">
          <div class="col-md-4 border bg-secondary py-3">col</div>
          <div class="col-md-4 border bg-secondary py-3">col</div>
          <div class="col-md-4 border bg-secondary py-3">col</div>
        </div>
        <div class="row">
          <div class="col-md-3 border bg-secondary py-3">col</div>
          <div class="col-md-3 border bg-secondary py-3">col</div>
          <div class="col-md-3 border bg-secondary py-3">col</div>
          <div class="col-md-3 border bg-secondary py-3">col</div>
        </div>
      </div>
      <footer className="text-center mt-3 p-2 bg-warning">
        <h3>Created by ABC!</h3>
      </footer>
      <div className="bg-light text-center p-5">
        <h2>My First Bootstrap Page</h2>
      </div>
      <div className="bg-warning py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <img src="data:image/png;base64,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" alt="FPT" width="180" />

            <div className="d-flex align-items-center">
              <span className="me-2">Search</span>

              <input
                type="text"
                className="form-control"
                style={{ width: "180px" }}
              />
            </div>
          </div>

          <div className="mt-3">
            <a href="#" className="text-white text-decoration-none me-3">
              Home
            </a>

            <a href="#" className="text-white text-decoration-none">
              Students
            </a>
          </div>
        </div>
      </div>

      
      <div className=" bg-warning p-3">
        <img
          src="data:image/jpeg;base64,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"
          alt="Students"
          className="img-fluid w-100"
        />
      </div>

      {/* BREADCRUMB */}
      <div className="container mt-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>

            <li className="breadcrumb-item active">Students</li>
          </ol>
        </nav>
      </div>
      <div className="container my-4">
        <h4 className="text-center mb-3">Students Detail</h4>

        <div className="row justify-content-center">
          <div className="col-md-4">
            {/* ROW 1 */}
            <div className="row">
              <div className="col-6">
                <div className="card rounded-0 h-100">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3you-eMSLKmrEUFwQAknYSlyoiUVhQKVtDgzZD0Kx1_JO_G7"
                    className="card-img-top rounded-0"
                    alt="Student 1"
                  />

                  <div className="card-body text-center">
                    <p className="small mb-2">DE160001</p>

                    <div className="d-flex justify-content-between small">
                      <span>Nguyen Van A</span>

                      <span>
                        DaNang
                      </span>
                    </div>
                    <div>
                      <span>
                        <input type="radio" className=""/>Absent
                      </span>
                      <span>
                        <input type="radio" className="ms-4"/>Present
                      </span>
                    </div>

                    <button className="btn btn-warning btn-sm mt-3">
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-6">
                <div className="card rounded-0 h-100">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6lPhlKG81Uubynl7SQ4CNRQOMNIRu_atnbDTnxKFDn6MPlLd"
                    className="card-img-top rounded-0"
                    alt="Student 2"
                  />

                  <div className="card-body text-center">
                    <p className="small mb-2">DE160002</p>

                    <div className="d-flex justify-content-between small">
                      <span>Tran Van B</span>

                      <span>QuyNhon</span>
                    </div>
                    <div>
                      <span>
                        <input type="radio" className="" />
                        Absent
                      </span>
                      <span>
                        <input type="radio" className="ms-4" />
                        Present
                      </span>
                    </div>

                    <button className="btn btn-warning btn-sm mt-3">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="row">
              <div className="col-6">
                <div className="card rounded-0 h-100">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2zNJ28wktCMaAr8oxAB9oSbyum3pYH0bTuG9kImdSPx-ynuB0"
                    className="card-img-top rounded-0"
                    alt="Student 3"
                  />

                  <div className="card-body text-center">
                    <p className="small mb-2">DE160003</p>

                    <div className="d-flex justify-content-between small">
                      <span>Le Van C</span>

                      <span>DaNang</span>
                    </div>
                    <div>
                      <span>
                        <input type="radio" className="" />
                        Absent
                      </span>
                      <span>
                        <input type="radio" className="ms-4" />
                        Present
                      </span>
                    </div>

                    <button className="btn btn-warning btn-sm mt-3">
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-6 ">
                <div className="card rounded-0 h-100">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_e0R_XPlTW7sTF8kj8NbgVbCi9ihH0I-2O2bzHQC1AYZWSIl"
                    className="card-img-top rounded-0"
                    alt="Student 4"
                  />

                  <div className="card-body text-center">
                    <p className="small mb-2">DE160004</p>

                    <div className="d-flex justify-content-between small">
                      <span>Pham Van D</span>

                      <span>
                        DaNang
                      </span>
                    </div>
                    <div>
                      <span>
                        <input type="radio" className=""/>Absent
                      </span>
                      <span>
                        <input type="radio" className="ms-4"/>Present
                      </span>
                    </div>
                    <button className="btn btn-warning btn-sm mt-3">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-warning py-4">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h6>Our Address</h6>

              <p className="small mb-1">FPT University</p>

              <p className="small mb-1">Hoa Lac, Hanoi</p>

              <p className="small mb-0">Tel: 024 7300 5588</p>
            </div>

            <div className="col-6 d-flex justify-content-end align-items-center">
              <span className="me-2">G+</span>
              <span className="me-2">f</span>
              <span className="me-2">in</span>
              <span>◎</span>
            </div>
          </div>

          <p className="text-center small mt-3 mb-0">© Copyright 2023</p>
        </div>
      </div>
    </div>
  );
}

export default App;
