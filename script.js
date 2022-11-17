var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ]
  
  // Task 1.0
  const mainEl = document.querySelector('main')
  
  // Task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)'
  
  // Task 1.2
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
  
  // Task 1.3
  mainEl.classList.add('flex-ctr')
  
  // Task 2.0
  const topMenuEl = document.getElementById('top-menu')
  
  // Task 2.1
  topMenuEl.style.height = '100%'
  
  // Task 2.2
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
  
  // Task 2.3
  topMenuEl.classList.add('flex-around')
  
  // Task 3.0
  // Done 
  
  // Task 3.1
  for (let i of menuLinks) {
      let newEl = document.createElement('a')
      newEl.setAttribute('href', i.href)
      newEl.innerText = i.text
      topMenuEl.appendChild(newEl)
  }
  
  // Task 4.0
  const subMenuEl = document.getElementById('sub-menu')
  
  // Task 4.1
  subMenuEl.style.height = '100%'
  
  // Task 4.2
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
  
  // Task 4.3
  subMenuEl.classList.add('flex-around')
  
  // Task 4.4
subMenuEl.style.position = 'absolute'
  
  // Task 4.5
subMenuEl.style.top = 0
  
  // Task 5.0
  // Done
  
// Task 5.1
const topMenuLinks = topMenuEl.getElementsByTagName('a')
const showingSubMenu = false

// Tasks 5.2 through 5.8

topMenuEl.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target != 'a') {
    return
  }
  console.log(e.target)

  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }

  for (i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classlist.remove('active')
  }

  e.target.classlist.add('active')

  const linkObject = e.target.textContent
  
  if (linkObject.subLinks) {
    showingSubMenu = true
  } else {
    showingSubMenu = false
  }

  if (showingSubMenu == true) {
    buildSubMenu(sublinks)
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = '0'
  }
})

const buildSubMenu = (sublinks) => {
  subMenuEl = ''
  for (x = 0; x < sublinks.length; x++) {
    let newAElement = document.createElement('a')
    newAElement.setAttribute('href', sublinks[i].href)
    newAElement.textContent = linkObject.textContent
    subMenuEl.append(newAElement)
  }
}

  // Tasks 6.0 through 6.4

subMenuEl.addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target != 'a') {
    return
  }
  console.log(e.target)
  showingSubMenu = false
  subMenuEl.style.top = '0'
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }
  mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`
})