<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>percentage</title>
</head>

<body>
    <script>
        function percentageCalculator(marks) {
            var totalMarks = marks.reduce(function (a, b) {
                return a + b;
            });

            var percentage = totalMarks / marks.length * 100;

            return percentage;
        }

        function getGrade(percentage) {
            if (percentage >= 90) {
                return "A";
            } else if (percentage >= 80) {
                return "B";
            } else if (percentage >= 70) {
                return "C";
            } else if (percentage >= 60) {
                return "D";
            } else {
                return "F";
            }
        }

        var marks = [85, 70, 95, 80, 79];

        var percentage = percentageCalculator(marks);

        var grade = getGrade(percentage);


        console.log("The percentage is " + percentage + "%.");
        console.log("The grade is " + grade + ".");
    </script>
</body>

</html>
