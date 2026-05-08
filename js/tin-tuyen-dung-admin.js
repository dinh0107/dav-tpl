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

    document.querySelectorAll('.jobs__action-btn--pause').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var icon = btn.querySelector('i');
            if (!icon) return;
            var paused = icon.classList.contains('fa-play');
            icon.classList.toggle('fa-pause', paused);
            icon.classList.toggle('fa-play', !paused);
            btn.setAttribute('aria-label', paused ? 'Tạm dừng hiển thị' : 'Tiếp tục hiển thị');
            var row = btn.closest('.jobs__table-row');
            var tag = row && row.querySelector('.jobs__tag');
            if (!tag) return;
            if (paused) {
                tag.textContent = 'Đang hiển thị';
                tag.classList.add('jobs__tag--active');
                tag.classList.remove('jobs__tag--paused');
            } else {
                tag.textContent = 'Đã tạm dừng';
                tag.classList.remove('jobs__tag--active');
                tag.classList.add('jobs__tag--paused');
            }
        });
    });
})();
