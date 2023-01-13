const text = [
    `Donut de biscoito de chocolate com doce de geleia em forma de rolo. Bolo de cenoura torta de caramelo torta de maçã doce torta de tiramisu bolo de cenoura. Pastel de croissant de marshmallow de maçapão. Cupcake de gotas de limão com goma de ursinho. Goma de ursinho de goma de ursinho de goma de geléia chupa-chupa de algodão doce de ursinho bolo de chocolate em barra. Cupcake muffin de bolacha de bolacha dinamarquesa goma de bolacha. Pudim de tiramisu de feijão gelatinoso. Soufflé de chocolate com bolacha de bolo de chocolate. Bolo de aveia meio-grosso de algodão doce em rolo croissant croissant. Macaroon tiramisu doce de chocolate barra de chocolate doce de doce de cenoura doce de geléia. Gomas croissant croissant sobremesa de macarrão. Torta de bolo de chocolate dragée`,
    `No próximo nível de transporte cotidiano, blog blog caneca de cobre para forragem kitsch de tofu em palha de rede. Etsy 8-bit microdose, XOXO viral butcher banh mi list despertou o brunch dos direitos da bicicleta antes de esgotar as rampas. Twee shabby chic taiyaki flanela, pino de esmalte venmo vape quatro loko. Hexagon kale chips keffiyeh etico banh mi narwhal echo parque cronut`,
    `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne woodbering animata corpora quaeritis. Summus brain sit, morbo vel maleficia? De apocalypsi gorger omero undeadadaduris survivor dictum mauris. Olá mortuis sem alma, criaturas sem alma, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. O comedor de carne voodoo sacerdos, suscitat mortuos comedere carnem virus. Zonbi tattered para solum oculi eorum defunctis go lum cerebro. Cérebro Nescio e zumbis mortos-vivos. Sicut malus putrid voodoo horror. Quase um dos mortos mortos-vivos`,
    `O gato fica preso nos bombeiros de árvores tenta fazer com que o gato fique preso nos sapatos dos bombeiros de árvores come o poder do gatinho dos bombeiros, ignore os esquilos, você nunca os pegará de qualquer forma pelo que um gato-troféu! ou ronronar o mais alto possível, seja o gato mais irritante que você puder, e, derrubar tudo de cima da mesa. Finja que você quer sair, mas depois não morda os dedos dos pés humanos, mas desapareça por quatro dias e volte para casa com um ferimento caro; morda o veterinário, então pegue comida, vomite comida, vomite pássaros maus`,
    `Esta ópera é tão péssima quanto brilhante! Sua letra não tem sutileza. Você não pode simplesmente fazer seus personagens anunciarem como se sentem. Isso me faz sentir com raiva! De qualquer forma, seus fatos de rede permitirão que você experimente os intestinos infestados de minhocas de Fry como se você estivesse realmente se movimentando através deles.
  Eu acabei de lhe dizer! Você me matou! Fry! Pare de fazer a coisa certa, seu idiota! Michelle, não me arrependo disso, mas eu lamento e lamento. Morbo não consegue entender seu teleponto porque esqueceu como você diz aquela carta que tem a forma de um homem usando um chapéu..`,
    `Mozzarella de queijo duro Airedale. Pecorino queijo derretido de Porto-salut emmental queijo babybel e manchego de queijo derretido de vinho. Todos adoram castello azul. Todos adoram fatias de queijo fromage airedale cheddar creme de queijo. Bergkase bávaro que moveu meu queijo halloumi porto-salut gouda jarlsberg queijo de borracha de ricotta. Brie de queijo fedorento de bispo fedorento.`,
    `Sálvia telha brilhante do metrô, bigode de perneiras YOLO semiótica chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun bun pabst letterpress synth. Onda de lanche de godard de ganga crua, 3 miudezas de lobo da lua kitsch kitsch de unicórnio com ourela ao vivo schlitz moda machado vaporware bebendo prisma de vinagre. Shabby chic tacos artesanal, chambray chicharrones cardigan leggings máquina de escrever e meditação pop-up williamsburg PBR&B viral. Provavelmente você ainda não ouviu falar deles, de bricolage, calções de jeans de metrô, de moda axe bushwick kitsch tumerico nuvem pao vaporware freegan franzen barriga de porco chicharrones banh mi.`,
    `Man braid celiac synth freegan readymade, pitchfork fam fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiótica vegan pós-irônica. Tofu meditação microdosagem hashtag semiótica venmo. Vape flexitarian vape tilde taiyaki. Prism poutine farm-to-table, saco de mensageiro vegan taxidermy tatuado sartorial lula jean shorts fixie selvage trust fund vape.`,
    `Rutters Plate Fleet Chandler Brethren of the Coast lindamente vigiando o brigantine knave abandonado. Buccaneer gangway jack rum linha de vidro espião Jack Tar fore gaff. Gaff topmast scuttle swab balastro de lastro com corrente de ferry yer medido o jig de cânhamo Chain Shot yardarm.`,
  ];

const paragrafos = document.getElementById('mostrador')
const form = document.getElementById('form')
const lorem = document.getElementById('lorem-text')

const submit = (event) => {
    event.preventDefault()

    const numParagrafos = Number(paragrafos.value)
    const texto = text.slice(0, numParagrafos)

    const result = texto.map((item) => {
        return `<p>${item}</p>`
    }).join('')

    lorem.innerHTML = result
}

form.addEventListener('submit', submit)