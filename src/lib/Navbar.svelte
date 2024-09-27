<script>
    import { page } from "$app/stores";

    const links = [
        { href: "/", label: "Home" },
        { href: "/corrente", label: "Corrente da saúde" },
        { href: "/buzios", label: "Jogo de Búzios" },
        { href: "/cabala", label: "Cabala Africana" },
    ];

</script>

<nav>
    {#each links as { href, label }}
        {#if $page.url.pathname == href}
            <a {href} class="selected">{label}</a>
        {:else}
            <a {href}>{label}</a>
        {/if}
    {/each}
</nav>

<style>
    nav {
        display: flex;
        background-color: darkgreen;
        justify-content: space-evenly;
        padding-bottom: 8px;
    }

    a {
        padding: 4px 8px;
        color: white;
        text-decoration: none;
        border-radius: 10px;
    }

    a:hover {
        background-color: rgb(1, 66, 1);
    }

    .selected {
        background-color: rgb(1, 66, 1);
    }
</style>
