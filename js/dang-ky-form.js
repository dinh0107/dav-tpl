(function () {
    document.querySelectorAll('[data-pwd-toggle]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var input = document.getElementById(btn.getAttribute('data-pwd-toggle'));
            var icon = btn.querySelector('i');
            if (!input || !icon) return;
            var hidden = input.type === 'password';
            input.type = hidden ? 'text' : 'password';
            icon.classList.toggle('fa-eye-slash', !hidden);
            icon.classList.toggle('fa-eye', hidden);
        });
    });

    document.querySelectorAll('.register-form__input--file input[type="file"]').forEach(function (input) {
        input.addEventListener('change', function () {
            var nameEl = input.closest('.register-form__input--file').querySelector('.register-form__file-name');
            if (!nameEl) return;
            nameEl.textContent = input.files[0] ? input.files[0].name : (nameEl.dataset.placeholder || 'Chọn tệp...');
        });
    });

    document.querySelectorAll('[data-toggle-target]').forEach(function (cb) {
        var target = document.querySelector(cb.getAttribute('data-toggle-target'));
        if (!target) return;
        var update = function () { target.hidden = !cb.checked; };
        cb.addEventListener('change', update);
        update();
    });
})();
