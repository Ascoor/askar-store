// Libraries
import axios from 'axios';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import '../css/app.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Configurations
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
