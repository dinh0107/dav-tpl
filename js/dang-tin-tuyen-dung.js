(function () {
    var negotiable = document.querySelector('[data-salary-negotiable]');
    var salaryGroup = document.querySelector('[data-salary-group]');
    if (negotiable && salaryGroup) {
        var inputs = salaryGroup.querySelectorAll('input, select');
        var apply = function () {
            salaryGroup.classList.toggle('is-disabled', negotiable.checked);
            inputs.forEach(function (el) { el.disabled = negotiable.checked; });
        };
        negotiable.addEventListener('change', apply);
        apply();
    }

    if (window.ClassicEditor) {
        var toolbar = [
            'bold', 'italic', 'strikethrough', '|',
            'link', '|',
            'numberedList', 'bulletedList', '|',
            'outdent', 'indent', '|',
            'sourceEditing', 'mediaEmbed'
        ];
        document.querySelectorAll('[data-job-editor]').forEach(function (el) {
            ClassicEditor.create(el, {
                toolbar: { items: toolbar, shouldNotGroupWhenFull: true },
                placeholder: 'Nhập nội dung...'
            }).catch(function () { /* noop */ });
        });
    }

    var form = document.getElementById('addjob-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Đã đăng tin tuyển dụng (demo).');
    });
})();
