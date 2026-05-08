(function () {
    var bannerInput = document.getElementById('ar-banner');
    if (bannerInput) {
        bannerInput.addEventListener('change', function () {
            var nameEl = bannerInput.closest('.article-banner__upload').querySelector('.article-banner__name');
            if (!nameEl) return;
            nameEl.textContent = bannerInput.files && bannerInput.files[0]
                ? bannerInput.files[0].name
                : (nameEl.dataset.placeholder || 'Không có file nào được chọn');
        });
    }

    var contentEl = document.getElementById('ar-content');
    if (contentEl && window.ClassicEditor) {
        ClassicEditor
            .create(contentEl, {
                toolbar: [
                    'heading', '|',
                    'bold', 'italic', 'underline', 'strikethrough', '|',
                    'link', 'bulletedList', 'numberedList', '|',
                    'blockQuote', 'insertTable', '|',
                    'undo', 'redo'
                ],
                placeholder: 'Nhập nội dung bài viết...'
            })
            .catch(function (err) { console.error(err); });
    }

    var form = document.getElementById('article-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            window.alert('Đăng bài thành công (demo)');
        });
    }
})();
