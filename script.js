// set the variable to the desired site title
let SITE_TITLE = 'The Masters Guide to Keyboard Shortcuts'

// set the variable to the desired icon url
let ICON_URL = 'https://RockGamerAK.com/RockGamerAK-Favicon.png'

//get the page that we are on
let page = location.href.split(location.host)[1]

let title
// if
if (page === '/') {
  title = SITE_TITLE
}
else {
  title = page.substring(1).split('.')[0]

  if (title === 'Windows%20(10%20and%20up)') {
    title = `Windows (10 and up) | ${SITE_TITLE}`
  }
  else if (title === 'Chrome%20OS/Linux') {
    title = `Chrome OS/Linux | ${SITE_TITLE}`
  }
  else {
    title = `${title} | ${SITE_TITLE}`
  }

}

document.title = title

let link = document.createElement('link')
link.setAttribute('rel', 'icon')
link.setAttribute('href', ICON_URL)
document.head.appendChild(link)