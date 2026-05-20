document.addEventListener('DOMContentLoaded', function() {
    const closeBannerBtn = document.getElementById('closeBannerBtn');
    const banner = document.getElementById('banner');

    if (closeBannerBtn && banner) {
        closeBannerBtn.addEventListener('click', function() {
            banner.classList.remove('d-flex');
            banner.classList.add('d-none');
        });
    }
});