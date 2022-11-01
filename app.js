console.log("JS FUNCTIONS EXERCISES");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    for (let i = 0; i <= count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName , age)
{
    const aboveSixteen = `Congrats, ${userName}, you can drive!`;
    const belowSixteen = `Sorry, ${userName}, but you need to wait until you're 16.`

    if (age <= 16)
    {
        console.log(aboveSixteen);
    } else
    {
        console.log(belowSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x , y)
{
    if (x == 0 && y == 0)
    {
        console.log("Point is on the origin.");
    }
    else if (x == 0 && y!= 0)
    {
        console.log("Point is on the y-axis.")
    }
    else if (x != 0 && y == 0)
    {
        console.log("Point is on the x-axis.")
    }
    else if (x > 0 && y > 0)
    {
        console.log("Point is within Quadrant 1 of the Cartesian plane.");
    }
    else if (x < 0 && y > 0)
    {
        console.log("Point is within Quadrant 2 of Cartesian plane.")
    }
    else if (x < 0 && y < 0)
    {
        console.log("Point is within Quadrant 3 of the Cartesian plane.");
    }
    else if (x > 0 && y < 0)
    {
        console.log("Point is within Quadrant 4 of the Cartesian plane.");
    }
    else 
    {
        console.log("Sorry. This is not a valid point.");
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function isTriangle(side1, side2, side3)
{
    if (side1 == 0 || side2 == 0 || side3 == 0)
    {
        console.log("This is not a triangle!");
    }
    else if (side1 == side2 && side1 == side3)
    {
        console.log("This is an equilateral triangle.");
    }
    else if (side1 != side2 && side1!= side3 && side2 != side3)
    {
        console.log("This is a scalene triangle.");
    }
    else if ((side1 == side2 && side1 != side3) || (side1 == side3 && side1 != side2))
    {
        console.log("This is an isosceles triangle.");
    } else{
        console.log("This is not a triangle!");
    }
}


