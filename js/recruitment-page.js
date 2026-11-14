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

    var mobileMedia = window.matchMedia("(max-width: 767px)");
    var toggleBtn = document.getElementById("recruitment-filter-toggle");
    var panel = document.getElementById("recruitment-filter-panel");
    var overlay = document.getElementById("recruitment-filter-overlay");
    var closeBtn = document.getElementById("recruitment-filter-close");

    if (toggleBtn && panel && overlay) {
        function setFilterOpen(open) {
            var isMobile = mobileMedia.matches;
            var shouldOpen = isMobile && open;

            toggleBtn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
            panel.classList.toggle("recruitment-filter--open", shouldOpen);
            overlay.classList.toggle("recruitment-filter-overlay--open", shouldOpen);
            document.body.classList.toggle("recruitment-filter-open", shouldOpen);
            panel.hidden = !isMobile;
            panel.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
            overlay.hidden = !shouldOpen;
            overlay.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
        }

        function syncByViewport() {
            if (mobileMedia.matches) {
                setFilterOpen(false);
                panel.hidden = true;
                panel.setAttribute("aria-hidden", "true");
            } else {
                panel.hidden = false;
                panel.setAttribute("aria-hidden", "false");
                overlay.hidden = true;
                overlay.setAttribute("aria-hidden", "true");
                overlay.classList.remove("recruitment-filter-overlay--open");
                panel.classList.remove("recruitment-filter--open");
                document.body.classList.remove("recruitment-filter-open");
                toggleBtn.setAttribute("aria-expanded", "false");
            }
        }

        toggleBtn.addEventListener("click", function () {
            setFilterOpen(!panel.classList.contains("recruitment-filter--open"));
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                setFilterOpen(false);
            });
        }

        overlay.addEventListener("click", function () {
            setFilterOpen(false);
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setFilterOpen(false);
            }
        });

        if (mobileMedia.addEventListener) {
            mobileMedia.addEventListener("change", syncByViewport);
        } else if (mobileMedia.addListener) {
            mobileMedia.addListener(syncByViewport);
        }

        syncByViewport();
    }
})();
