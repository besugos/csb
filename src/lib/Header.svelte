<script>
    import Navbar from "./Navbar.svelte";
</script>

<header>
    <div class="title">
    <h1><span>Casa de&nbsp</span><span class="no-margin">São Benedito</span></h1>
    </div>
    <div class="subtitle">
    <h3><span>Casa de caridade, </span><span>casa para quem tem fé</span></h3>
    </div>  
</header>

<Navbar />


<style>
    header {
        background-color: darkgreen;
        color: white;
        padding: 24px;
    }

    h1 {
        margin-bottom: -8px;
    }

    h3 {
        margin: 0;
        padding: 0;
    }


    @media (max-width: 768px) {
    
        .title {
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 0;
            margin: 0;
        }

        .subtitle {
            display: flex;
            flex-direction: column;
            text-align: center;
            padding: 0;
            margin: 0;
        }

        span {
            display: block;
            margin: 0;
            padding: 0;
        }

        h3 {
            font-size: 1rem;
            font-weight: 500;
        }

        .no-margin {
            margin: -16px 0 16px 0
        }


    
    }

</style>
