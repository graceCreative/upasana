let openNav = document.querySelector(".nav-icon")
      let closenav = document.querySelector(".close")
      let sideBar = document.querySelector(".nav")
      let dark = document.querySelector(".dark")
      let light = document.querySelector(".light")
      let body = document.querySelector("body")
      let cancel = document.querySelector(".cancel")
      let home = document.querySelector(".home")
      let audio = document.querySelector(".audio")
      let testmony = document.querySelector(".testmony")
      let youtube = document.querySelector(".youtube")
      let help = document.querySelector(".help")


      openNav.onclick = function() {
        sideBar.classList.toggle("active")
        home.classList.toggle("active")
        audio.classList.toggle("active")
        testmony.classList.toggle("active")
        youtube.classList.toggle("active")
        help.classList.toggle("active")
      }

      closenav.onclick = function() {
        sideBar.classList.toggle("active")
        home.classList.toggle("active")
        audio.classList.toggle("active")
        testmony.classList.toggle("active")
        youtube.classList.toggle("active")
        help.classList.toggle("active")
      }

      dark.onclick = function() {
        body.classList.toggle("active")
      }

      light.onclick = function() {
        body.classList.toggle("active")
      }