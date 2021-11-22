const url = 'https://jsonplaceholder.typicode.com/posts';
const lista = document.getElementById('lista');
// fetch(url)
//   .then(response => response.json())
//   .then(fotos => {
//     fotos.map(foto => {
//         let li = document.createElement('li');
//         li.innerHTML = `<a href=detalle.html?id=${foto.id}>id: ${foto.id}<a> title:${foto.title}`;
//         lista.appendChild(li);
//     })
//     console.log(fotos);
//   })
//   .catch(error => {
//     console.log(error)
//   })
//   .finally(()=>{
//     document.getElementById('cargando').src="";
//   })

const obtenerPosts = async () => {
    const response = await fetch(url);
    const posts = await response.json();
    return posts;
}

obtenerPosts()
.then(posts => {
    posts.map(post => {
        let li = document.createElement('li');
        li.innerHTML = `<a href=detalle.html?id=${post.id}>id: ${post.id}<a> title:${post.title}`;
        lista.appendChild(li);
    })
    console.log(posts);
  })
  .catch(error => {
    console.log(error)
  })
  .finally(()=>{
    document.getElementById('cargando').src="";
  })
