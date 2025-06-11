document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Highlight active section while scrolling
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Set initial active link
    document.querySelector('.nav-links a[href="#home"]').classList.add('active');
});

// Seleccionamos elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];

// Seleccionar todas las imágenes con clase cert-img
const images = document.querySelectorAll(".cert-img");

// Agregar evento click a cada imagen
images.forEach(img => {
  img.style.cursor = "pointer"; // cambiar cursor para indicar click
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = img.alt || "";
  });
});

// Evento para cerrar el modal cuando se hace click en la X
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// También cerrar el modal si el usuario hace click fuera de la imagen
modal.onclick = function(event) {
  if(event.target === modal) {
    modal.style.display = "none";
  }
}

// Responsive font size adjustment
window.addEventListener('resize', () => {
  const width = window.innerWidth;

  if (width < 768) {
    document.body.style.fontSize = '14px';
  } else {
    document.body.style.fontSize = '16px';
  }
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".nav-links").classList.toggle("active");
});


