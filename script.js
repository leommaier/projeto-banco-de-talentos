function register() {
    const profession = document.getElementById('profession').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    const newDiv = document.createElement('div')
    newDiv.className = 'new-div'
    newDiv.id = 'remove-div'+name       
    const newPlayer = document.createElement('p')        
    newPlayer.innerText = `Nome: ${name}\nProfissão: ${profession}\nE-mail: ${email}`    
    newDiv.appendChild(newPlayer)
    const playersReceiver = document.getElementById('players-receiver')
    playersReceiver.appendChild(newDiv) 
    
    document.getElementById('profession').value = ''
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
}

function remove() {
    const askToRemove = prompt('Digite o nome que deseja remover.')   
    const playerToRemove = document.getElementById('remove-div'+askToRemove)
    playerToRemove.parentNode.removeChild(playerToRemove)
    
    alert('Usuário removido!')
}

