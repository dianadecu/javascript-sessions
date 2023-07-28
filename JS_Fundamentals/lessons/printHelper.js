export function printAge(age){
    console.log(age);
}

class Customer_Details{
    printFirstName(firstName){
        console.log(firstName);
    }
    printLastName(lastName){
        console.log(lastName);
    }
}

export const customer = new Customer_Details();
