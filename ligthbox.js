


const images = document.querySelectorAll('.img-galeria')
const imagenesligth = document.querySelector('.agregar-imagen')
const contenedorligth = document.querySelector('.imagen-ligth')

images.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
      aparecerImagen(imagen.getAttribute('src'))
    })
})


contenedorligth.addEventListener('click', (e)=>{
  if(e.target !== imagenesligth){
    contenedorligth.classList.toggle('show')
    imagenesligth.classList.toggle('showimage')

  }
})







const aparecerImagen = (imagen)=>{
  imagenesligth.src = imagen
  contenedorligth.classList.toggle('show')
  imagenesligth.classList.toggle('showimage')



}
