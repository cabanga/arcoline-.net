function renderComponent() {

    if (window.screen.availWidth > 768) {
        const { hash } = window.location;
        if (hash) {
           
            return Array.from(document.querySelectorAll('.page')).forEach(page => {

                if (page.dataset.route === hash) {
                    page.classList.add('active');
                    page.querySelector('.navbar-df') && renderMenu(page)
                }
                else page.classList.remove('active')
            })

        } else {
            return Array.from(document.querySelectorAll('.page')).forEach(page => {

                if (page.dataset.route === '#/about_us') page.classList.add('active'), renderMenu(page);
                else page.classList.remove('active');
            })
        }
    }

    else {
        return Array.from(document.querySelectorAll('.page')).forEach(page => {
            page.classList.add('active');
        })

    }
}
function renderMenu(section, active) {
/* links menu */

    const links = [
        { hash: 'about_us', text: 'Sobre Nós', className: 'lang', keyName:'About us', defaultRoute:true},
        { hash: "services", text: "Serviços", className: 'lang', keyName:'Services' },
        { hash: "recruitment", text: "Recrutamento", className: 'lang', idName: 'recrut', keyName:'Recruitment' },
        { hash: "news", text: "Notícias", className: 'lang', keyName:'News' },
        { hash: "contacts", text: "Contactos", className: 'lang', keyName:'Contacts' },
    ]

    const page = section.querySelector('.navbar-df')

    page.innerHTML = "";
    const createItem = function (dataItem, currentPage) {

        const component = currentPage.getAttribute('data-route')
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('key',dataItem.keyName);
        link.classList.add(dataItem.className)
        link.href = "#/" + dataItem.hash;
        dataItem.idName && (link.id = dataItem.idName);
        link.textContent = document.getElementById('translateID').value ==="pt"? dataItem.text: dataItem.keyName;


        link.addEventListener('click', function (e) {
            e.preventDefault();
            const idioma = document.getElementById('translateID')
            if (link.getAttribute('key') ==='Recruitment') {
                idioma.options[1].disabled = "disabled"
            } else {
                idioma.options[1].disabled = ""
              
            }

            if (link.innerText !== 'Recruitment') {
                window.location.hash = link.hash;
            }

            else {
                alert("Recruitment is only available for portuguese version.")
            }

        })
        if (link.hash == component) {
            link.classList.add('active-link')
        }

        item.appendChild(link);
        return item;
    }
    links.map((item) => createItem(item, section)).forEach(item => page.appendChild(item))
}

window.onload = function (e) {
    renderComponent();

    if (location.hash === "#/recruitment") {
        const pages = document.querySelectorAll('.page')
        Array.from(pages).forEach(function (page) {
           
            if (page.getAttribute('data-route') === '#/recruitment') {

                const idioma = document.getElementById('translateID')
                
                    idioma.options[1].disabled = "disabled"
            }
        })
       
    }
   
}
window.addEventListener('hashchange', function (e) {
    renderComponent()
})