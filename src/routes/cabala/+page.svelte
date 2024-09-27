<script>
    import resultadoCabala from "$lib/cabala";
    import Modal from './Modal.svelte';

    let isModalOpen = false;

    let date = "";
    let testa = "";
    let placenta = "";
    let nuca = "";
    let esq = "";
    let dir = "";
    let principal = "";
    let primordial = "";
    let obstaculo = "";
    let texto = "";
    let local = "";
    let localDescription = "";
    let oduName = "";
    let oduDefinition = "";
    let orixas = "";

    function reduz(numero = "") {
        if (parseInt(numero) < 17) {
             return numero;
        } else {
            numero = (parseInt(numero[0]) + parseInt(numero[1])).toString();
            return reduz(numero);
        }
    }

    function calcula() {
        let brokenDate = date.split("-");
        let year = brokenDate[0];
        let month = brokenDate[1];
        let day = brokenDate[2];

        testa = reduz(
            (
                parseInt(day[0]) +
                parseInt(month[0]) +
                parseInt(year[0]) +
                parseInt(year[2])
            ).toString(),
        );

        nuca = reduz(
            (
                parseInt(day[1]) +
                parseInt(month[1]) +
                parseInt(year[1]) +
                parseInt(year[3])
            ).toString(),
        );

        dir = reduz((parseInt(testa) + parseInt(nuca)).toString());

        esq = reduz(
            (parseInt(testa) + parseInt(nuca) + parseInt(dir)).toString(),
        );

        placenta = reduz(
            (
                parseInt(testa) +
                parseInt(nuca) +
                parseInt(dir) +
                parseInt(esq)
            ).toString(),
        );

        primordial = reduz(
            (
                parseInt(day[1]) +
                parseInt(month[1]) +
                parseInt(year[3]) +
                parseInt(year[2])
            ).toString(),
        );

        principal = reduz(
            (
                parseInt(day[0]) +
                parseInt(month[0]) +
                parseInt(year[0]) +
                parseInt(year[2]) +
                parseInt(day[1]) +
                parseInt(month[1]) +
                parseInt(year[1]) +
                parseInt(year[3])
            ).toString(),
        );

        obstaculo = principal;
    }

    function openModal() {
    isModalOpen = true; // Abre o modal
}

function closeModal() {
    isModalOpen = false; // Fecha o modal
}

    function abrirModal(t1 = "", t2 = "") {
        isModalOpen = true;
        let resultado = resultadoCabala(t1, t2);

        local = resultado.local;
        localDescription = resultado.localDescription;
        oduName = resultado.oduName;
        oduDefinition = resultado.oduDefinition;
        orixas = resultado.orixas;
        texto = resultado.texto;

        openModal();
    }

    function fecharModal() {
        closeModal();
        isModalOpen = false;
    }


</script>

<div class="full-page">
    <h1>Cabala Africana</h1>
    <p>
        Este site, bem como os cálculos aqui apresentados, visa difundir e
        divulgar a cultura e a religiosidade afro-brasileira. Apresenta uma das
        muitas metodologias de cálculo para os principais Odu regentes de acordo
        com a data de nascimento, podendo, entretanto, ser utilizada também para
        buscar compreender a regência de outras datas. Tanto os cálculos quanto
        as informações que o app provê acerca dos Odu vêm de ensinamentos
        ancestrais passados pelos mais velhos das tradições afro-brasileiras,
        tanto do culto a Ifá quanto do Candomblé.<br /><br />

        Apesar de acreditarmos na importância da divulgação destes
        conhecimentos, de nenhuma forma o site ou qualquer das informações nele
        constantes substituem a consulta e o aconselhamento com um Babalaô,
        Babalorixá ou Yalorixá. Somente eles, através do conhecimento, da
        mediunidade e da missão que carregam, podem interpretar corretamente os
        dados informados, e muitos outros mais a que têm acesso mediante os
        oráculos de que dispõe.<br /><br />

        Ainda nesta seara, este site NÃO informa o Odu nem Orixá regente de
        ninguém, nem recomenda qualquer Ebó ou oferenda. Estas informações
        somente poderão ser obtidas através de um sacerdote preparado para tal.<br
        /><br />

        Axé!
    </p>

    <input type="date" class="cabala-date" bind:value={date} />
    <button on:click={calcula}>Calcular</button>

    <div class="cabala-results">
        <table class="cabala-table">
            <tr>
                <td></td>
                <td class="clickable" on:click={() => abrirModal("Testa", testa)}>{testa}</td>
                <td></td>
            </tr>
            <tr>
                <td class="clickable" on:click={() => abrirModal("Esquerda", esq)}>{esq}</td>
                <td class="clickable" on:click={() => abrirModal("Placenta", placenta)}>{placenta}</td>
                <td class="clickable" on:click={() => abrirModal("Direita", dir)}>{dir}</td>
            </tr>
            <tr>
                <td></td>
                <td class="clickable" on:click={() => abrirModal("Nuca", nuca)}>{nuca}</td>
                <td></td>
            </tr>
            <tr>
                <td class="half-height"></td>
                <td class="half-height"></td>
                <td class="half-height"></td>
            </tr>
            <tr>
                <td class="clickable" on:click={() => abrirModal("Principal", principal)}>{principal}</td>
                <td class="clickable" on:click={() => abrirModal("Primordial", primordial)}>{primordial}</td>
                <td class="clickable" on:click={() => abrirModal("Obstaculo", obstaculo)}>{obstaculo}</td>
            </tr>
        </table>
    </div>

    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <br/>
        <h1>{local}</h1>
        <p>{localDescription}</p>
        <br/>
        <h2>{oduName}</h2>
        <h4>{oduDefinition}</h4>
        <p>{orixas}</p>
        <br/>
        <p>{texto}</p>
        <div class="flex-container">
            <button id="closeBtn" on:click={closeModal}>Fechar</button>
        </div>

    </Modal>

</div>

<style>
    .cabala-date {
        background-color: #ddd;
        margin: 16px 16px 16px 0;
        max-width: 200px;
        flex-grow: 1 1 1;
    }

    .cabala-results {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin-top: 60px;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); /* Escurece o fundo */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10; /* Para garantir que o overlay fique acima do conteúdo */
    }

    td {
        border: none;
        width: 6rem;
        height: 6rem;
        text-align: center;
        font-size: 2.5rem;
        font-weight: bold;
        border-radius: 60px;
        
    }

    .clickable {
        cursor: pointer;
        background-color: #ddd;
    }

    td.half-height {
        height: 2rem;
    }

    .flex-container {
        display: flex;
        justify-content: flex-end;
    }

</style>
