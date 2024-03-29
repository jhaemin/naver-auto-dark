const isSystemDarkMode =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const isNaverDarkMode =
  document.documentElement.getAttribute('data-dark') === 'true'

const naverDarkModeButton = document.getElementById('NM_darkmode_btn')

naverDarkModeButton.style.transition = 'opacity 1000ms ease, filter 1000ms ease, transform 1000ms ease'
naverDarkModeButton.getBoundingClientRect()
naverDarkModeButton.style.opacity = '0'
naverDarkModeButton.style.filter = 'blur(8px)'
naverDarkModeButton.style.transform = 'scale(0.9)'
naverDarkModeButton.style.pointerEvents = 'none'

if (isSystemDarkMode !== isNaverDarkMode) {
  setTimeout(() => {
    naverDarkModeButton.click()
  }, 100)
}

const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')

if (matchMedia) {
  matchMedia.addEventListener('change', (e) => {
    naverDarkModeButton.click()
  })
}

// remove class "type_dark"
// change attribute "data-dark" to "false"
