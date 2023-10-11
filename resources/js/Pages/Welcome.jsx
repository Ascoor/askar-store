import { Link, Head } from '@inertiajs/react';
import MainCarousel from './Main/MainCarousel';
import Footer from './Main/Footer';
import ProductCard from './Main/ProductsCard';
import BrandCard from './Main/BrandCard';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Nove" />

            <div className="container-fluid">

                {/* Login/Register Bar */}
                <div className="d-flex justify-content-start p-2 bg-dark border-bottom">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="btn-link">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="btn-link m-2">
                                تسجيل الدخول
                            </Link>
                            <Link href={route('register')} className="btn-link m-2">
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
                                <button className="btn btn-outline-light" type="submit">بحث</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className='main-container mx-auto'>

                    {/* Image Slider */}
                    <div className="container mb-4">
                        <MainCarousel />
                    </div>

                    <div className="container mb-4">
                        <ProductCard />
                    </div>
                    <div className="container mb-4">
                        <BrandCard />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
