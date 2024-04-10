// Exercise: Transaction analysis

const transactions = [
  { id: 1, description: 'Grocery Shopping', amount: -50 },
  { id: 2, description: 'Salary Deposit', amount: 2000 },
  { id: 3, description: 'Utility Bill Payment', amount: -100 },
  { id: 4, description: 'Online Purchase', amount: -30 }
]

// 1. Calculate Total Balance

const totalBalance = transactions.reduce((acc, transactions) => acc + transactions.amount, 0)
console.log('Total Balance: ', totalBalance)

// 2. Find the Largest Transaction (Income or Expense)

const largestTransaction = transactions.reduce((maxTransaction, transaction) => {
  return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transactions[0])
console.log('Largest Transaction: ', largestTransaction)

// 3. Filter Purchase Transactions

const purchaseTransactions = transactions.filter((num) => num.amount < 0)
console.log(' Purchase Transactions: ', purchaseTransactions)

// 4. Find a Transaction by Description

const specificTransaction = transactions.find((descriptionTransactions) => descriptionTransactions.description === 'Grocery Shopping')
console.log('Specific Transaction: ', specificTransaction)

// 5. Find the index of a Transaction by Amount
const findAmount = -100
const indexTransactionWithAmount = transactions.findIndex((transaction) => transaction.amount === findAmount)
console.log(`Index Transaction With Amount ${findAmount}:`, indexTransactionWithAmount)

// 6. Update Transaction Descriptions
transactions.forEach((transactions) => {
  const validate = transactions.amount < 0
  if (validate) {
    transactions.description = `Expense: ${transactions.description}`
  } else {
    transactions.description = `Income : ${transactions.description}`
  }
})

console.log('Udated Transactions: ', transactions)