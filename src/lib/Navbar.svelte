<script>
    import { page } from "$app/stores";

    const links = [
        { href: "/", label: "Home", short: "Home" },
        { href: "/corrente", label: "Corrente da saúde", short: "Corrente" },
        { href: "/buzios", label: "Jogo de Búzios", short: "Búzios" },
        { href: "/cabala", label: "Cabala Africana", short: "Cabala" },
    ];
</script>

<nav>
    {#each links as { href, label, short }}
        {#if $page.url.pathname == href}
            <a {href} class="selected">
                <span class="desktop">{label}</span><span class="mobile"
                    >{short}</span
                >
            </a>
        {:else}
            <a {href}
                ><span class="desktop">{label}</span><span class="mobile"
                    >{short}</span
                ></a
            >
        {/if}
    {/each}
</nav>

<style>
    nav {
        display: flex;
        background-color: darkgreen;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 8px;
    }

    a {
        padding: 4px 8px;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        text-align: center;
    }

    a:hover {
        background-color: rgb(1, 66, 1);
    }

    .selected {
        background-color: rgb(1, 66, 1);
    }

    .mobile {
        display: none;
    }

    @media (max-width: 768px) {

        .desktop {
            display: none;
        }

        .mobile {
            display: flex;
        }

    }
</style>
