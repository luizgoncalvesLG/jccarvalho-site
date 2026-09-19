// J. Carvalho Advogados — script simples, sem dependências
(function () {
  "use strict";

  // Menu mobile (hambúrguer)
  var toggle = document.getElementById("navToggle");
  var navBar = toggle ? toggle.closest(".nav") : null;

  if (toggle && navBar) {
    toggle.addEventListener("click", function () {
      var isOpen = navBar.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    // Fecha o menu ao clicar em qualquer link da navegação
    var navLinks = navBar.querySelectorAll(".links a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navBar.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  // Ano atual no rodapé
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
