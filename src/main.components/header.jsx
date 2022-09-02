const Header = () => {
    return <div className="row navbar-light bg-light">
        <div className="col-6">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" key="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" key="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pacientes
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Consultar</a></li>
                                    <li><a className="dropdown-item" href="#">Historia clínica</a></li>
                                    <li><a className="dropdown-item" href="#">Afiliados</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="col-6 d-flex justify-content-end">
        <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" key="navbarNavDropdown">
                        <ul className="navbar-nav">                    
                            <li className="nav-item">
                                <a className="nav-link" href="#">¿Necesitas Ayuda?</a>
                            </li>
                            <a className="navbar-brand" href="#">Perfil</a>
                        </ul>
                    </div>
                </div>
            </nav>            
        </div>
    </div>
}
export default Header;