// buscar links salvos
export const getSavedLinks = async (key) => {
  let myLinks = await localStorage.getItem(key)
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
export const deleteSavedLinks = async (linksList, linkId) => {

  let myLinks = linksList.filter((link) => link.id !== linkId)

  localStorage.setItem('@LinksEncurtados', JSON.stringify(myLinks))

  return myLinks
}
