const resources = [
    {
        category: "HTML",
        info1:"HTML",
        info: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        info1: "CSS",
        info: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        info1: "JavaScript",
        info: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        info1: "React",
        info: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity",
        info1: "Sanity",
        info: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


// Denne koden under er en kode for å overføre HTML-meny som henter data fra en resources array. Map() funksjonen går gjennom hvert element og bygger opp HTML- koden. Og til slutt er resultatet inn i  menu elementet i HTML-dokumentete

let Menu = ``;

      resources.map((resources) => {
        
        let sourceLinks = ``;
        resources.sources.forEach((item) => {
            sourceLinks += `
        <li><a target="_blank" href=${item.url}>${item.title}</a></li>`;

        });
        
        Menu += `
        <seaction class="MenuItem ">
        <button oneclick="Menu()">${resources.category}</button>
          <div class="open">
          <p class="text1">${resources.info1}</p> 
          <p class="text">${resources.info}</p>
          <ul class="subMenu">
                ${sourceLinks}
          </ul>
          </div>
      </seaction>`;
   
      })
     
        menu.innerHTML = `
    <ul>
      
        ${Menu}
    </ul>`;


    // Kilde:
    // https://stackoverflow.com/questions/72696939/rewrite-js-map-into-a-foreach
    // https://code.tutsplus.com/tutorials/javascript-map-vs-foreach-when-to-use-each-one--cms-38365

    

   

      
