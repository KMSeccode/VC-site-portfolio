
/* Pequenas interações, sem bibliotecas externas. */

// Menu de navegação para dispositivos móveis
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const pageTabs = document.querySelectorAll(".page-tab");

const template = document.querySelector("[data-panel-template]");
const tabNames = ["qa", "fullstack", "jogos"];
const validTabs = new Set(tabNames);

tabNames.slice(1).forEach((tabName) => {
  const panel = template.cloneNode(true);
  panel.removeAttribute("data-panel-template");
  panel.dataset.panel = tabName;
  panel.classList.add(`panel-${tabName}`);
  panel.querySelectorAll("[id]").forEach((element) => {
    const originalId = element.id;
    element.id = `${originalId}-${tabName}`;
    panel.querySelectorAll(`a[href="#${originalId}"]`).forEach((link) => {
      link.setAttribute("href", `#${element.id}`);
    });
  });
  template.parentElement.appendChild(panel);
});

template.removeAttribute("data-panel-template");
template.dataset.panel = tabNames[0];
template.classList.add("qa-panel");
template.classList.add("panel-qa");
const panels = document.querySelectorAll("[data-panel]");

function customizeQaPanel(panel) {
  const heroTitle = panel.querySelector("h1");
  const heroDescription = panel.querySelector(".hero-description");
  const heroEyebrow = panel.querySelector(".hero-copy .eyebrow");
  const heroMeta = panel.querySelector(".hero-meta");
  const terminalTitle = panel.querySelector(".terminal-top span:not(.terminal-live)");
  const terminalBody = panel.querySelector(".terminal-body");
  const aboutTitle = panel.querySelector("#sobre h2");
  const aboutText = panel.querySelector(".about-text");
  const skillsTitle = panel.querySelector("#skills h2");
  const projectsTitle = panel.querySelector("#projetos h2");
  const contactTitle = panel.querySelector("#contato h2");
  const contactText = panel.querySelector("#contato .contact-inner > p:not(.eyebrow)");
  const skillCards = panel.querySelectorAll(".skill-card");
  const projectCards = panel.querySelectorAll(".project-card");
  const principles = panel.querySelectorAll(".principles > div");

  heroEyebrow.innerHTML = '<span class="status-dot"></span> QA ANALYST • QUALITY ENGINEERING';
  heroTitle.innerHTML = 'Olá! Sou Kauan,<br><span class="gradient-text"> Analista de QA.</span>';
  heroDescription.innerHTML = '<strong>Analista de QA</strong> com experiência em testes manuais, automação e APIs. Investigo riscos, encontro bugs e ajudo times a entregar software com mais confiança.';
  heroMeta.innerHTML = "<span>TEST STRATEGY</span><span>BUG HUNTING</span><span>QUALITY GATES</span>";
  terminalTitle.textContent = "test-runner.spec.js";
  terminalBody.innerHTML = `
    <p><span class="line-no">01</span> <span class="code-purple">suite</span>(<span class="code-green">"checkout"</span>, () =&gt; {</p>
    <p><span class="line-no">02</span> &nbsp; <span class="code-purple">it</span>(<span class="code-green">"validates payment flow"</span>, () =&gt; {</p>
    <p><span class="line-no">03</span> &nbsp;&nbsp; expect(response).toHaveStatus(<span class="code-orange">200</span>);</p>
    <p><span class="line-no">04</span> &nbsp;&nbsp; expect(bugs).toEqual(<span class="code-blue">[]</span>);</p>
    <p><span class="line-no">05</span> &nbsp; });</p>
    <p><span class="line-no">06</span> });</p>
    <p class="terminal-result"><span class="status-dot"></span> 42 checks passed • 0 regressions<span class="cursor">_</span></p>
  `;
  aboutTitle.innerHTML = 'Qualidade em cada etapa.<br><span class="muted">Risco sob controle, produto confiável.</span>';
  aboutText.textContent = "Atuo com testes manuais, funcionais, exploratórios e regressivos em aplicações web e mobile, nos ambientes de Desenvolvimento, Homologação e Produção. Tenho experiência com Cypress, Playwright, testes de API, SQL avançado, cenários BDD e documentação técnica. Em projetos de consórcio e ITSM/CSM, contribuí para estruturar mais de 190 cenários de teste e identificar mais de 60 bugs, incluindo a maior implementação ServiceNow da América Latina, no Banco do Nordeste. Trabalho em times Scrum e Kanban, utilizando Jira e ServiceNow e colaborando diretamente com desenvolvimento e stakeholders.";
  principles[0].querySelector("strong").textContent = "Experiência";
  principles[0].querySelector(".muted").textContent = "Sistemas de Consórcio (Web/Mobile), ServiceNow (ITSM/CSM/Catálogo)";
  principles[1].querySelector("strong").textContent = "Facilidade com Ferramentas";
  principles[1].querySelector(".muted").textContent = "Jira, ServiceNow, Cypress, Playwright, Postman.";
  principles[2].querySelector("strong").textContent = "Entrega Contínua";
  principles[2].querySelector(".muted").textContent = "Scrum, Kanban, GitHub Actions, pipelines de CI/CD.";
  skillsTitle.innerHTML = 'Meu kit de <span class="gradient-text">qualidade.</span>';
  projectsTitle.innerHTML = 'Evidências que <span class="gradient-text">falam por si.</span>';
  contactTitle.innerHTML = 'Vamos elevar a <span class="gradient-text">qualidade?</span>';
  contactText.textContent = "Estou aberto a oportunidades em QA, automação de testes e qualidade de software.";

  skillCards[0].querySelector("h3").textContent = "Testes funcionais";
  skillCards[0].querySelector("p").textContent = "Planejamento de cenários, testes exploratórios, regressão e validação de critérios de aceite.";
  skillCards[1].querySelector("h3").textContent = "Automação e API";
  skillCards[1].querySelector("p").textContent = "Criação de suítes E2E, validação de contratos e investigação de respostas de serviços.";
  skillCards[2].querySelector("h3").textContent = "Processo de qualidade";
  skillCards[2].querySelector("p").textContent = "Análise de risco, documentação de defeitos, evidências e colaboração com desenvolvimento.";

  projectCards[0].querySelector(".project-type").textContent = "01 — TESTES E2E";
  projectCards[0].querySelector("h3").textContent = "Automação de cenários críticos";
  projectCards[0].querySelector(".project-content > p:not(.project-type)").textContent = "Suíte de treino para validar jornadas web, encontrar regressões e registrar evidências reproduzíveis.";
  projectCards[1].querySelector(".project-type").textContent = "02 — QUALIDADE";
  projectCards[1].querySelector("h3").textContent = "Estratégia de testes automatizados";
  projectCards[1].querySelector(".project-content > p:not(.project-type)").textContent = "Cenários positivos e negativos organizados para cobrir riscos, acessibilidade e comportamento esperado.";
  projectCards[2].querySelector(".project-type").textContent = "03 — BUG HUNTING";
  projectCards[2].querySelector("h3").textContent = "Investigação de falhas";
  projectCards[2].querySelector(".project-content > p:not(.project-type)").textContent = "Análise de fluxos, reprodução de problemas e comunicação objetiva para acelerar a correção.";
}

