'use strict'

const body = document.body

let div = document.createElement('div')
div.className = 'container'

let title  = document.createElement('h2')
title.innerText = 'hello'

let divImage = document.createElement('div')
divImage.className = 'img'

let p = document.createElement('p')
title.innerText = '123'

div.append(title,divImage,p)
body.append(div)