<template>
    <section class="bg-gray-50 py-20">
      <div class="max-w-6xl mx-auto px-6 text-center">
  
        <!-- Section Title -->
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">
          Our Services
        </h2>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Professional training programmes in Waterpolo and Swimming for all ages and levels.
        </p>
  
        <!-- Cards -->
        <div class="mt-12 grid md:grid-cols-2 gap-10">
  
          <!-- Waterpolo Card -->
          <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img 
              src="../assets/images/xelshot.jpg" 
              alt="Waterpolo"
              class="w-full h-56 object-cover"
            />
  
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">
                Waterpolo
              </h3>
              <p class="mt-3 text-gray-600">
                Competitive and youth waterpolo programmes focused on discipline,
                teamwork and elite performance development.
              </p>
            </div>
          </div>
  
          <!-- Swimming Card -->
          <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img 
              src="../assets/images/swimming.jpg" 
              alt="Swimming"
              class="w-full h-56 object-cover"
            />
  
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">
                Swimming
              </h3>
              <p class="mt-3 text-gray-600">
                Structured swimming lessons and competitive training
                for beginners to advanced athletes.
              </p>
            </div>
          </div>
  
        </div>
  
        <!-- Contact Button -->
        <div class="mt-12">
          <router-link
            to="/contact"
            class="inline-block bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition"
          >
            Contact Us
          </router-link>
        </div>
  
      </div>
    </section>
  </template>