<script>
    import { page } from "$app/stores";
    import { goto } from '$app/navigation';
    import { supabase } from "$lib/supabaseClient";
  
    let post = {}

    async function loadPosts() {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", $page.params.id);

      if (error) {
        console.error("Erro ao carregar posts:", error);
      } else {
        post = data[0];
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
        <div class="post">
            <img src={post.image} alt="Imagem do post" />
            <h2>{post.title}</h2>
            <p><small>{fixDate(post.created_at)}</small></p>
            <p class="post-content">{post.content}</p>
            <button on:click={() => goto('/blog')}>Voltar</button>
          </div>


      
  </div>

  
  <style>
    .post {
        display: flex;
        flex-direction: column;
      border: 1px solid #ddd;
      padding: 20px;
      margin-bottom: 20px;
      max-width: 100%;
      border-radius: 30px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      text-decoration: none;
    }
  
    .post img {
      width: 40%;
      border-radius: 20px;
      object-fit: contain;
      margin-bottom: 16px;
    }

    .post-content {
        text-align: justify;
        margin-top: 16px;
        white-space: pre-wrap;
    }

    button {
    width: auto; 
    display: inline-block; 
    padding: 10px 20px; 
    cursor: pointer;
    align-self: flex-end; 
    margin-top: 16px; 
    margin-right: 8px;
  }

  button:hover {
    background-color: #015028;
  }

  </style>
  