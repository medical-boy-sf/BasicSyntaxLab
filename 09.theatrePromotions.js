function theatrePromotions(day, age) {
    day = day.toLowerCase();
    age = Number(age);
    let price = 0;

    
    if (day == "weekday")
    {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122))
        {
            price = 12;
        }

        else if (age > 18 && age <= 64)
        {
            price = 18;
        }

        else
        {
            console.log("Error!");
            return;
        }

        console.log(`${price}$`);    }

    else if (day == "weekend")
    {
        if ((age >= 0 && age <= 18) || (age > 64 && age <= 122))
        {
            price = 15;
        }

        else if (age > 18 && age <= 64)
        {
            price = 20;
        }

        else
        {
            console.log("Error!");
            return;
        }

        console.log(`${price}$`);    }

    else if (day == "holiday")
    {
        if (age >= 0 && age <= 18)
        {
            price = 5;
        }

        else if (age > 18 && age <= 64)
        {
            price = 12;
        }

        else if (age > 64 && age <= 122)
        {
            price = 10;
        }

        else
        {
            console.log("Error!");
            return;
        }

        console.log(`${price}$`);
    }
}