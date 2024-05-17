var open = false
var small_device = window.matchMedia('(max-width: 321px)')
var medium_device = window.matchMedia('(max-width: 376px)')
var giga_device = window.matchMedia('(max-width: 426px)')
var tablet_device = window.matchMedia('(max-width: 769px)')
var laptop_device = window.matchMedia('(max-width: 1025px)')
var giga_laptop_device = window.matchMedia('(max-width: 1441px)')

function OpenMenu(){
    var menu_span = document.getElementById('menu_span')
    var menu = document.getElementById('menu')
    var list_menu = document.getElementById('list_menu')
    var menu_button = document.getElementById('btn_menu')

    if (!open){
        menu_span.classList.remove('eva--menu-outline')
        menu_span.classList.add('ic--round-menu-open')
        menu.style.boxShadow = '0px 30px 30px #00000023';
        if (small_device.matches){
            menu.style.height = '3.3%'
        } else if(medium_device.matches){
            menu.style.height = '3.3%'
        } else if(giga_device.matches){
            menu.style.height = '3.3%'
        } else if(tablet_device.matches){
            menu.style.height = '3.3%'
        } else if(laptop_device.matches){
            menu.style.height = '3.8%'
        } else if(giga_laptop_device.matches){
            menu.style.height ='3.3%'
        }
        else {
            menu.style.height = '2.7%'
        }
        menu.style.width = '100%'
        list_menu.style.display = 'inline'
        menu_button.style.boxShadow = 'none'
        setTimeout(() => list_menu.style.opacity = '100%', 800)
        open = !open
    } else {
        menu_span.classList.remove('ic--round-menu-open')
        menu_span.classList.add('eva--menu-outline')
        setTimeout(() => menu_button.style.boxShadow = '0px 0px 20px #00000023', 1300)
        menu.style.width = '0'
        menu.style.height = '0'
        menu.style.boxShadow = 'none';
        list_menu.style.display = 'none';
        list_menu.style.opacity = '0%'
        open = !open
    }
} 


function card_insert(){
    var card = document.getElementById('card')
    var text = document.getElementById('screen_text')
    var yes_btn = document.getElementById('button_yes')
    var no_btn = document.getElementById('button_no')

    card.style.animation = 'card_inside 1s forwards ease-in-out'
    card.classList.add('nohover')
    setTimeout(() => text.textContent = 'Reading', 1000)
    setTimeout(()=> text.style.animation = 'none', 3000)
    setTimeout(()=> text.style.marginBottom = '0', 3000)
    setTimeout(()=> yes_btn.style.display = 'inline', 3000)
    setTimeout(()=> no_btn.style.display = 'inline', 3000)
    setTimeout(()=> text.textContent = 'Ola xxxx-xxx, deseja fazer um deposito?', 3000)
}

function no_deposit(){
    var card = document.getElementById('card')
    var text = document.getElementById('screen_text')
    var yes_btn = document.getElementById('button_yes')
    var no_btn = document.getElementById('button_no')
    var ok_btn = document.getElementById('button_ok')

    yes_btn.style.display = 'none'
    no_btn.style.display = 'none'
    ok_btn.style.display = 'none'

    text.style.marginBottom = 'calc(20% + 50px)'
    text.textContent = 'please insert your cart'
    text.style.animation = 'off_and_on 1s infinite ease-in-out'
    card.style.animation = 'none'
    card.style.animation = 'card_inside_reverse 1s forwards ease-in-out'
    setTimeout(() => card.style.animation = 'card_shining 2s infinite ease-in-out', 1000)
    card.classList.remove('nohover')
}

function yes_deposit(){
    var card = document.getElementById('card')
    var text = document.getElementById('screen_text')
    var yes_btn = document.getElementById('button_yes')
    var no_btn = document.getElementById('button_no')
    var ok_btn = document.getElementById('button_ok')

    yes_btn.style.display = 'none'
    no_btn.style.display = 'none'
    text.style.marginBottom = 'calc(20% + 50px)'
    text.textContent = 'descarregando bateria, por favor espere'
    text.style.animation = 'off_and_on 1s infinite ease-in-out'
    setTimeout(()=> text.style.animation = 'none', 3000)
    setTimeout(()=> text.style.marginBottom = '0', 3000)
    setTimeout(()=> ok_btn.style.display = 'inline', 3000)
    setTimeout(() => text.textContent = 'Sua bateria tinha uma carga de 1 kilowatts. Voce economizou R$0,92 em sua conta de luz, hoje. Parabens!', 3000)
}
