(function () {
    var root = document.querySelector(".header-mobile");
    if (!root) return;

    var toggleBtn = document.getElementById("header-mobile-toggle");
    var closeBtn = document.getElementById("header-mobile-close");
    var menu = document.getElementById("header-mobile-menu");
    var overlay = document.getElementById("header-mobile-overlay");
    if (!toggleBtn || !menu || !overlay) return;

    function setMenuOpen(open) {
        toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
        menu.hidden = !open;
        menu.setAttribute("aria-hidden", open ? "false" : "true");
        overlay.hidden = !open;
        overlay.setAttribute("aria-hidden", open ? "false" : "true");
        menu.classList.toggle("header-mobile__menu--open", open);
        overlay.classList.toggle("header-mobile__overlay--visible", open);
        root.classList.toggle("header-mobile--open", open);
        document.body.classList.toggle("header-mobile-menu-open", open);
    }

    function isMenuOpen() {
        return toggleBtn.getAttribute("aria-expanded") === "true";
    }

    toggleBtn.addEventListener("click", function () {
        setMenuOpen(!isMenuOpen());
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            setMenuOpen(false);
        });
    }

    overlay.addEventListener("click", function () {
        setMenuOpen(false);
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && isMenuOpen()) setMenuOpen(false);
    });

    root.querySelectorAll(".header-mobile__nav-toggle").forEach(function (btn) {
        var item = btn.closest(".header-mobile__has-sub");
        if (!item) return;

        btn.addEventListener("click", function () {
            var open = item.classList.toggle("header-mobile__has-sub--open");
            btn.setAttribute("aria-expanded", open ? "true" : "false");
        });
    });

    root.querySelectorAll(".header-mobile__lang-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            root.querySelectorAll(".header-mobile__lang-btn").forEach(function (b) {
                var active = b === btn;
                b.classList.toggle("is-active", active);
                b.setAttribute("aria-pressed", active ? "true" : "false");
            });
        });
    });
})();