customizeQaPanel(template);

function showTab(tabName, updateUrl = false) {
  const tab = validTabs.has(tabName) ? tabName : "qa";

  pageTabs.forEach((tabLink) => {
    const isActive = tabLink.dataset.tab === tab;
    tabLink.classList.toggle("is-active", isActive);
    tabLink.setAttribute("aria-current", isActive ? "page" : "false");
  });

  panels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== tab;
    panel.classList.toggle("is-active", panel.dataset.panel === tab);
  });

  document.body.className = `theme-${tab}`;

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("aba", tab);
    window.history.pushState({ tab }, "", url);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

const initialTab = new URLSearchParams(window.location.search).get("aba");
showTab(initialTab || "qa");

pageTabs.forEach((tabLink) => {
  tabLink.addEventListener("click", (event) => {
    event.preventDefault();
    showTab(tabLink.dataset.tab, true);
  });
});

window.addEventListener("popstate", () => {
  showTab(new URLSearchParams(window.location.search).get("aba"));
});

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (event) => {
    const currentPanel = link.closest(".tab-panel");
    const target = currentPanel
      ? currentPanel.querySelector(link.getAttribute("href"))
      : document.querySelector(`[data-panel="${new URLSearchParams(window.location.search).get("aba") || "qa"}"] ${link.getAttribute("href")}`);

    if (!target) return;

    event.preventDefault();
    if (!currentPanel) {
      target.closest(".tab-panel").scrollIntoView({ behavior: "smooth" });
    }
    window.setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 0);
  });
});

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Fechar menu" : "Abrir menu"
  );

  menuButton.textContent = isOpen ? "✕" : "☰";
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");

    menuButton.textContent = "☰";
  });
});

// Revela elementos conforme entram na tela
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
} else {
  // Alternativa para navegadores sem IntersectionObserver
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

// Atualiza automaticamente o ano no rodapé
document.querySelector("#year").textContent =
  new Date().getFullYear();
