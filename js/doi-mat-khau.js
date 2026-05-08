(function () {
    var form = document.getElementById('change-password-form');
    if (!form) return;

    var current = form.querySelector('#cp-current');
    var next = form.querySelector('#cp-new');
    var confirm = form.querySelector('#cp-confirm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!current.value || !next.value || !confirm.value) {
            alert('Vui lòng nhập đầy đủ các trường mật khẩu.');
            return;
        }
        if (next.value !== confirm.value) {
            alert('Mật khẩu xác nhận không khớp.');
            confirm.focus();
            return;
        }
        alert('Đổi mật khẩu thành công.');
        form.reset();
    });

    form.addEventListener('reset', function () {
        setTimeout(function () { current.focus(); }, 0);
    });
})();
