<script>
  import { supabase } from "$lib/supabaseClient";

  let name = "";
  let birthdate = "";
  let reason = "";
  let successMessage = "";

  export let data;

  async function handleSubmit() {
    // Verifica se os campos estão preenchidos
    if (!name || !birthdate || !reason) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Chama a função de inserção do Supabase
    const { data: newRecord, error } = await supabase
      .from("records")
      .insert([{ name, birthdate, reason }]);

    // Manipula o erro caso haja
    if (error) {
      console.error("Erro ao inserir dados:", error);
      alert("Erro ao cadastrar: " + error.message);
      return;
    }

    // Limpa os campos do formulário
    name = "";
    birthdate = "";
    reason = "";

    await loadRecords();

    successMessage = "Cadastro realizado com sucesso!";
    setTimeout(() => {
      successMessage = ""; // Limpa a mensagem após 3 segundos
    }, 3000);
  }

  async function loadRecords() {
    const { data: recordsData, error } = await supabase
      .from("records")
      .select();
    if (error) {
      console.error("Erro ao carregar registros:", error);
    } else {
      data.records = recordsData; // Atualiza a lista de registros
    }
  }

  // Carrega os registros ao iniciar o componente
  loadRecords();
</script>

<div class="container full-page">
  <h1>Corrente da saúde</h1>

  <p class="disclaimer">A corrente de São Benedito para a saúde é uma corrente de oração, realizada na fé dos pretos-velhos. Ocorre todas as segundas-feiras, das 18 às 21h. Para participar, basta se inscrever no formulário abaixo, informando os dados necessários. Uma vez inscrito, na próxima segunda-feira, às 18h, coloque um copo com água para ser fluidificada pelos mentores de cura, e se mantenha em oração durante este período, de preferência de roupas claras e em local calmo. Ao final da corrente, às 21h, bebe-se a água. A inscrição vale para a segunda-feira seguinte, e pode ser repetida quantas vezes se julgar necessário.</p>

  {#if successMessage}
    <div class="alert success">{successMessage}</div>
  {/if}

  <div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
      <div class="div-format">
        <h2>Cadastro</h2>
        <input type="text" name="nome" placeholder="Nome" bind:value={name} />
        <input
          type="date"
          name="nascimento"
          placeholder="Data de Nascimento"
          bind:value={birthdate}
        />
        <input
          type="text"
          name="motivo"
          placeholder="Motivo do pedido (doença, sintomas, etc.)"
          bind:value={reason}
        />
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  </div>

  <ul>
    {#each data.records as record}
      <li>{record.created_at} - {record.name}</li>
    {/each}
  </ul>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-container {
    border-radius: 20px;
    width: 80vw;
    max-width: 570px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(226, 248, 229);
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    margin: 16px 0;
  }

  .div-format {
    display: flex;
    width: 75vw;
    max-width: 570px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    align-self: start;
    margin-bottom: 20px;
  }

  h2 {
    align-self: center;
    margin-bottom: 20px;
  }

  ul {
    margin-top: 40px;
    display: none;
  }

  .alert {
    margin: 16px 0;
    padding: 10px;
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 5px;
  }

  .disclaimer {
  
    margin-bottom: 2rem;
    text-align: justify;

  }

  @media (max-width: 768px) {
    .full-page {
      padding: 8px;
      text-align: center;
    }

    h1 {
      display: flex;
      line-height: 2rem;
      flex-direction: column;
      margin-bottom: 16px;
    }
  }
</style>
