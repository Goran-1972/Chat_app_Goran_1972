export const randomName = () => {
  const adjectives = ['Spori', 'Slatki', 'Gladan', 'Zgodan', 'Morski', 'Divlji']
  const nouns = ['Mačak', 'Zec', 'Ris', 'Vuk', 'Galeb', 'Poskok', 'Tuljan']
  const randomIndex = () => Math.floor(Math.random() * adjectives.length)

  return `${adjectives[randomIndex()]} ${nouns[randomIndex()]}`
}
