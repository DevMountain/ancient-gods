const _ = require('lodash')
const deepclone = require('lodash.clonedeep')

let id = 36


const gods = [
  {
    id: 1,
    name: "Zeus",
    powers: ["Lightning Bolts", "Thunder", "Weather"],
    mythology: "Greek",
    image:'http://www.clker.com/cliparts/1/3/5/2/1332595241548645682zeus-hi.png',
    demigod: false
  },
  {
    id: 2,
    name: "Hera",
    powers: ["Bless and Curse Marriages"],
    mythology: "Greek",
    image:'https://upload.wikimedia.org/wikipedia/commons/3/30/Juno_Receiving_the_Cestus_from_Venus_by_Joshua_Reynolds.jpg',
    demigod: false
  },
  {
    id: 3,
    name: "Achilles",
    powers: ["Invincibility", "War"],
    mythology: "Greek",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Closeup_of_Achilles_thniskon_in_Corfu_Achilleion_autocorrected.JPG/1280px-Closeup_of_Achilles_thniskon_in_Corfu_Achilleion_autocorrected.JPG',
    demigod: true
  },
  {
    id: 4,
    name: "Poseidon",
    powers: ["Water", "Storms", "Lightning"],
    mythology: "Greek",
    image:'https://static.vecteezy.com/system/resources/previews/000/126/805/large_2x/poseidon-comes-out-from-the-sea-vector.jpg',
    demigod: false
  },
  {
    id: 5,
    name: "Demeter",
    powers: ["Agriculture", "Fertility of Earth"],
    mythology: "Greek",
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Hera_Campana_Louvre_Ma2283.jpg/220px-Hera_Campana_Louvre_Ma2283.jpg',
    demigod: false
  },
  {
    id: 6,
    name: "Ares",
    powers: ["Strength", "Physicality", "Battle"],
    mythology: "Greek",
    image:'https://banner2.kisspng.com/20180403/jow/kisspng-god-of-war-hades-ares-hera-hephaestus-god-of-war-5ac3191eca98e0.3377549515227353908299.jpg',
    demigod: false
  },
  {
    id: 7,
    name: "Athena",
    powers: ["Defense", "Wisdom"],
    mythology: "Greek",
    image:'https://ak4.picdn.net/shutterstock/videos/15161404/thumb/4.jpg',
    demigod: false
  },
  {
    id: 8,
    name: "Apollo",
    powers: ["Prophecy", "Healing", "Light"],
    mythology: "Greek",
    image:'https://i.ebayimg.com/images/g/BeAAAOSwU9xUMYsx/s-l640.jpg',
    demigod: false
  },
  {
    id: 9,
    name: "Artemis",
    powers: ["Plagues", "Healing", "Protector of Children"],
    mythology: "Greek",
    image:'https://www.ancient.eu/uploads/images/1202.jpg?v=1485680415',
    demigod: false
  },
  {
    id: 10,
    name: "Hephaestus",
    powers: ["Blacksmithing"],
    mythology: "Greek",
    image:'http://getdrawings.com/images/greek-god-drawing-1.jpg',
    demigod: false
  },
  {
    id: 11,
    name: "Aphrodite",
    powers: ["Transformation", "Love"],
    mythology: "Greek",
    image:'https://cdn.lemonandolives.com/wp-content/uploads/2017/02/Aphrodite-sea-foam-birth.jpg',
    demigod: false
  },
  {
    id: 12,
    name: "Hermes",
    powers: ["Speed", "Flight"],
    mythology: "Greek",
    image:'https://i.pinimg.com/originals/6f/23/e4/6f23e460a2708a9cd88b036a2f6bb42e.jpg',
    demigod: false
  },
  {
    id: 13,
    name: "Dionysus",
    powers: ["Grape Harvest", "Wine making"],
    mythology: "Greek",
    image:'https://i.pinimg.com/736x/ae/e3/0f/aee30f11bd6cf2b8cfc1964a51740bc7--greek-mythology-fine-art-print.jpg',
    demigod: true
  },
  {
    id: 14,
    name: "Hades",
    powers: ["Power Over the Dead","Riches"],
    mythology: "Greek",
    image:'https://i.pinimg.com/originals/62/29/7e/62297ee5fcc6b9a9bde6b0852994375b.jpg',
    demigod: false
  },
  {
    id: 15,
    name: "Hypnos",
    powers: ["Sleep"],
    mythology: "Greek",
    image:'https://i.pinimg.com/736x/88/ac/13/88ac1359c755aac98fcbb9290c730c12--bronze-sculpture-art-sculpture.jpg',
    demigod: false
  },
  {
    id: 16,
    name: "Nike",
    powers: ["Victory", "Flight"],
    mythology: "Greek",
    image:'https://i.pinimg.com/originals/af/64/e9/af64e9e232ceefff1351189591d55160.jpg',
    demigod: false
  },
  {
    id: 17,
    name: "Janus",
    powers: ["Time"],
    mythology: "Greek",
    image:'http://waltzworldhistory.weebly.com/uploads/9/0/5/0/9050917/9278766_orig.jpg',
    demigod: false
  },
  {
    id: 18,
    name: "Anaeas",
    powers: ["Strength", "Stamina"],
    mythology: "Greek",
    image:'https://i.pinimg.com/736x/a0/11/32/a01132f8019a7a35543b23ce94bfd34b--famous-sculptures-museum-paris.jpg',
    demigod: true
  },
  {
    id: 19,
    name: "Nemesis",
    powers: ["Balance", "Justice", "Retribution"],
    mythology: "Greek",
    image:'https://vignette.wikia.nocookie.net/percyjackson/images/6/6c/91133483_4711681_Nemezida_boginya_mesti_Gheorghe_Tattarescu.jpg/revision/latest?cb=20140423142743&path-prefix=ru',
    demigod: false
  },
  {
    id: 20,
    name: "Iris",
    powers: ["Messenger", "Flight"],
    mythology: "Greek",
    image:'https://vignette.wikia.nocookie.net/greekgoddesses/images/e/e6/Iris_the_goddess_of_the_rainbow_and_sky.jpg/revision/latest?cb=20140815064902',
    demigod: false
  },
  {
    id: 21,
    name: "Hecate",
    powers: ["Magic", "Ghosts", "Necromancy"],
    mythology: "Greek",
    image:'https://i.frg.im/yg2mMcB/222209882295-0.jpg',
    demigod: false
  },
  {
    id: 22,
    name: "Tyche",
    powers: ["Fortune"],
    mythology: "Greek",
    image:'https://www.greekartshop.com/image/cache/catalog/products/157/Goddess_Fortune_Tyche_Luck_Fortuna_Statue_Sculpture_Figurine_Bronze_Finish_7_28_-750x750.jpg',
    demigod: false
  },
  {
    id: 23,
    name: "Jupiter",
    powers: ["Light and Sky", "Thunder", "Lightning"],
    mythology: "Roman",
    image:'https://i.ytimg.com/vi/_CFshla56ac/maxresdefault.jpg',
    demigod: false
  },
  {
    id: 24,
    name: "Juno",
    powers: ["Leadership", "Queen of The Gods"],
    mythology: "Roman",
    image:'https://upload.wikimedia.org/wikipedia/commons/2/2f/Hera_Farnese_MAN_Napoli_Inv6027.jpg',
    demigod: false
  },
  {
    id: 25,
    name: "Neptune",
    powers: ["Water", "Storms", "Earthquakes"],
    mythology: "Roman",
    image:'https://thumbs.dreamstime.com/b/statue-neptune-gdansk-bronze-roman-god-sea-old-town-poland-black-white-image-64564386.jpg',
    demigod: false
  },
  {
    id: 26,
    name: "Hercules",
    powers: ["Strength"],
    mythology: "Roman",
    image:'https://cdn.pixabay.com/photo/2015/01/04/10/30/hercules-588138_1280.jpg',
    demigod: true
  },
  {
    id: 27,
    name: "Minerva",
    powers: ["Wisdom", "War", "Art", "Commerce"],
    mythology: "Roman",
    image:'https://cdn.pixabay.com/photo/2016/12/16/11/18/athens-1911113_1280.jpg',
    demigod: false
  },
  {
    id: 28,
    name: "Mars",
    powers: ["War", "Agriculture"],
    mythology: "Roman",
    image:'https://thumbs.dreamstime.com/b/statue-mars-god-war-venice-roman-sculpted-renaissance-artist-antonio-rizzo-displayed-exterior-wall-96174820.jpg',
    demigod: false
  },
  {
    id: 29,
    name: "Venus",
    powers: ["Love", "Beauty", "Fertility", "Victory"],
    mythology: "Roman",
    image:'https://i.ytimg.com/vi/KdLHfGN12XU/maxresdefault.jpg',
    demigod: false
  },
  {
    id: 30,
    name: "Diana",
    powers: ["Goddess of the Hunt", "Moon", "Birthing", "Speak to Animals"],
    mythology: "Roman",
    image:'http://getdrawings.com/images/greek-goddess-drawing-13.gif',
    demigod: false
  },
  {
    id: 31,
    name: "Vulcan",
    powers: ["Fire", "Armor", "Blacksmithing"],
    mythology: "Roman",
    image:'https://i.ytimg.com/vi/AdiksJJ5qlo/maxresdefault.jpg',
    demigod: false
  },
  {
    id: 32,
    name: "Mercury",
    powers: ["Transportation", "Mercantile", "Messenger"],
    mythology: "Roman",
    image:'https://www.greekartshop.com/image/cache/catalog/products/0/Hermes_Flying_Mercury_Greek_Roman_God_Statue_Sculpture_Figure_Bronze_Finish_14_7_4-750x750.jpg',
    demigod: false
  },
  {
    id: 33,
    name: "Ceres",
    powers: ["Agriculture", "Maternal Love"],
    mythology: "Roman",
    image:'https://thumbs.dreamstime.com/b/ceres-marble-sculpture-palace-house-pilate-sevilla-spain-roman-goddess-courtyard-casa-de-pilatos-seville-64710981.jpg',
    demigod: false
  },
  {
    id: 34,
    name: "Vesta",
    powers: ["Family", "Home"],
    mythology: "Roman",
    image:'https://www.greekartshop.com/image/cache/catalog/products/335/Hestia_Vesta_Statue_Goddess_of_Home_Family_Sculpture_Figure_Handmade_10_24_-750x750.jpg',
    demigod: false
  },
  {
    id: 35,
    name: "Bacchus",
    powers: ["Agriculture", "Wine", "Fertility"],
    mythology: "Roman",
    image:'https://thumbs.dreamstime.com/b/statue-bacchus-24500419.jpg',
    demigod: true
  }
]

