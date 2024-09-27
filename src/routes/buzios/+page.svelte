<script>
import resultadoBuzios from '$lib/buzios'

import Modal from './Modal.svelte'; // Importe o componente Modal

let isModalOpen = false; // Estado para controlar a abertura do modal

let resultado = resultadoBuzios(0);
let odu = '';
let buzios = '';
let orixas = '';
let resposta_curta = '';
let resposta_longa = '';

function openModal() {
    isModalOpen = true; // Abre o modal
}

function closeModal() {
    isModalOpen = false; // Fecha o modal
}

function jogar() {
        const caida = Math.floor(Math.random() * 17);
        let resultado = resultadoBuzios(caida);
        console.log(resultado.odu);
        odu = resultado.odu;
        buzios = resultado.caida;
        orixas = resultado.orixas;
        resposta_curta = resultado.resposta_curta;
        resposta_longa = resultado.resposta_longa;
        openModal();
    }

</script>


<div class="full-page">
    <h1>Jogo de Búzios</h1>
    <br />
            <h4>* Este jogo <strong>NÃO SUBSTITUI</strong> um jogo feito por um sacerdote *</h4><br />
            <p>O intuito desta página é apenas prover um meio para que os Orixás possam, através da sincronicidade universal, responder a dúvidas e perguntas em momentos de necessidade, em que não haja a possibilidade de consultar um sacerdote</p>
            <br />

            <h4>Instruções</h4>
            <br />
            <ul class="instructions">
                <li>Mentalize sua pergunta com fé, rogando aos Orixás que direcionem sua resposta</li>
                <li>Leia a resposta com atenção, buscando entender todo o significado que possa estar sendo passado</li>
                <li>Não repita a pergunta. Uma vez dada a resposta, entende-se que aquele é o recado a ser passado</li>
                <li>Quando estiver preparado, clique no botão "Jogar"</li>
            </ul>
            <br />
            <button class="btn" on:click={jogar}>Jogar</button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <br/>
                    <h1>ODU: {odu}</h1>
                    <h3>Caída: {buzios}</h3>
                    <h4>Respondem os orixás: {orixas}</h4>
                    <h4>Resposta: {resposta_curta}</h4>
                    <p class="resposta">{resposta_longa}</p>
                <button on:click={closeModal}>Jogar novamente</button>
            </Modal>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Para centralizar verticalmente */
    }

    .full-page {
        padding: 20px 40px;
    }

    .instructions {
        margin-left: 30px;
    }

    h3 {
        margin-bottom: 20px;
    }

    .resposta {
        margin-top: 20px;
        margin-bottom: 10px;
    }

</style>
