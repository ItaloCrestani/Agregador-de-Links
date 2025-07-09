function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // substituir o texto 'alt'
  if (html.classList.contains("light")) {
    img.setAttribute("alt", " descrição de imagem no light mode")
  } else {
    img.setAttribute(
      "alt",
      "Aqui entra uma descrição da imagem para diversas funcionalidades onde uma delas é para acessibilidade de pessoas com deficiência visual"
    )
  }
}
