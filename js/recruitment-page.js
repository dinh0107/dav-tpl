(function () {
    document.querySelectorAll(".recruitment-board__tabs").forEach(function (wrap) {
        var tabs = wrap.querySelectorAll('.recruitment-board__tab[role="tab"]');
        tabs.forEach(function (tab) {
            tab.addEventListener("click", function () {
                tabs.forEach(function (t) {
                    var active = t === tab;
                    t.classList.toggle("recruitment-board__tab--active", active);
                    t.setAttribute("aria-selected", active ? "true" : "false");
                });
            });
        });
    });

    document.querySelectorAll(".recruitment-hero__field--select").forEach(function (wrap) {
        var sel = wrap.querySelector(".recruitment-hero__select");
        var labelEl = wrap.querySelector(".recruitment-hero__select-label");
        if (!sel || !labelEl) return;
        function sync() {
            var opt = sel.options[sel.selectedIndex];
            labelEl.textContent = opt ? opt.textContent : "";
        }
        sel.addEventListener("change", sync);
        sync();
    });
})();
