<script>
  import { supabase } from "$lib/supabaseClient";

  export let data = [];

  function formatDateTimeBR(dateTimeStr = "") {
    const date = new Date(dateTimeStr);

    const options = {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const formattedDateTime = date.toLocaleString("pt-BR", options);

    return formattedDateTime.replace(", ", " - ");
  }

  function formatBirthdate(birthdate = '') {
    const brokenDate = birthdate.split('-');
    return `${brokenDate[2]}/${brokenDate[1]}/${brokenDate[0]}`
  }

  async function loadRecords() {
    const { data: recordsData, error } = await supabase
      .from("records")
      .select()
      .order('created_at', { ascending: false }); 
    if (error) {
      console.error("Erro ao carregar registros:", error);
    } else {
      data.records = recordsData;
    }
}

  loadRecords();
</script>

<div class="container full-page">
  <h1>Corrente da saúde - Inscritos</h1>

  <table>
    <tr>
      <th>Data e hora da inscrição</th>
      <th>Nome</th>
      <th>Data de nascimento</th>
      <th>Queixa</th>
    </tr>
    {#each data.records as record}
      <tr>
        <td>{formatDateTimeBR(record.created_at)}</td>
        <td>{record.name}</td>
        <td>{formatBirthdate(record.birthdate)}</td>
        <td>{record.reason}</td>
      </tr>
    {/each}
  </table>
</div>

<style>
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
  }

  table {
    width: 90vw;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
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
