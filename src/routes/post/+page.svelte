<script>
    import { supabase } from "$lib/supabaseClient";
  
    let author = "";
    let title = "";
    let content = "";
    let imageUrl = "";
    let postDate = new Date().toISOString().split("T")[0]; // Data de hoje no formato YYYY-MM-DD
  
    async function handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const { data, error } = await supabase.storage
          .from("post-images") // Nome do bucket
          .upload(`public/${file.name}`, file); // Caminho no bucket
  
        if (error) {
          console.error("Erro ao enviar imagem:", error.message);
          return;
        }
  
        // Verificar se o upload retornou o caminho corretamente
        console.log("Dados do upload:", data);
  
        // Usar o caminho correto da imagem para gerar a URL pública
        const imagePath = data.path; // "public/bsz3e.png"
  
        // Gerar a URL pública da imagem
        const { data: publicUrlData, error: urlError } = supabase.storage
          .from("post-images")
          .getPublicUrl(imagePath);

  
        if (urlError) {
          console.error("Erro ao gerar URL da imagem:", urlError.message);
        } else if (!publicUrlData.publicUrl) {
          console.error("URL pública não gerada corretamente");
        } else {
          imageUrl = publicUrlData.publicUrl;
          console.log("Imagem enviada com sucesso, URL pública:", publicUrlData.publicUrl);
        }
      }
    }
  
    async function savePost() {
      const { error } = await supabase.from("posts").insert([
        {
          author: author,
          title: title,
          content: content,
          image: imageUrl, // Caminho completo da imagem
          created_at: postDate,
        },
      ]);
  
      if (error) {
        console.log("Erro ao salvar post: ", error.message);
      } else {
        alert("Post salvo com sucesso!");
        author = "";
        title = "";
        content = "";
        imageUrl = "";
      }
    }
  </script>
  
  <div class="full-page form">
    <h1>Criar novo post</h1>
    <label for="author">Autor:</label>
    <input type="text" bind:value={author} name="author" class="input-text"/>
  
    <label for="title">Título:</label>
    <input type="text" bind:value={title} name="title" class="input-text"/>
  
    <label for="content">Conteúdo:</label>
    <textarea bind:value={content} name="content" class="input-text text-area"></textarea>
  
    <label for="image">Imagem:</label>
    <input type="file" on:change={handleImageUpload} name="image" class="input-text"/>
  
    <span><button on:click={savePost} class="btn">Salvar Post</button></span>
  </div>
  
  <style>
    .form {
      display: flex;
      flex-direction: column;
    }
  
    .input-text {
      justify-content: center;
      align-items: center;
      width: 70%;
      margin-bottom: 8px;
      padding: 8px 8px;
      border-radius: 10px;
      border: 1px solid #ccc;
    }
  
    .text-area {
      height: 400px;
    }
  
    .btn {
      width: 30%;
      align-self: flex-end;
    }
  
    span {
      display: flex;
      flex-direction: row;
      justify-content: end;
      width: 72%;
    }
  </style>
  