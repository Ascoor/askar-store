
<template>
  <div class="container-fluid" :dir="rtl">

    <!-- شريط علوي -->
    <div class="login-register m-3">
      <a href="#">تسجيل الدخول</a>
      <span class="divider">|</span>
      <a href="#">الاشتراك</a>
    </div>
    <nav class="navbar navbar-expand-lg m-2">
      <div class="container-fluid">
        <!-- شعار المتجر -->
        <a class="navbar-brand" href="#">
          <img src="/images/logo-brand.png" alt="شعار المتجر" class="logo-brand" />
        </a>
        
        <!-- زر القائمة المنسدلة (Toggle Button) -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- القائمة -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">الرئيسية</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">المنتجات</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">العلامات التجارية</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">التصنيفات</a>
            </li>
          </ul>
        </div>
        
        <!-- شريط التسجيل والبحث -->
        <div class="login-search">
         
          <div class="search-bar">
            <input type="text" placeholder="ابحث عن منتجات..." class="form-control" />
            <button class="btn btn-primary">بحث</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- المحتوى الرئيسي -->
    <div class="main-container">
  
    <!-- قسم العلامات التجارية -->
    <div class="brands-section">
      <div class="container">
        <!-- محتوى قسم العلامات التجارية -->
      </div>
    </div>

    <!-- قسم التصنيفات -->
    <div class="categories-section">
      <div class="container">
        <!-- محتوى قسم التصنيفات -->
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>