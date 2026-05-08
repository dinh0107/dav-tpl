(function () {
    document.querySelectorAll(".header-top__user-wrap").forEach(function (wrap) {
        var btn = wrap.querySelector(".header-top__user");
        var menu = wrap.querySelector(".header-top__dropdown");
        if (!btn || !menu) return;

        function setOpen(open) {
            btn.setAttribute("aria-expanded", open ? "true" : "false");
            menu.hidden = !open;
            menu.setAttribute("aria-hidden", open ? "false" : "true");
            wrap.classList.toggle("header-top__user-wrap--open", open);
        }

        function isOpen() {
            return btn.getAttribute("aria-expanded") === "true";
        }

        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            setOpen(!isOpen());
        });

        document.addEventListener("click", function () {
            if (isOpen()) setOpen(false);
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" && isOpen()) setOpen(false);
        });
    });
})();
