import { Link, Head } from '@inertiajs/react';
import MainCarousel from './Main/MainCarousel';  // Adjust the path if necessary

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Nove" />

            <div className="container-fluid" dir="rtl">

                <div className="login-register m-3">
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

                <nav className="navbar navbar-expand-lg m-2">
                    <div className="container-fluid">
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
                            <ul className="navbar-nav ml-auto">
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
                        </div>
                        <div className="login-search">
                            <div className="search-bar">
                                <input type="text" placeholder="ابحث عن منتجات..." className="form-control" />
                                <button className="btn btn-primary">بحث</button>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="main-container">
                    <div className="brands-section">
                        <div className="container">

                        </div>
                    </div>
                    <div className="categories-section">
                        <div className="container">
                        <MainCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
