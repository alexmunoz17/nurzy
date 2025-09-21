import './Home.css';
import logoImg from '../../assets/home/logo.png';
import heroImg from '../../assets/home/hero.png';

function Home() {
    return (
        <>
            <div className="d-flex flex-column min-vh-100 div-header">
                <div className="pt-3">
                    <div className="d-flex justify-content-between w-75 mx-auto div-navbar">
                        <a className="" href="/">
                            <img src={logoImg} alt="logo" width="32" height="32" className="me-2" />
                        </a>

                        <div className="d-flex gap-4">
                            <a className="nav-link text-white fw-semibold" href="#">Home</a>
                            <a className="nav-link text-white fw-semibold" href="#">Docs</a>
                        </div>
                        <div>
                            <button className="btn btn-primary">Login</button>
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>

                <section className="d-flex flex-row justify-content-center align-items-center flex-grow-1 px-4">
                    <div className="w-50">
                        <h1 className="title-hero">Die Zukunft der Temporärarbeit in der Pflege</h1>
                    </div>
                    <div className="w-50 text-center">
                        <img className="img-hero" src={heroImg} alt="Hero" />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
