<template>
  <div>
    <p>anúncio</p>
    <h2>Produto {{id}}</h2>

    <img src="https://catracalivre.com.br/wp-content/uploads/2021/01/picole-de-chocolate-com-banana-sem-acucar-1425x800-1-910x511.jpeg" alt="Uma foto boa para rede social">
    <h4>Picolé do Gilmar</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, minus odit consequuntur alias quos officia sed corporis soluta mollitia quaerat architecto, laborum tempora eaque voluptatibus deleniti commodi! Quidem, quia ullam!</p>
    <h1>1,50</h1>
    <button>Comprar</button>
    <br/>
    <br/>
    <button>Divulgar</button>
    <p>divulgue e concorra a prêmios</p>
  </div>
</template>

<script setup>
const { id } = useRoute().params
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}
p {
    margin: 20px 0;
}
</style>
