
/* Eventos do projeto
Disciplina: WEB1
Aluno: Weslley Ferreira Félix - ADS 3ª Período */


function semResultado(){
    alert('Não há resultado para pesquisa');
  }

function redirecionar(){
  window.location.replace("https://colunadofla.com/2021/07/flamengo-e-favorito-nos-jogos-deste-fim-de-semana-e-defende-invencibilidade-no-cblol/")
}

function redirecionarpag1(){
  window.location.replace("https://ge.globo.com/esports/lol/noticia/caso-brtt-acao-da-red-canids-contra-flamengo-chega-ao-stj.ghtml")
}

function redirecionarpag2(){
  window.location.replace("https://maisesports.com.br/cblol-2021-atras-outros-times-truklax-miners/")
}

function noticianerf(){
  window.location.replace("https://dotesports.com/league-of-legends/news/riot-nerfs-akalis-ultimate-nocturnes-passive-on-minions-buffing-darius-passive-seraphine-q-damage-for-league-patch-11-14");
}

const inputSearch = document.querySelector('input[name="q"]')
document.querySelectorAll('#pesquisar-google')
  .forEach(btn => btn.addEventListener('click', search))

  function pesquisarGoogle(event) {
    event.preventDefault()
  
    const anchor = document.createElement('a')
    anchor.target = "_blank"
    anchor.href = `${event.target.getAttribute('formaction')}${encodeURI(inputSearch.value)}`
    anchor.click()
  }

function funcaoOption(pontos){
  alert(pontos)
}

function semResultado(){
  alert('Não há resultado para pesquisa');
}

function meugithub(){
  window.location.replace("https://github.com/Weslley-dev")
}

function cblol(){
  window.location.replace("https://www.techtudo.com.br/noticias/2021/01/cblol-2021-riot-games-avalia-retomada-presencial-no-2o-split-esports.ghtml")
}