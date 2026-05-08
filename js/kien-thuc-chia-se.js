(function () {
    var tabs = document.querySelectorAll('.knowledge__tab');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('is-active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('is-active');
            tab.setAttribute('aria-selected', 'true');
        });
    });

    document.querySelectorAll('.knowledge-card__action--delete').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var card = btn.closest('.knowledge-card');
            if (!card) return;
            if (window.confirm('Xoá bài viết này?')) card.remove();
        });
    });
})();
