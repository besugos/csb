<script>
    const links = [
        { href: "/", label: "Home" },
        { href: "/blog", label: "Blog" },
        { href: "/corrente", label: "Corrente da saúde" },
        { href: "/buzios", label: "Jogo de Búzios" },
        { href: "/cabala", label: "Cabala Africana" },
        
    ];

</script>

<footer>
    <div class="footer-nav">
        {#each links as { href, label }}
            <a {href}>{label}</a>
        {/each}
    </div>
    <hr/>
<div class="name">
    <span class="footer-text"><strong>Casa de São Benedito©</strong></span>
    <span class="footer-text-space">&nbsp-&nbsp</span>
    <span class="footer-text">Todos os direitos reservados</span>
    <span class="footer-text-space">&nbsp-&nbsp</span>
    <span class="footer-text">2024</span>

</div>
    

</footer>

<style>
    footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: darkgreen;
        float: center;
        color: white;
        min-height: 100px;
    }

    hr {
        width: 85vw;
    }

    .name {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .footer-text {
        align-self: center;
        justify-self: center;
    }

    .footer-nav {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        width: 95vw;
        justify-content: space-evenly;
    }

    a {
        text-decoration: none;
        color: white;
    }

    @media (max-width: 768px) {
        .footer-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px 0;
    }

    .name {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16px 0;
    }

    .footer-text-space {
        display: none;
    }

}


</style>
