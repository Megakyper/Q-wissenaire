window.addEventListener("DOMContentLoaded", () => {
    let test = document.querySelectorAll('.card-t')
    let n = test.length
    let act = 0
    function testimonials() {
        for (let i = 0; i < n; i++) {
            test[act].style.transform = 'translateX(0)'
            test[act].style.opacity = 1;
            if (i == (((act + 1) < n) ? act + 1 : 0))
                test[i].style.transform = "translateX(100vw)";
            else if (i == (((act - 1) >= 0) ? act - 1 : n - 1))
                test[i].style.transform = "translateX(-100vw)";
        }
    }
    testimonials()

    let nextT = document.getElementById("next-t");
    let prevT = document.getElementById("prev-t");

    nextT.onclick = function () {
        test[(act - 1 >= 0 ? act - 1 : n - 1)].style.opacity = 0;
        act = ((act + 1) < n) ? act + 1 : 0
        testimonials()
    };
    prevT.onclick = function () {
        test[(((act + 1) < n) ? act + 1 : 0)].style.opacity = 0;
        act = act - 1 >= 0 ? act - 1 : n - 1;
        testimonials()
    };

    setInterval(() => {
        test[(act - 1 >= 0 ? act - 1 : n - 1)].style.opacity = 0;
        act = ((act + 1) < n) ? act + 1 : 0
        testimonials()
    }, 3000);

})
