const champions = [
  {name:"Arbiter",slug:"arbiter",rarity:"LEGENDARIA",affinity:"Vacío",role:"Apoyo",content:["Arena"],summary:"Aceleración, aumento de medidor de turno y apoyo para equipos de Arena.",initial:"A",glow:"#60467f",href:"campeones/arbiter.html"},
  {name:"Kael",slug:"kael",rarity:"ÉPICA",affinity:"Magia",role:"Progresión",content:["PvE","Jefe de Clan"],summary:"Campeón de progresión útil para daño por veneno en distintas fases de la cuenta.",initial:"K",glow:"#375e79",href:"campeones/kael.html"},
  {name:"Duchess Lilitu",slug:"duchess-lilitu",rarity:"LEGENDARIA",affinity:"Vacío",role:"Apoyo",content:["Arena","Hydra","PvE"],summary:"Apoyo defensivo para proteger al equipo y mejorar su capacidad de sobrevivir.",initial:"D",glow:"#6e3d54",href:"campeones/duchess-lilitu.html"}
];
const grid = document.querySelector("#champion-grid");
const search = document.querySelector("#search");
const roleFilter = document.querySelector("#role-filter");
const contentFilter = document.querySelector("#content-filter");
const count = document.querySelector("#result-count");

function renderChampions(){
  const term = search.value.trim().toLocaleLowerCase("es");
  const role = roleFilter.value;
  const content = contentFilter.value;
  const filtered = champions.filter(c =>
    c.name.toLocaleLowerCase("es").includes(term) &&
    (!role || c.role === role) &&
    (!content || c.content.includes(content))
  );
  count.textContent = `${filtered.length} ${filtered.length === 1 ? "ficha" : "fichas"}`;
  grid.innerHTML = filtered.length ? filtered.map(c => `
    <article class="champion-card">
      <div class="card-art" style="--glow:${c.glow}">
        <span class="rarity">${c.rarity}</span><span class="monogram" aria-hidden="true">${c.initial}</span>
        <span class="role-pill">${c.role}</span>
      </div>
      <div class="card-body">
        <h3>${c.name}</h3>
        <div class="card-meta">AFINIDAD: ${c.affinity.toUpperCase()} · ${c.content.join(" / ").toUpperCase()}</div>
        <p>${c.summary}</p>
        <a class="card-link" href="${c.href}">Consultar ficha <span>↗</span></a>
      </div>
    </article>`).join("") : `<div class="empty-state">No hay campeones que coincidan. Prueba con otro nombre o filtro.</div>`;
}
[search, roleFilter, contentFilter].forEach(el => el.addEventListener("input", renderChampions));
renderChampions();
