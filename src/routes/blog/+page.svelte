<script>
    import { supabase } from "$lib/supabaseClient";
    let posts = [];
  
    async function loadPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false }); // Posts mais recentes primeiro
  
      if (error) {
        console.error("Erro ao carregar posts:", error);
      } else {
        posts = data;
      }
    }
  
    // Carrega os posts ao montar o componente
    loadPosts();

    function fixDate(wrongDate) {
        const date = new Date(wrongDate);
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString();
    }

  </script>
  
  <div class="full-page">
    <h1>Posts Recentes</h1>
  
    {#if posts.length === 0}
      <p>Nenhum post encontrado.</p>
    {:else}
      {#each posts as post}
      
        <div class="post">
          <img src={post.image} alt="Imagem do post" />
          <h2>{post.title}</h2>
          <p><small>{fixDate(post.created_at)}</small></p>
          <p class="post-content">{post.content}</p>
        </div>
      {/each}
    {/if}
  </div>

  
  <style>
    .post {
      border: 1px solid #ddd;
      padding: 20px;
      margin-bottom: 20px;
      max-width: 100%;
      border-radius: 30px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }
  
    .post img {
      max-width: 100%;
      max-height: 200px;
      border-radius: 20px;
    }

    .post-content {
        text-align: justify;
        margin-top: 16px;
        white-space: pre-wrap;
    }
  </style>
  