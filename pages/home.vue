<template>
  <div>
    <h3>Empresa do Gilmar</h3>

    <div id="destaque" class="azul">
      <p>Olá Gilmar, crie um anúncio do dia das mães</p>
      <button>Criar</button> <br />
      <a href="#">Mais tarde</a>
    </div>
    
    <h3>Meus temas</h3>
    <ul>
        <li>Vazio</li>
        <li>Vazio</li>
    </ul>
    
    <h3>Meus anúncios</h3>
    <ul>
        <li>Produto 1</li>
        <li>Produto 2</li>
    </ul>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}

.azul {
  background-color: rgb(108, 171, 243);
}
</style>
