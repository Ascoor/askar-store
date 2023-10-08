<template>
    <div>
      <Head :title="title" />
  
      <Banner />
  
      <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
        <nav class="navbar navbar-expand-lg navbar-light bg-light rtl">
          <div class="container">
            <!-- Logo -->
            <router-link class="navbar-brand" :to="route('dashboard')">
              <ApplicationMark />
            </router-link>
  
            <!-- Hamburger Button -->
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
  
            <!-- Navigation Links -->
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <!-- Page Content -->
        <main>
          <slot />
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Head, Link, router } from '@inertiajs/vue3';
  import ApplicationMark from '@/Components/ApplicationMark.vue';
  import Banner from '@/Components/Banner.vue';
  
  defineProps({
    title: String,
  });
  </script>
  