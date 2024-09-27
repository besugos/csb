<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import "../global.css";
</script>

<div class="full-site">
    <div class="header">
        <Header />
    </div>
    
    <span class="main-section"><slot /></span>

    <div class="footer">
        <Footer />
    </div>
    
</div>

<style>
    .full-site {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .header {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    .footer {
        box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.5);
    }

    .main-section {
        padding: 10px;
        flex-grow: 1;
    }
</style>
