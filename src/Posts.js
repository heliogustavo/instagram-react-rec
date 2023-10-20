import react from "react";
import Post from "./Post";

export default function Posts() {

  const posts = [
    {
      nomeUsuario: "meowed",
      perfilUsuario: "assets/img/meowed.svg",
      imgPost: "assets/img/gato-telefone.svg",
      imgQuemCurtiu: "public/assets/img/respondeai.svg",
      quemCurtiu: "respondeai",
      contagemCurtidas: 101523
    },
    {
      nomeUsuario: "barked",
      perfilUsuario: "assets/img/barked.svg",
      imgPost: "assets/img/dog.svg",
      imgQuemCurtiu: "assets/img/adorable_animals.svg",
      quemCurtiu: "adorable_animals",
      contagemCurtidas: 200541
    }
  ]


  return (
    <div class="posts">
      {posts.map((p) => (
        <Post
          key={p.nomeUsuario}
          nomeUsuario={p.nomeUsuario}
          perfilUsuario={p.perfilUsuario}
          imgPost={p.imgPost}
          imgQuemCurtiu={p.imgQuemCurtiu}
          quemCurtiu={p.quemCurtiu}
          contagemCurtidas={p.contagemCurtidas}
        />
      )
      )}
      </div>
      )
}