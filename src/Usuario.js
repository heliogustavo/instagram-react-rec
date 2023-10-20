import { useState } from "react";
import react from "react";

export default function Usuario() {

    const [userName, setUserName] = useState("catanacomics");
    const [userImage, setUserImage] = useState("assets/img/catanacomics.svg");

    function trocarNome(){
        const novoNome = prompt('Qual é o seu nome?');
        
        if ( !novoNome ){
            alert('Digite o nome correto');
        }else{
            setUserName(novoNome);
        }
    }

    function trocarFoto(){
        const novaFoto = prompt('Digite o link da sua imagem');
        
        if ( !novaFoto ){
            alert('Digite o link da imagem correto');
        }else{
            setUserImage(novaFoto);
        }
    }

    return (
        <div class="usuario">
            <img onClick={trocarFoto} src={userImage} alt="imagem de perfil" data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{userName}</strong>
                    <ion-icon onClick={trocarNome} name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}