const uniqueExp = {}


module.exports = {
  gods,uniqueExp,
  get: (req,res) => {
    const {apikey} = req.headers

    res.status(200).send(uniqueExp[apikey])
  },

  getOne: (req,res) => {
    const id = req.params.id
    const {apikey} = req.headers
    const num = uniqueExp[apikey].find( e => e.id == +id)
    res.status(200).send(num) 
  },

  create: (req, res) => {
    const {name, powers, mythology, demigod, image} = req.body
    const { apikey } = req.headers
    let newGod = {
      id: id++,
      name: name,
      powers: [powers],
      mythology: mythology,
      image: image,
      demigod: demigod
    }

    uniqueExp[apikey].push(newGod)
    res.status(201).send(uniqueExp[apikey])
  },

  patch: (req, res) => {
    const { id } = req.params
    const { name, powers, mythology, image} = req.body
    const { apikey } = req.headers
    let godIndex = uniqueExp[apikey].findIndex( e => e.id == +id)
    let god = uniqueExp[apikey].find(e => e.id == +id)
    console.log(god);
    let updateGod = {
      id: +id,
      name: name || god.name,
      powers: powers || god.powers,
      mythology: mythology || god.mythology,
      image: image || god.image,
      demigod: ('demigod' in req.body) ? req.body.demigod : god.demigod
    }

    uniqueExp[apikey].splice(godIndex,1,updateGod)
    res.status(202).json(updateGod)
  },
  
  put: (req, res) => {
    const { id } = req.params
    const { name, powers, mythology, image} = req.body
    const { apikey } = req.headers
    let god = uniqueExp[apikey].find( e => e.id == id)
    let updateGod = {
      id: +id,
      name: name,
      powers: powers,
      mythology: mythology,
      image: image,
      demigod: ('demigod' in req.body) ? req.body.demigod : undefined
    }

    uniqueExp[apikey].splice(god,1,updateGod)
    res.status(202).json(updateGod)
  },

  delete: (req,res) => {
    const { id } = req.params
    const { apikey } = req.headers
    
    let index = uniqueExp[apikey].findIndex( e => e.id == id)

    uniqueExp[apikey].splice(index,1)
    res.status(200).send(uniqueExp[apikey])
  },

  reset: (req, res) => {
    const { apikey } = req.headers
    let newArray = deepclone(gods)
    uniqueExp[apikey] = newArray
    res.status(200).send(uniqueExp[apikey])
  }

}