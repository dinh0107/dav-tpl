(function () {
    document.querySelectorAll('[data-filter-select]').forEach(function (sel) {
        var label = sel.parentElement.querySelector('[data-filter-value]');
        if (!label) return;
        var update = function () {
            label.textContent = sel.options[sel.selectedIndex].text;
        };
        sel.addEventListener('change', update);
        update();
    });

    var modal = document.getElementById('cv-modal');
    if (!modal) return;

    var lastTrigger = null;

    var openModal = function (trigger) {
        lastTrigger = trigger || null;
        modal.hidden = false;
        document.body.classList.add('has-modal-open');
        var firstFocusable = modal.querySelector('[data-cv-close]');
        if (firstFocusable) firstFocusable.focus();
    };

    var closeModal = function () {
        modal.hidden = true;
        document.body.classList.remove('has-modal-open');
        if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    };

    document.querySelectorAll('[data-cv-open]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            openModal(btn);
        });
    });

    modal.querySelectorAll('[data-cv-close]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            closeModal();
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
})();
