// buscar links salvos
export const getSavedLinks = async (key) => {
  const myLinks = await localStorage.getItem(key)
  let savedLinks = JSON.parse(myLinks) || []
  return savedLinks
}

// salvar links no storage
export const saveNewLink = async (key, newlink) => {
  let storedLinks = await getSavedLinks(key)

  //*logica para não permitir links duplicados
  const duplicatedLink = storedLinks.some((link) => link.id === newlink.id)
  if (duplicatedLink) {
    console.log('link duplicado')
    return
  }

  storedLinks.push(newlink)
  await localStorage.setItem(key, JSON.stringify(storedLinks))
}

// deletar links
export const deleteSavedLinks = async (key) => {
  let storedLinks = await getSavedLinks(key)
  storedLinks.map((link) => link.id !== newlink.id)
  return storedLinks
}