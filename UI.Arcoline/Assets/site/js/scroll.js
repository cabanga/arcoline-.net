
window.onscroll = function (e) {

  if (this.scrollY >= (this.innerHeight * 0.4)) {
      const header = this.document.querySelector('header.header-app')

      if(!header.classList.contains('fixed')){
          header.classList.add('fixed')
      }
  } else{
      this.document.querySelector('header.header-app').classList.remove('fixed')
  }
}