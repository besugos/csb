<script>
    export let isOpen = false; // Controle de abertura do modal
    export let onClose; // Função para fechar o modal
</script>

{#if isOpen}
    <div class="modal-overlay" on:click={onClose}>
        <div class="modal-content" on:click|stopPropagation>
            <slot></slot> <!-- Conteúdo do modal -->
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Para garantir que o modal fique acima de outros elementos */
    }

    .modal-content {
        background: white;
        padding: 0 20px 10px 20px;
        border-radius: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        width: 75vw; /* Largura do modal */
    }

    .close-button {
        background: transparent;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: black;
    }

</style>
