import react from "react";
import { useState } from "react";

export default function Post(props) {
    const [isSaved, setIsSaved] = useState(false);

    const [isLiked, setIsLiked] = useState(false);

    const [contador, setContador] = useState(props.contagemCurtidas);


    function salvarPost() {
        if (isSaved === false) {
            setIsSaved(true)
        }
        else if (isSaved === true) {
            setIsSaved(false)
        }
    }

    function curtirPelaImagem() {
        if (isLiked === false) {
            setIsLiked(true)
            setContador(contador + 1)
        }
        else if (isLiked === true) {
            setIsLiked(false)
            setContador(contador - 1)

        }
    }

    function curtirPost() {
        if (isLiked === false) {
            setIsLiked(true)
            setContador(contador + 1)
        }
        else if (isLiked === true) {
            setIsLiked(false)
            setContador(contador - 1)

        }

    }

    return (
        <div data-test='post' class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.perfilUsuario} alt="meowed" />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div onClick={curtirPelaImagem} class="conteudo" data-test="post-image">
                <img src={props.imgPost} alt="gato-telefone" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={curtirPost} class="vermelho" name={!isLiked ? "heart-outline" : "heart"} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {
                            !isSaved ?
                                <ion-icon onClick={salvarPost} name="bookmark-outline" data-test="save-post"></ion-icon>
                                :
                                <ion-icon onClick={salvarPost} name="bookmark" data-test="save-post"></ion-icon>
                        }
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgQuemCurtiu} alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>{props.quemCurtiu}</strong> e <strong>outras <span data-test="likes-number">{contador}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )

}