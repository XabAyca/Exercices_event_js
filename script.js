/**************************************************************/
/* Exercice 1 et 1 bis */
/* On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console. 
Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic. */

let footer = document.getElementsByTagName('footer')[0]
let i=0

footer.addEventListener('click',function(){
  i = i +1
  console.log('clique numéro '+i);
});

/**************************************************************/
/* Exercice 2 */
/* On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar. Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader */

let hamburgerMenu = document.getElementsByClassName('navbar-toggler')[0];
let NavBar = document.getElementById('navbarHeader');

hamburgerMenu.addEventListener('click', function(){
  NavBar.classList.toggle('collapse');
});

/**************************************************************/
/* Exercice 3 */
/* À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer ! */

let cardHtmlBtn = document.querySelectorAll('div.card-body .btn')[1];
let cardText = document.querySelectorAll('div.card-body p')[0];

cardHtmlBtn.addEventListener('click',function(){
  cardText.style.color='red' 
});

/**************************************************************/
/* Exercice 4 */
/* On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe. */

let cardHtmlBtn2 = document.querySelectorAll('div.card-body .btn')[3];
let cardText2 = document.querySelectorAll('div.card-body p')[1];

cardHtmlBtn2.addEventListener('click', function(){
  if(cardText2.style.color === 'green'){
    cardText2.style.color= '';
  }else{
    cardText2.style.color = 'green';
  }
});

/**************************************************************/
/* Exercice 5 */
/* Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale). */

let bootstrapCdn = document.querySelector('head link');
let navBar = document.getElementsByTagName('header')[0];

navBar.addEventListener('dblclick',function(){
  if (bootstrapCdn.href==="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
    bootstrapCdn.href=""; 
  }else{
    bootstrapCdn.href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
});


/**************************************************************/
/* Exercice 6 */
/* T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.
La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale ! */

let cards = document.querySelectorAll('div.card');

for(let index=0; index < cards.length;index ++){
  let image   = cards[index].getElementsByTagName('img')[0];
  let text    = cards[index].getElementsByTagName('p')[0];
  let viewBtn = cards[index].querySelectorAll('button.btn-success')[0];

  viewBtn.addEventListener('mouseover', function(){
    if(image.style.width === '20%'){
      image.style.width ='';
      image.style.height='';
      text.classList.toggle('collapse')
    }else{
      image.style.width ='20%';
      image.style.height='20%';
      text.classList.toggle('collapse')
    }
  })
};

/**************************************************************/
/* Exercice 7 */
/* Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !*/

let allCards   = document.querySelectorAll('div.row')[1];
let greyButton = document.querySelectorAll('section.jumbotron a.btn')[1];

greyButton.addEventListener('click', function(){
  let firstCard  = allCards.querySelectorAll('div.col-md-4')[0];
  let lastCard   = allCards.querySelectorAll('div.col-md-4')[cards.length-1];
  document.getElementsByClassName('row')[1].insertBefore(lastCard, firstCard)
});

/**************************************************************/
/* Exercice 8 */
/* Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈 */

let blueButton = document.querySelectorAll('section.jumbotron a.btn')[0];

blueButton.addEventListener('click', function(event){
  let firstCard  = allCards.querySelectorAll('div.col-md-4')[0];
  let lastCard   = allCards.querySelectorAll('div.col-md-4')[cards.length-1];
  document.getElementsByClassName('row')[1].insertBefore(firstCard, null);
  event.preventDefault()
});

/**************************************************************/
/* Exercice 9 */
/* Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :
La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
Si l'utilisateur presse la touche "b", tout redevient normal.*/

let logoEl = document.querySelector('.navbar-brand');
let bodyEl = document.getElementsByTagName('body')[0];

logoEl.addEventListener('click',function(y){
  console.log(y);
  document.addEventListener('keydown', function(x){
    
    switch(x.key){
      case 'a':
        bodyEl.removeAttribute("class");
        bodyEl.classList.toggle('col-4');
        break;
      case 'y':
        bodyEl.removeAttribute("class");
        bodyEl.classList.toggle('col-4');
        bodyEl.classList.toggle('offset-md-4');
        break;
      case 'p':
        bodyEl.removeAttribute("class");
        bodyEl.classList.toggle('col-4');
        bodyEl.classList.toggle('offset-md-8');
        break;
      case 'b':
        bodyEl.removeAttribute("class")
    }
  })
});