import { Link, Head } from '@inertiajs/react';
import MainCarousel from './Main/MainCarousel';
import Footer from './Main/Footer';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Nove" />

            <div className="container-fluid" dir="rtl">

                {/* Login/Register Bar */}
                <div className="d-flex justify-content-end p-2 bg-light border-bottom">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="btn-link">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="btn-link">
                                تسجيل الدخول
                            </Link>
                            <Link href={route('register')} className="btn-link ml-4">
                                إشتراك
                            </Link>
                        </>
                    )}
                </div>

                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="/images/logo-brand.png" alt="شعار المتجر" className="logo-brand" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">الرئيسية</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">المنتجات</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">العلامات التجارية</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">التصنيفات</a>
                                </li>
                            </ul>

                            {/* Search Bar */}
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="ابحث عن منتجات..." aria-label="Search" />
                                <button className="btn btn-outline-primary" type="submit">بحث</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className='main-container'>

    {/* Image Slider */}
    <div className="container mb-4"> {/* Add a Bootstrap container for spacing and alignment */}
        <MainCarousel />
    </div>

    {/* Products Section */}
    <div className="container mb-4">
        <div className="row">
            {/* Here you can add 4 cards each for a product */}
            <div className="col-md-3 mb-3">
                {/* Product Card */}
                <div className="card">
                    {/* ... Card content ... */}
                </div>
            </div>
            {/* ... 3 more product cards ... */}
        </div>
    </div>

    {/* Latest Offers */}
    <div className="container">
        <div className="row">
            {/* Here you can add multiple cards for latest offers */}
            <div className="col-md-3 mb-3">
                {/* Offer Card */}
                <div className="card">
                    {/* ... Card content ... */}
                </div>
            </div>
            {/* ... more offer cards ... */}
        </div>
    </div>

</div>
 <Footer />  {/* Insert the Footer at the bottom of the Welcome component */}
</div>

        </>
    );
}
