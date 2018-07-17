let id = 36


const gods = [
  {
    id: 0,
    name: "Zeus",
    powers: ["Lightning Bolts", "Thunder", "Weather"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 1,
    name: "Hera",
    powers: ["Bless and Curse Marriages"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 2,
    name: "Achilles",
    powers: ["Invincibility", "War"],
    mythology: "Greek",
    demigod: true
  },
  {
    id: 3,
    name: "Poseidon",
    powers: ["Water", "Storms", "Lightning"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 4,
    name: "Demeter",
    powers: ["Agriculture", "Fertility of Earth"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 5,
    name: "Ares",
    powers: ["Strength", "Physicality", "Battle"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 6,
    name: "Athena",
    powers: ["Defense", "Wisdom"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 7,
    name: "Apollo",
    powers: ["Prophecy", "Healing", "Light"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 8,
    name: "Artemis",
    powers: ["Plagues", "Healing", "Protector of Children"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 9,
    name: "Hephaestus",
    powers: ["Blacksmithing"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 10,
    name: "Aphrodite",
    powers: ["Transformation", "Love"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 11,
    name: "Hermes",
    powers: ["Speed", "Flight"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 12,
    name: "Dionysus",
    powers: ["Teleportation", "Transformation", "Manipulation"],
    mythology: "Greek",
    demigod: true
  },
  {
    id: 13,
    name: "Hades",
    powers: ["Power Over the Dead","Riches"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 14,
    name: "Hypnos",
    powers: ["Sleep"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 15,
    name: "Nike",
    powers: ["Victory", "Flight"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 16,
    name: "Janus",
    powers: ["Time"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 17,
    name: "Anaeas",
    powers: ["Strength", "Stamina"],
    mythology: "Greek",
    demigod: true
  },
  {
    id: 18,
    name: "Nemesis",
    powers: ["Balance", "Justice", "Retribution"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 19,
    name: "Iris",
    powers: ["Messenger", "Flight"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 20,
    name: "Hecate",
    powers: ["Magic", "Ghosts", "Necromancy"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 21,
    name: "Tyche",
    powers: ["Fortune"],
    mythology: "Greek",
    demigod: false
  },
  {
    id: 22,
    name: "Jupiter",
    powers: ["Light and Sky", "Thunder", "Lightning"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 23,
    name: "Juno",
    powers: ["Leadership", "Queen of The Gods"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 24,
    name: "Neptune",
    powers: ["Water", "Storms", "Earthquakes"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 25,
    name: "Hercules",
    powers: ["Strength"],
    mythology: "Roman",
    demigod: true
  },
  {
    id: 26,
    name: "Minerva",
    powers: ["Wisdom", "War", "Art", "Commerce"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 27,
    name: "Mars",
    powers: ["War", "Agriculture"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 28,
    name: "Venus",
    powers: ["Love", "Beauty", "Fertility", "Victory"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 29,
    name: "Apollo",
    powers: ["Music", "Truth", "Prophecy", "Healing", "Plague", "Poetry"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 30,
    name: "Diana",
    powers: ["Goddess of the Hunt", "Moon", "Birthing", "Speak to Animals"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 31,
    name: "Vulcan",
    powers: ["Fire", "Armor", "Blacksmithing"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 32,
    name: "Mercury",
    powers: ["Transportation", "Mercantile", "Messenger"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 33,
    name: "Ceres",
    powers: ["Agriculture", "Maternal Love"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 34,
    name: "Vesta",
    powers: ["Family", "Home"],
    mythology: "Roman",
    demigod: false
  },
  {
    id: 35,
    name: "Bacchus",
    powers: ["Agriculture", "Wine", "Fertility"],
    mythology: "Roman",
    demigod: true
  }
]

const uniqueExp = ["test", "test", "test", "test1"]


module.exports = {
  gods,uniqueExp,
  get: (req,res) => {
    res.status(200).send(gods)
  },

  getOne: (req,res) => {
    const { id } = req.params
    let godIndex = gods.findIndex( e => e.id === id )
    res.status(200).send(gods[godIndex])
  },

  create: (req, res) => {
    const {name, powers, mythology, demigod} = req.body
    let newGod = {
      id: id++,
      name: name,
      powers: powers,
      mythology: mythology,
      demigod: demigod
    }
    gods.push(newGod)
    res.status(201).send(gods)
  },

  update: (req, res) => {
    const { id } = req.params
    const { name, powers, mythology, demigod } = req.body
    let index = gods.findIndex( e => e.id == id )
    console.log('is', gods[index].demigod,'should change to', demigod)
    let updateGod = {
      id: id,
      name: name || gods[index].name,
      powers: powers || gods[index].powers,
      mythology: mythology || gods[index].mythology,
      demigod: !demigod ? false : true || gods[index].demigod
    }
    gods[index] = updateGod
    console.log(gods[index])
    console.log('new demigod status', gods[index].demigod)
    res.status(200).json(gods)
  },

  delete: (req,res) => {
    const { id } = req.params
    let index = gods.findIndex(e => e.id == id)
    gods.splice(index,1)
    res.status(200).send(gods)
  }


}