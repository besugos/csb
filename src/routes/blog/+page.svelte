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
      <a href="/blog/{post.id}">
        <div class="post">
            <div class="img-wrapper">
                <img src={post.image} alt="Imagem do post" />
            </div>
            <div class="text-wrapper">
                <h2>{post.title}</h2>
                <p><small>{fixDate(post.created_at)}</small></p>
            </div>
            
          </div>
      </a> 
      {/each}
    {/if}
  </div>

  
  <style>
    .post {
        display: flex;
      border: 1px solid #ddd;
      padding: 20px;
      margin-bottom: 20px;
      max-width: 100%;
      border-radius: 30px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      text-decoration: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .post:hover {
        background-color: #e8fdeb;
    }

    .img-wrapper {
        width: 200px;
        height: 100px;
        margin-right: 1.5rem;
    }
  
    .post img {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      object-fit: cover;
      border: 1px solid #ddd;
    }

    .post-content {
        text-align: justify;
        margin-top: 16px;
        white-space: pre-wrap;
    }
  </style>
  