// Start Logic of Tabs
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".tabs-content > div");
let divsArray = Array.from(divs);


// Start Logic For Tabs Array
tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });

    e.target.classList.add("active");

    divsArray.forEach((divs) => {
      divs.style.display = "none";
    });

    let activeContent = document.querySelector(e.target.dataset.cont);
    activeContent.style.display = "flex";
  });
});

const listItemsM = document.querySelectorAll(".tabs-mobile li");

listItemsM.forEach((item) => {
  const plusIcon = item.querySelector(".plus");
  const minsIcon = item.querySelector(".mins");

  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      // إذا كان العنصر نشطًا، يتم إخفاء المحتوى وإعادة الحالة الافتراضية
      item.classList.remove("active");
      plusIcon.style.display = "";
      minsIcon.style.display = "none";

      // إخفاء المحتوى الخاص بالعنصر
      const content = document.querySelector(item.getAttribute("data-cont"));
      if (content) {
        content.style.display = "none";
      }
    } else {
      // إعادة ضبط جميع العناصر الأخرى
      listItemsM.forEach((li) => {
        li.classList.remove("active");
        li.querySelector(".plus").style.display = "";
        li.querySelector(".mins").style.display = "none";

        // إخفاء المحتويات الأخرى
        const content = document.querySelector(li.getAttribute("data-cont"));
        if (content) {
          content.style.display = "none";
        }
      });

      // تفعيل العنصر الحالي
      item.classList.add("active");
      plusIcon.style.display = "none";
      minsIcon.style.display = "block";

      // إظهار المحتوى الخاص بالعنصر
      const content = document.querySelector(item.getAttribute("data-cont"));
      if (content) {
        content.style.display = "block";
      }
    }
  });
});

// End Logic of Tabs Mobile

// Start logic for menu icon
const menuIcon = document.querySelector(".menu-icon");
const xIcon = document.querySelector(".x-icon");
const menuMobile = document.querySelector(".menu-mobile");
const divLogo =  document.querySelector(".div-logo");

function handleResize() {
  if (window.innerWidth >= 1025) {
    menuMobile.classList.remove("open");
    menuIcon.classList.remove("show");
    xIcon.classList.remove("show");
    divLogo.style.order = '';
  } else {
    menuMobile.classList.remove("open");
    menuIcon.classList.add("show");
    xIcon.classList.remove("show");
    divLogo.style.order = 2;
  }
}

menuIcon.addEventListener("click", () => {
  menuMobile.classList.add("open");
  menuIcon.classList.remove("show");
  xIcon.classList.add("show");
  divLogo.style.order = 2;
});

xIcon.addEventListener("click", () => {
  menuMobile.classList.remove("open");
  menuIcon.classList.add("show");
  xIcon.classList.remove("show");
});

window.addEventListener("resize", handleResize);
handleResize();




// End logic for menu icon

// Contact Us Section
/* ===== Reveal-on-scroll (يحُدث لكل العناصر) ===== */
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
      obs.unobserve(e.target); // أوقف المراقبة بعد الظهور
    }
  });
});
document.querySelectorAll("[data-anim]").forEach((el) => observer.observe(el));
