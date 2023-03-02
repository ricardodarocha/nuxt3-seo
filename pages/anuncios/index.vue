<template>
  <div>
    <h3>Empresa do Gilmar</h3>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/anuncios/1">Produto 1</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/anuncios/2">Produto 2</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>

<div><slot></slot></div>

  </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #26a47e
    }

    .azul {
        background-color: rgb(108, 171, 243);
    }
</style>