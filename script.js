function register() {
    const profession = document.getElementById('profession').value
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value

    const newDiv = document.createElement('div')
    newDiv.className = 'new-div'
    newDiv.id = 'remove-div'+name       
    const newProfessional = document.createElement('p')        
    newProfessional.innerText = `Nome: ${name}\nProfissão: ${profession}\nE-mail: ${email}`    
    newDiv.appendChild(newProfessional)
    const professionalReceiver = document.getElementById('professional-receiver')
    professionalReceiver.appendChild(newDiv) 
    
    document.getElementById('profession').value = ''
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
}

function remove() {
    const askToRemove = prompt('Digite o nome que deseja remover.')   
    const professionalToRemove = document.getElementById('remove-div'+askToRemove)
    professionalToRemove.parentNode.removeChild(professionalToRemove)
    
    alert('Usuário removido!')
}

