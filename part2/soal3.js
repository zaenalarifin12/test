const MANDO = "Mando"
const BOBA = "Boba"
const FETT = "Fett"

function findBountyHunters(array_people)
{
    for (let i = 0; i < array_people.length; i++) {

        switch (array_people[i]) {
            case MANDO:
                return MANDO
            case BOBA:
                return BOBA
            case FETT:
                return FETT
        }
    }

    return ""
}