const fs = require('fs');
csv = fs.readFileSync('afetados.csv')

var afetados = csv.toString().split('\r\n')
const [header, ...files] = afetados
const ids = [] 
const emails = []

const fixTransactions = () => {
    
    for (const i of files) {
        const idsFile = i.split(',')
        ids.push({
            id: idsFile[0],
            
        })
    }

    console.log('Corrigindo transações dos usuários enviados');
}

const sendEmails = () => {
    
    for (const j of files) {
        const emailsFile = j.split(',')
        emails.push({
            email: emailsFile[1],
        })
    }

    console.log('Enviando comunicação para os usuários impactados' )
}    
const main = async () => {

    await fixTransactions()
    await sendEmails()
}

main()
    .then(() => console.log('Transações reprocessadas!', afetados))
    .catch(err => console.error(err))
