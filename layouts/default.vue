<template>
  <div>
    <header>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/Home">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/Anuncios">Anúncios</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">Sair</NuxtLink>
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
</style>