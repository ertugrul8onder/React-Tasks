function App() {
  return (
    <div className="container vh-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-6 col-xl-4">
          <form className="row border border-white g-3 p-3">
            <div className="col-12">
              <label className="form-label fw-semibold fs-5">Purpose</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="purpose" id="client" value="1" />
                  <label className="form-check-label" htmlFor="client">Client</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="purpose" id="group" value="2" />
                  <label className="form-check-label" htmlFor="group">Group</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="purpose" id="agent" value="3" />
                  <label className="form-check-label" htmlFor="agent">Agent</label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="label" className="form-label fw-semibold fs-5">Label</label>
              <input type="text" className="form-control border border-2 border-secondary" id="label" name="label" />
              <div className="form-text text-white-50">Please write to label to here</div>
            </div>
            <div className="col-12">
              <label htmlFor="key" className="form-label fw-semibold fs-5">Key</label>
              <input type="text" className="form-control border border-2 border-secondary" id="key" name="key" />
              <div className="form-text text-white-50">Please write to key to here</div>
            </div>
            <div className="col-12">
              <label className="form-label fw-semibold fs-5">Status</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="status" id="active" value="4" />
                  <label className="form-check-label" htmlFor="active">Active</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="status" id="passive" value="5" />
                  <label className="form-check-label" htmlFor="passive">Passive</label>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-success">
              <div className="d-flex align-items-center justify-content-center">
                <span className="fs-5">Save</span>
                <i className="bi bi-check-lg" style={{ fontSize: "1.5rem" }}></i>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;