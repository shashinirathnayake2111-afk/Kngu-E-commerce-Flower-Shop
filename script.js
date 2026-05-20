document.addEventListener('DOMContentLoaded', function() {
    const closeBannerBtn = document.getElementById('closeBannerBtn');
    const banner = document.getElementById('banner');

    if (closeBannerBtn && banner) {
        closeBannerBtn.addEventListener('click', function() {
            banner.classList.remove('d-flex');
            banner.classList.add('d-none');
        });
    }

    // Features link active state toggle
    const featureLinks = document.querySelectorAll('.features-link a');
    featureLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor jump
            
            // Remove active class from all links
            featureLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});