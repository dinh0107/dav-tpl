(function () {
    document.querySelectorAll('.app-sidebar__copy').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var textEl = btn.parentElement.querySelector('.app-sidebar__id-text');
            if (!textEl) return;
            var text = textEl.textContent.trim();
            var done = function () {
                var icon = btn.querySelector('i');
                if (!icon) return;
                var prev = icon.className;
                icon.className = 'fa-solid fa-check';
                setTimeout(function () { icon.className = prev; }, 1200);
            };
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done, done);
            } else {
                var ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.style.position = 'absolute';
                ta.style.left = '-9999px';
                document.body.appendChild(ta);
                ta.select();
                try { document.execCommand('copy'); } catch (e) { /* noop */ }
                document.body.removeChild(ta);
                done();
            }
        });
    });

    document.querySelectorAll('form[data-profile-form]').forEach(function (form) {
        var scope = form.closest('.profile-card') || document;
        var editBtn = scope.querySelector('[data-profile-edit]');
        var actions = scope.querySelector('[data-profile-actions]');
        var saveBtn = scope.querySelector('[data-profile-save]');
        var cancelBtn = scope.querySelector('[data-profile-cancel]');
        if (!editBtn || !actions || !saveBtn || !cancelBtn) return;

        var fields = form.querySelectorAll('input, select, textarea');

        var snapshot = function () {
            var data = [];
            fields.forEach(function (el) {
                data.push(el.type === 'checkbox' || el.type === 'radio' ? el.checked : el.value);
            });
            return data;
        };

        var restore = function (data) {
            fields.forEach(function (el, i) {
                if (el.type === 'checkbox' || el.type === 'radio') el.checked = data[i];
                else el.value = data[i];
            });
        };

        var setEditing = function (editing) {
            form.classList.toggle('is-editing', editing);
            fields.forEach(function (el) { el.disabled = !editing; });
            editBtn.hidden = editing;
            actions.hidden = !editing;
            if (editing) {
                var first = form.querySelector('input:not([type=radio]):not([type=checkbox]):not([type=file]), select, textarea');
                if (first) first.focus();
            }
        };

        var initial = snapshot();

        editBtn.addEventListener('click', function () {
            initial = snapshot();
            setEditing(true);
        });

        cancelBtn.addEventListener('click', function () {
            restore(initial);
            setEditing(false);
        });

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            initial = snapshot();
            setEditing(false);
        });
    });
})();
