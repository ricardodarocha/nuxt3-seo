export default defineNuxtConfig({
    app: {
        head: {
            title: 'anúncio ativo',
            meta: [
                { name: 'description', content: 'Anunciar meus produtos nas redes sociais'},
                { hid: 'og-type', property: 'og:type', content: 'product' }, //album, book, drink, food, game, product, song, movie, tv_show, veja mais...https://rockcontent.com/br/blog/meta-tags-para-redes-sociais/
                { hid: 'og-desc', property: 'og:description', content: 'Aqui a gente mostra o que é bom' }, 
                { hid: 'og-image', property: 'og:image', content: 'https://catracalivre.com.br/wp-content/uploads/2021/01/picole-de-chocolate-com-banana-sem-acucar-1425x800-1-910x511.jpeg' }, 
                { hid: 'og-image-alt', property: 'og:image-alt', content: 'Foto do produto em destaque' }, 
                { hid: 'og-url', property: 'og:url', content: 'https://ricardodarocha.com.br?from=facebook' }, 
                { hid: 'og-site_name', property: 'og:site_name', content: 'Anúncio digital' }, 
                { hid: 'fb-admins', property: 'fb:admins', content: 'Ricardo da Rocha Programador' }, //alguma pagina do facebook 
                { hid: 't-type', property: 'twitter:card', content: 'photo' }, //se contém uma foto, ou um vídeo
                { hid: 't-type', property: 'twitter:url', content: 'https://ricardodarocha.com.br?from=twitter' },                 
                { hid: 't-type', property: 'twitter:title', content: 'Anúncio digital' },                 
                { hid: 't-type', property: 'twitter:description', content: 'Aqui a gente mostra o que é bom! Anunciar produtos as redes sociais fica realmente muito mais fácil com este site' },                 //descricao longa para twitter
                { hid: 't-type', property: 'twitter:image', content: 'https://catracalivre.com.br/wp-content/uploads/2021/01/picole-de-chocolate-com-banana-sem-acucar-1425x800-1-910x511.jpeg' },             
            ]
        }
    }
})
