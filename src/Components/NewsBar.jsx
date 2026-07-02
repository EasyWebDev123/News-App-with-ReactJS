
const NewsBar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="bg-light text-dark w-20 p-2">HotNews <span class="badge text-bg-secondary">4</span></span></a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <div className="nav-link active" onClick={() => setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={() => setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={() => setCategory("science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={() => setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={() => setCategory("sports")}>Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" onClick={() => setCategory("entertainment")}>Entertainment</div>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default NewsBar
