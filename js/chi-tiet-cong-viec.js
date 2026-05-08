(function () {
    var drop = document.querySelector("[data-job-detail-upload]");
    var input = document.querySelector("#job-detail-cv");
    var choose = document.querySelector("[data-job-detail-choose-file]");
    var applyTop = document.querySelector("[data-job-detail-apply-scroll]");
    var formAnchor = document.querySelector("#job-detail-apply");

    if (choose && input) {
        choose.addEventListener("click", function () {
            input.click();
        });
    }

    if (drop && input) {
        drop.addEventListener("dragover", function (e) {
            e.preventDefault();
            drop.classList.add("is-dragover");
        });
        drop.addEventListener("dragleave", function () {
            drop.classList.remove("is-dragover");
        });
        drop.addEventListener("drop", function (e) {
            e.preventDefault();
            drop.classList.remove("is-dragover");
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                input.files = e.dataTransfer.files;
            }
        });
    }

    if (applyTop && formAnchor) {
        applyTop.addEventListener("click", function () {
            formAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
})();
