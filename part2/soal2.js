function printData(users) {
    for (let i = 0; i < users.count(); i++) {
        let rate = users.get(i).getRate()
        let marginalRisk = 0.05 * users.get(i).getAge()
        let name = users.get(i).getName()
        let age = users.get(i).getAge()
        let result = `${name} ${age} ${marginalRisk} ${rate}`

    }
}
