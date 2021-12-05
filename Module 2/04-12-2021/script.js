
const dummyTransactions = [
    { id: 1, name: 'APPLE iPhone 13 (Black, 128 GB)', amount: 79900 },
    { id: 2, name: 'Shockproof Case for iPhone 13', amount: 1599 },
    { id: 3, name: 'Curved Anti-Static Tempered Glass Screen Protector for iPhone 13', amount: 1499 },
 ];


 const showExpenses = () => {

    const expenseTable = document.getElementById('cartTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < dummyTransactions.length; i++){
        expenseTable.innerHTML += `
            <tr>
                <td>${dummyTransactions[i].name}</td>
                <td style="text-align:center;">${dummyTransactions[i].amount}</td>
            </tr>
        `;
    }
}

showExpenses();

form.addEventListener('submit', showExpenses);