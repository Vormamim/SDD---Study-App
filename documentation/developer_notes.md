## 10 May - Initial Investigations<a id="10-may---initial-investigations"></a>

I investigated the necessary libraries for any functions that were not already designed and re-read my implementation plan to reassess and recall the necessary features and functions of the project.


## 17 May - Basic File Template Creation<a id="17-may---basic-file-template-creation"></a>

- _Subjectstorage creation_

- _Basic folder structuring and Home file_

- _.css styling reference file_

During this period, the basic filing structures for the Subject Storage and Home file pages were made, as well as basic experimentation with CSS files.

**Home File**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Main</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
    </head>
    <body onload = "loadSubjects()" >
        <div id="leftSidebar">
            <h2>Subjects:</h2>
            <!-- dynamically add subjects based on subjects.css list-->
            </div>
        </div>
    </body>

<!---->

    <script>
    function loadSubjects() {
        // Make subjects pull from list later
        var subjects = 'Sub1, Sub2, Sub3, Sub4, Sub5, Sub6, Create New'.split(',');
        for (var c in subjects) {
            var newElement = document.createElement('div');
            newElement.id = subjects[c]; newElement.className = "subject";
            newElement.innerHTML = subjects[c];
            document.body.appendChild(newElement);
    }
    }
    </script>

**Subject Storage File**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Subject Storage</title>
    </head>

**CSS File**

    .subject {
        font-family     : Arial;
        text-align      : center;
        width           : 100px;
        height          : 15px;
        background      : #ccc;
        border          : 1px solid #000;
        box-shadow      : 1px 1px 5px -1px #000;
        padding         : 10px;
        margin-bottom   : 10px;
        cursor          : auto;
    }

<!---->

    body {
        font-family     : Arial;
        background      : #ffffff;
        margin          : 0;
        padding         : 0;
    }


## 24 May - Home updates + CSS<a id="24-may---home-updates--css"></a>

- _Updated .css file_

All of the basic page files have now been created to test the top navigation bar of the project. There were some initial issues with the implementation of the bar regarding the highlighting of the active tab, as well as selecting a different page, as the hrefs of the pages were not being followed correctly. To solve this, a standardised method of displaying and selecting the hrefs was implemented, as shown below.

        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
          </div>

This method shows the other pages relative to the current page, and refers to the current page with the “active” class to show it as selected. 

The home.html file was updated with additional hrefs for the other pages of the site

**Home.html code**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Main</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
    </head>
    <body onload = "loadSubjects()" >
        <div id="leftSidebar">
            <h2>Subjects:</h2>
            <!-- dynamically add subjects based on subjects.css list-->
            </div>
        </div>
        <div id="centerButtons" style="display: flex; flex-direction: column; align-items: center; margin-top: 50px;">
            <button onclick="location.href='../templates/GradeCalculator.html'" style="width:30%; height:120px; margin:10px;">Grade Calculator</button>
            <button onclick="location.href='../templates/SchedulePlanner.html'" style="width:30%; height:120px; margin:10px;">Schedule Planner</button>
            <button onclick="location.href='../templates/MemorisationSystem.html'" style="width:30%; height:120px; margin:10px;">Memorisation System</button>
        </div>

<!---->

    </body>

<!---->

    <script>
    function loadSubjects() {
        // Make subjects pull from list later
        var subjects = 'Sub1, Sub2, Sub3, Sub4, Sub5, Sub6, Create New'.split(',');
        for (var c in subjects) {
            var newElement = document.createElement('div');
            newElement.id = subjects[c]; newElement.className = "subject";
            newElement.innerHTML = subjects[c];
            document.body.appendChild(newElement);
    }
    }
    </script>

**Home page**

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeW-AVegIza2gLgdy7kRHbzi16b8ZKNMv_CeC6w1fQLducFmpHt-OzeKjW4Dhzl_kpKqS5niSIhC6zoWLQLAL_YD7loLalawm1JGwmYLnSnhEg1-zEIow5myLr9QOY84oaM5XMY-78AFhnbokheuMXmSis7?key=gN0_xdxwyMMxbxbHXeBexA)


## 31 May - Subject Storage<a id="31-may---subject-storage"></a>

- _Subject Storage file finished_

The basic system for the subject selection system with a manually inserted array of subjects was finished, creating new pages based on the subject template html file to display the subjects while accepting newly created subjects.

**Subject Storage Code**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SubjectStorage</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
    </head>
    <body onload="loadSubjects()">
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a class="active" href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
          </div>
          <h1 class="title">Subjects</h1>
          <div id="subjectcontainer" class="subjectwrapper">
          </div>
    </body>

<!---->

    <script>
    function loadSubjects() {
        // Make subjects pull from list later
        var subjects = 'Sub1, Sub2, Sub3, Sub4, Sub5, Sub6,Create New'.split(',');
        for (var c in subjects) {
            var div = document.getElementById('subjectcontainer')
            var newElement = document.createElement('div');
            newElement.id = subjects[c]; newElement.className = "subjectstored";
            newElement.addEventListener("click", subjectClick, false);
            newElement.innerHTML = subjects[c];
            div.appendChild(newElement);
    }
    }
    </script>
    <script>
    function subjectClick() {
        if (this.id == "Create New") {
            var newSubject = prompt("Enter the name of the new subject:");
            if (newSubject != null) {
                var div = document.getElementById('subjectcontainer')
                var newElement = document.createElement('div');
                newElement.id = newSubject; newElement.className = "subjectstored";
                newElement.addEventListener("click", subjectClick, false);
                newElement.innerHTML = newSubject;
                div.appendChild(newElement);
                var newWindow = window.open();
                newWindow.document.write("test");
            }
        }
        else {
            location.replace("./subjects/subjecttemplate.html?subject=" + this.id);
        }
    }
    </script>

This system manually pulls the six subjects in the subjects variable into the loadSubjects function to create a div for each of them. A system to get each of the subjects from a saved file and load them will be implemented later to show newly created subjects.

\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\



## 6 June - Schedule Planner and Subject Storage<a id="6-june---schedule-planner-and-subject-storage"></a>

Added basic template versions of all planned pages to test the top sidebar as a way to select different pages.

- _Schedule Planner_

The subject storage file was reworked to implement file loading to import subjects. This included implementing a number of functions to split down the file and get the arrays created from its’ data, split by the commas in the arrays.

**Subject Storage Final Version**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SubjectStorage</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
        <script src="../javascript/main.js"></script>
    </head>
    <body onload="loadSubjects()">
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a class="active" href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
          </div>
          <h1 class="title">Subjects</h1>
          <label for="TasksInput" class="btn loadbtn" style="margin-left:39%"">Load subjects from Subjectgrades file</label>
          <input id="TasksInput" style="visibility:hidden;" type="file" onchange='openTasksFile(event)'>
          <div id="subjectcontainer" class="subjectwrapper">
          </div>
    </body>

<!---->

    <script>
        const openTasksFile = (e) => {
            e.target.files[0].text().then((t) => {
                const outcome = t.split(/\r?\n/);
                console.log("File content:", outcome);
                const dataLines = outcome.slice(1);
                [group1, group2, group3] = splitAndGroupArrays(dataLines);
                console.log("Subjects Found:", group1);
                group1 = uniq(group1);
                console.log("Unique Subjects Found:", group1);
                group1.push("Create New");
                group1.forEach(subject => {
                    var div = document.getElementById('subjectcontainer')
                    var newElement = document.createElement('div');
                    newElement.id = subject; newElement.className = "subjectstored";
                    newElement.addEventListener("click", subjectClick, false);
                    newElement.innerHTML = subject;
                    div.appendChild(newElement);
                });

<!---->

            });
        };
        function splitAndGroupArrays(arrays) {
            let group1 = [];
            let group2 = [];
            let group3 = [];

<!---->

            arrays.forEach(array => {
                let sections = array.split(',');
                if (sections.length === 3) {
                    group1.push(sections[0].trim());
                    group2.push(sections[1].trim());
                    group3.push(sections[2].trim());
                } else {
                    console.warn("Error", array);
                }
            });
            return [group1, group2, group3];
        }
    </script>

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdGmu2-y2foTtRQYpTk9mO8e0U272cpxl8Ab100cZs-pbPX_bFaYEwAByXpLh97ZVPfyp2xwsaZ1nQ_DhtbvVnOi9sTFgSvRv6hU4HWOp8-QBQRkY-1t5QHAo0_JTIo3mg4a3zZqY4KUqCemsW7eyzx86k?key=gN0_xdxwyMMxbxbHXeBexA)

While creating the file reading method, it was discovered that files cannot be written to in a Javascript environment without a backend server for security reasons, causing any newly created files to be required to be locally stored.

I looked into the implementation of the schedule planner file, and assessing the different options to create the calendar and tasks menu. After looking between various libraries, the one that I ended up utilising was the FullCalendar module due to its’ simple implementation without the requirement for the end user to download any files and its’ unreliance on any backend servers, an issue faced with the manhole library.

From here, the implementation of the schedule planner was relatively simple. Initially, the main calendar was implemented without any task functionality using the basic structure laid out in the FullCalendar documentation. 

**Basic Page Code**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SchedulePlanner</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
        <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.14/index.global.min.js'></script>
    </head>
    <body onload = "loadSubjects()" >
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a class="active" href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
          </div>
          <h1 class="title">Schedule Planner</h1>
          <div id='calendar'></div>
    </body>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
          calendarEl = document.getElementById('calendar');
          calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            selectable: true,
            height:"auto"
          });
          calendar.render();
        });

**Basic Schedule Planner Menu**

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXd0yv2kNzIzOK677936wSGgIypasXf0S8un7tszFCcnF9eTVySCGHMB0tSG8M8hsru9DbtuBLc9x759kdyopep0mLqu6j-iyL1AFv6TgP8w5su0uP8OAsuDCKsFji5cd2-K8pllite2XdzxW_I50P-6fZI?key=gN0_xdxwyMMxbxbHXeBexA)

A basic tasks system was then introduced, however it still lacks the details view within the popout menu.

**Basic Tasks Menu**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SchedulePlanner</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
        <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.14/index.global.min.js'></script>
        <script src="../javascript/main.js"></script>
    </head>
    <body>
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a class="active" href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
        </div>
        <h1 class="title">Schedule Planner</h1>
        <button id="loadFileBtn" class="btn">Select Schedule File</button>
        <button id="createTaskBtn" class="btn">Create New Task</button>
        <div id='calendar'></div>

<!---->

        <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Initialize the calendar element
                calendarEl = document.getElementById('calendar');
                calendar = new FullCalendar.Calendar(calendarEl, {
                    events: [],
                    initialView: 'dayGridMonth',
                    selectable: true,
                    height: "auto",
                    eventMouseEnter: function(info) {
                showTaskDetails(info.event);
            },
            eventMouseLeave: function() {
                hideTaskDetails();
            }
                });
                calendar.render();

<!---->

                document.getElementById('loadFileBtn').addEventListener('click', loadSubjects);
                document.getElementById('createTaskBtn').addEventListener('click', createTask);
                document.getElementById('saveTaskBtn').addEventListener('click', saveTask);
                document.getElementById('cancelTaskBtn').addEventListener('click', closeTaskModal);
            });

<!---->

            function showTaskDetails(event) {
                const detailsDiv = document.createElement('div');
                detailsDiv.id = 'taskDetailsHover';
                detailsDiv.style.position = 'absolute';
                detailsDiv.style.backgroundColor = 'white';
                detailsDiv.style.border = '1px solid black';
                detailsDiv.style.padding = '10px';
                detailsDiv.style.zIndex = '1000';
                detailsDiv.innerHTML = `
                    <strong>${event.title}</strong><br>
                    Start: ${event.start.toLocaleString()}<br>
                    End: ${event.end ? event.end.toLocaleString() : 'N/A'}<br>
                    Details: ${event.extendedProps.details || 'No details provided'}
                `;
           
                function hideTaskDetails() {
                    const detailsDiv = document.getElementById('taskDetailsHover');
                    if (detailsDiv) {
                        detailsDiv.remove();
                }
            }
        document.body.appendChild(detailsDiv);
        document.addEventListener('mousemove', function moveListener(e) {
            detailsDiv.style.left = e.pageX + 10 + 'px';
            detailsDiv.style.top = e.pageY + 10 + 'px';
        }, { once: true });
    }

<!---->

            function loadSubjects() {
                const input = document.createElement('input');
                input.type = 'file';
                input.onchange = openSubjectsFile;
                input.click();
            }

<!---->

            const openSubjectsFile = (e) => {
                e.target.files[0].text().then((t) => {
                    const outcome = t.split(/\r?\n/);
                    console.log("File content:", outcome);
                    const dataLines = outcome.slice(1);
                    const [titles, starts, ends, colors] = splitAndGroupArrays(dataLines);
                    console.log("Titles:", titles);
                    console.log("Starts:", starts);
                    console.log("Ends:", ends);
                    console.log("Colors:", colors);

<!---->

                    const events = titles.map((title, index) => ({
                        title: title,
                        start: starts[index],
                        end: ends[index],
                        color: colors[index]
                    }));

<!---->

                    localStorage.setItem('scheduleEvents', JSON.stringify(events));

<!---->

                    updateCalendar();
                });
            };

<!---->

            function splitAndGroupArrays(arrays) {
                let group1 = [];
                let group2 = [];
                let group3 = [];
                let group4 = [];
                let group5 = [];

<!---->

                arrays.forEach(array => {
                    let sections = array.split(',');

<!---->

                    if (sections.length === 5) {
                        group1.push(sections[0].trim());
                        group2.push(sections[1].trim());
                        group3.push(sections[2].trim());
                        group4.push(sections[3].trim());
                    } else {
                        console.warn("Error", array);
                    }
                });

<!---->

                return [group1, group2, group3, group4];
            }

<!---->

            function createTask() {
            var newTask = prompt("Enter the name of the task:");
            var startDate = prompt("Enter start date of the task (Format - YYYY:MM:DD):");
            var endDate = prompt("Enter end date of the task (Format - YYYY:MM:DD):");
            var details = prompt("Task Details:");
            if (newTask != null) {
                newTask = {
                    title: newTask,
                    start: startDate,
                    end: endDate,
                    details: details
                };
                const existingEvents = JSON.parse(localStorage.getItem('scheduleEvents')) || [];
                existingEvents.push(newTask);
                localStorage.setItem('scheduleEvents', JSON.stringify(existingEvents));
                updateCalendar();
            }
            }

<!---->

            function updateCalendar() {
                const events = JSON.parse(localStorage.getItem('scheduleEvents')) || [];

<!---->

                calendar.removeAllEvents();
                events.forEach(event => calendar.addEvent(event));
                calendar.render();
            }

<!---->

            document.addEventListener('DOMContentLoaded', updateCalendar);
        </script>
    </body>
    </html>

This included a method to create tasks, as well as a method to locally save the created tasks to ensure they remain consistent.

The template for these tasks to be loaded into was also developed in its’ basic form. This template loads the subject information from the subject and creates a basic page around it.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXebdbECImJUhOYpvla0cBzvUzSo3D155VpdLXLRJ8p_4zqNc7dGXfoi9BfgVtZx9n0nHmkGnz5loCn0ZAJmn-rHg9vAfbo4tVHWwj8dIFj00z7aRW5EJrqI9IZoww5rC4KNjXSZqPdrlNxj97vZPbTGOKg?key=gN0_xdxwyMMxbxbHXeBexA)


## 13 June - Grades Calculator and Memorisation System<a id="13-june---grades-calculator-and-memorisation-system"></a>

The grades system was largely developed utilising similar code from the previous modules, particularly regarding the file loading and array separation functions. 

**Grade Calculator**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Grade Calculator</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"> </script>
    </head>
    <body onload = "init()" >
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a class="active" href="../templates/GradeCalculator.html">Grade Calculator</a>
        </div>
        <h1 class="title">Grade Calculator</h1>
        <label for="TasksInput" class="btn">Select Grades File</label>
        <input id="TasksInput" style="visibility:hidden;" type="file" onchange='openTasksFile(event)'>
        <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
    </body>

<!---->

    <script>
        var xValues = ["A", "B", "C", "D", "E"];
        var yValues = [55, 49, 44, 24, 15];
        var barColors = ["red", "green", "blue", "orange", "brown"];
        var myChart; // Declare myChart globally

<!---->

        function init() {
            // Initialize the chart after the DOM has loaded
            var ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{ ticks: { beginAtZero: true } }]
                    },
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Grades"
                    }
                }
            });
        }

<!---->

        const openTasksFile = (e) => {
            e.target.files[0].text().then((t) => {
                const outcome = t.split(/\r?\n/);
                console.log("File content:", outcome);
                // Skip the header line and process the rest
                const dataLines = outcome.slice(1);
                const [group1, group2, group3] = splitAndGroupArrays(dataLines);
                console.log("Group 1:", group1);
                console.log("Group 2:", group2);
                console.log("Group 3:", group3);

<!---->

                // Update xValues and yValues
                xValues = group2;
                yValues = group3.map(Number); // Ensure grades are numbers

<!---->

                // Redraw the chart with the new data
                updateChart();
            });
        };

<!---->

        function updateChart() {
            myChart.data.labels = xValues;
            myChart.data.datasets[0].data = yValues;
            myChart.update();
        }

<!---->

        function splitAndGroupArrays(arrays) {
            // Initialize arrays to hold grouped sections
            let group1 = [];
            let group2 = [];
            let group3 = [];

<!---->

            // Loop through each array in the input
            arrays.forEach(array => {
                // Split the string by commas
                let sections = array.split(',');

<!---->

                // Add each section to its corresponding group
                if (sections.length === 3) {
                    group1.push(sections[0].trim());
                    group2.push(sections[1].trim());
                    group3.push(sections[2].trim());
                } else {
                    console.warn("Error", array);
                }
            });

<!---->

            // Return the grouped arrays
            return [group1, group2, group3];

The Chart.js library was implemented to ensure that the graphs are as flexible and smooth as possible while ensuring that it can be run off of a users’ local device with no backend support. However, there are currently some issues with calculating the overall grades of the attached file. 

The memorisation system was also designed this week, with a popout window offering the question and possible answers in a similar format to that laid out in the storyboard for the implementation plan.

**Memorisation System Code**

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>MemorisationSystem</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
    </head>
    <body onload="">
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a class="active" href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
        </div>
        <h1 class="title">Memoriser</h1>
        <div class="flashcard-container">
            <h2>Click the "Start" button to select a flashcard file to practice</h2>
            <div class="flashcard-types">
                <button id="startButton">Start</button>
                <input id="questionsFile" type="file" style="visibility:hidden;" onchange='loadQuestions(event)'>
            </div>
            <dialog>
                <div class="flashcard" id="flashcard">
                    <span id="questionText"></span><br>
                    <button id="answer1" onclick="checkAnswer(this)"></button><br>
                    <button id="answer2" onclick="checkAnswer(this)"></button><br>
                    <button id="answer3" onclick="checkAnswer(this)"></button><br>
                    <button id="answer4" onclick="checkAnswer(this)"></button>
                </div>
                <div class="action-buttons">
                    <button onclick="nextQuestion()">Next</button>
                    <button onclick="closeDialog()">Close</button>
                </div>
                <div id="result"></div>
            </dialog>
        </div>
    </body>
    <script>
        let questions = [];
        let currentQuestionIndex = 0;

<!---->

        document.getElementById('startButton').addEventListener('click', function () {
            document.getElementById('questionsFile').click();
        });

<!---->

        function loadQuestions(event) {
            const file = event.target.files[0];
            if (file) {
                file.text().then((text) => {
                    const lines = text.split(/\r?\n/);
                    questions = lines.map(line => line.split(',')).filter(parts => parts.length === 5);
                    console.log(questions);
                    if (questions.length > 0) {
                        currentQuestionIndex = Math.floor(Math.random() * questions.length);
                        showQuestion(currentQuestionIndex);
                        document.querySelector('dialog').showModal();
                    }
                });
            }
        }

<!---->

        function showQuestion(index) {
            const [question, a1, a2, a3, a4] = questions[index];
            document.getElementById('questionText').textContent = question;
           
            // Randomize the order of answers
            const answers = [a1, a2, a3, a4];
            shuffleArray(answers);
           
            document.getElementById('answer1').textContent = answers[0];
            document.getElementById('answer2').textContent = answers[1];
            document.getElementById('answer3').textContent = answers[2];
            document.getElementById('answer4').textContent = answers[3];
           
            document.getElementById('result').textContent = '';
        }

<!---->

        function checkAnswer(button) {
            const selectedAnswer = button.textContent.trim();
            const correctAnswer = questions[currentQuestionIndex][1]; // First answer is correct

<!---->

            const resultDiv = document.getElementById('result');
            if (selectedAnswer === correctAnswer) {
                resultDiv.textContent = 'correct';
                resultDiv.style.color = 'green';
            } else {
                resultDiv.textContent = 'incorrect';
                resultDiv.style.color = 'red';
            }
        }

<!---->

        function nextQuestion() {
            currentQuestionIndex = Math.floor(Math.random() * questions.length);
            showQuestion(currentQuestionIndex);
        }

<!---->

        function closeDialog() {
            document.querySelector('dialog').close();
        }

<!---->

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    </script>
    </html>

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfmI-uCo9Whitcx5BDafKeOLPkfqffe0BL9wpjCfPL7OLTDXeCGEmXQXvXi3h_hmt2GYv3btyxe6VstWTMZK1eR9BKfQvTdYJpLXbluK4Higw5LSummhpzDPVbRmDo38BtCe3duhVsTvNy7CI4bsAhda4M?key=gN0_xdxwyMMxbxbHXeBexA)

Some default flashcards were generated by ChatGPT as an example for the usage.


##  20 June - Completion<a id="20-june---completion"></a>

- _Project Completion_

The grades menu was completed with the calculations of the grades working and the layout fixed to allow both divs to be aligned vertically together

**Grades Calculator Menu**

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdMg6nHvVn_T2cCqWn0VoBIkejnje6Sh1zsxbGuOy0xo4Bp4Cx2V7uJENkVLgGtjb_zjf3OpZRfIF3AkMC7HxbaeIxB2L2G8qA8xnHDG_vzATu5iDM3EfFVWmexH61zy7-c5B5pC1wKto_hxejDhOCSsd3p?key=gN0_xdxwyMMxbxbHXeBexA)

The CSS file was finalised with some finishing touches to ensure that the project flows together as well as possible.

    .subject {
        font-family     : Arial;
        text-align      : center;
        width           : 100px;
        height          : 15px;
        background      : #ccc;
        border          : 1px solid #000;
        box-shadow      : 1px 1px 5px -1px #000;
        padding         : 10px;
        margin-bottom   : -15px;
        margin-top      : 30px;
        cursor          : pointer;
    }

<!---->

    .center {
        margin: auto;
    }

<!---->

    body {
        font-family     : Arial;
        background      : #757373;
        margin          : 0;
        padding         : 0;
    }

<!---->

    .topnav {
        background-color: #333;
        overflow: hidden;
      }
     
      .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
     
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
     
      .topnav a.active {
        background-color: #04AA6D;
        color: white;
      }

<!---->

      .title {
        font-family     : Arial;
        text-align      : center;
        width           : 100%;
        height          : 60px;
        background      : #ccc;
        border          : 1px solid #000;
        padding         : 0px;
        margin-bottom   : 10px;
        cursor          : pointer;
      }

<!---->

      .subjectstored {
        font-family     : Arial;
        font-size       : 30px;
        text-align      : center;
        line-height     : 150%;
        width           : 60%;
        height          : 50px;
        background      : #ccc;
        border          : 1px solid #000;
        box-shadow      : 1px 1px 5px -1px #000;
        padding         : 10px;
        margin-bottom   : 25px;
        margin-top      : 25px;
        cursor          : pointer;
        display: flex;
        justify-content: center;
      }

<!---->

      .subjectwrapper {
        margin-left:25%;

<!---->

      }

<!---->

      .sidebar  {
        font-family     : Arial;
        font-size       : 30px;
        text-align      : center;
        width           : 23%;
        height          : 75px;
        background      : #ccc;
        border          : 1px solid #000;
        box-shadow      : 1px 1px 5px -1px #000;
        padding         : 10px;
        margin-bottom   : 25px;
        margin-top      : 25px;
        cursor          : pointer;
        justify-content: center;
      }

<!---->

      .right-sidebar {
        margin-left: auto;
        margin-right: 5%;
      }

<!---->

      .left-sidebar {
        margin-left: -94%;
        margin-right: auto;
      }

<!---->

      .gradetable {
        background:#979090;
        margin-left: auto;
        margin-right: 15%;
      }

<!---->

      .titlewrapper {
        background:#979090;
        width: 100%;
        height: 160px;
        border          : 1px solid #000;
        display: flex;
      }

<!---->

      .gradestable {
        background:#979090;
        height: 350px;
      }

<!---->

      .taskstable {
        background:#552727;
        height: 350px;
        margin-left:-119%;
      }

<!---->

      h1 {
        text-align: center;
        font-size: 50px;
        color: black;
    }
     
      .loadbtn {
        font-family     : Arial;
        font-size       : 20px;
        text-align      : center;
        line-height     : 0%;
        width           : 20%;
        height          : 75px;
        background      : #7460b9;
        border          : 1px solid #000;
        box-shadow      : 1px 1px 5px -1px #000;
        padding         : 10px;
        margin-bottom   : 25px;
        margin-top      : 25px;
        cursor          : pointer;
      }

<!---->

      .grade {
        font-family     : Arial;
        font-size       : 30px;
        text-align      : center;
        width           : 100%;
        height          : 50px;
        background      : #ccc;
        border          : 1px solid #000;
        box-shadow      : 1px 1px 5px -1px #000;
        padding         : 10px;
        margin-bottom   : -15px;
        margin-top      : 30px;
        cursor          : pointer;
      }

<!---->

     

Some example flashcards were generated by ChatGPT to fill in the flashcards section.


## Section 1 - Home Menu<a id="section-1---home-menu"></a>

### Initial design<a id="initial-design"></a>

As this section was the first to be designed, it also had the first basic GUI selections that would be standardised across the rest of the application, such as the design of the top navigation bar. This navigation bar was created using a div storing each of the buttons, with a href to each of them that have to be manually changed each time a new page to be placed onto the top navigation bar was created.

        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
          </div>
    CSS Styling
    .topnav {
        background-color: #333;
        overflow: hidden;
      }
     
      .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
      }
     
      .topnav a:hover {
        background-color: #ddd;
        color: black;
      }
     
      .topnav a.active {
        background-color: #04AA6D;
        color: white;
      }

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdECTtb8OBCmVDSggWBNnAlvlXsoCjjU1aI94cRer8a2nYVMqimd-jFfj-9jM5zkXbXvW0k7DFbMsl9HBufE4Xsk9tysJVmF18aIu_f6QmQpVVrqIQonqOv8D5JjA_wIohGr0v5CkI_gvn-QlcurxXMZ7i0?key=gN0_xdxwyMMxbxbHXeBexA)


## Section 2 - Subjects Menu<a id="section-2---subjects-menu"></a>

### Initial implementation of File Reader<a id="initial-implementation-of-file-reader"></a>

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfY6c5rqeUOI7JxZGtRIZUQD67XBJfYudEfO-1OwLeoyAmdmoLV3VpDrTm5BF0GyOj4BG6UXvc9puTiwTAjkIPC0cBkZe410_mcqQavonUmrgi5jmfGJeJeZ6PTFxn_UT1QP212zHXnNIr2Xx4XASSv5--x?key=gN0_xdxwyMMxbxbHXeBexA)

The initial file reading method had issues in its’ logic, causing splits to be made between each letter in the array, instead of splits being made at each of the commas to get the different sections of the file as separate arrays to be read. This caused the issue in the image above. This issue was furthered when it was added to the correct table.

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXc-KQM5snh2jufy2tsA809BrLnpDvGMn7VzC5s5F77Ubf3NIFx0Ig18apNxlUeNzbcm8B5kezpGViUnq9uM_q2LpnHWYTqa3ex1pXc5fsTKiE8HErSjHNEaewBj_1DDMK-3L3HuzzfhcaYiCOO-V7v92k_l?key=gN0_xdxwyMMxbxbHXeBexA)

After moving into correct table in the top-right of the page, the issue was furthered, as the individual letters were being read as separate arrays, causing them to be split into the task and grade columns.


### openFile function updates<a id="openfile-function-updates"></a>

#### The openFile function was changed to the following code:<a id="the-openfile-function-was-changed-to-the-following-code"></a>

        const openTasksFile = (e) => {
            e.target.files[0].text().then((t) => {
                const outcome = t.split(/\r?\n/);
                console.log("File content:", outcome);
                const dataLines = outcome.slice(1);
                [group1, group2, group3] = splitAndGroupArrays(dataLines);
                console.log("Subjects Found:", group1);
                group1 = uniq(group1);
                console.log("Unique Subjects Found:", group1);
                group1.forEach(subject => {
                    var newElement = document.createElement('div');
                    newElement.id = subject; newElement.className = "subject";
                    newElement.innerHTML = subject;
                    newElement.addEventListener("click", subjectClick, false);
                    document.body.appendChild(newElement);
                });

<!---->

            });
        };

The openFile function varies slightly between pages depending on the type of function to be opened and the data that needs to be extracted. The above version is the final version implemented into the subject template page. 


#### Code rundown:<a id="code-rundown"></a>

- The text is gathered from the opend files

- A constant is formed of the split text arrays from the main text segment

- The first segment of the array is sliced off, as it is redundant

- The code is run through the SplitandGroupArrays function

- The returned group1 segment, which is the subjects, is run through the uniq function

- Each of the subjects in group 1 have a div created, which is then given the click function, and appended to the document.


### splitAndGroupArrays function<a id="splitandgrouparrays-function"></a>

The splitAndGroupArrays function was made separate from the main openFile function for purposes of simplicity in implementing the code into other pages due to the changes required, as well as the potential need for one but not both of these functions in other applications across the site.


#### Code:<a id="code"></a>

    function splitAndGroupArrays(arrays) {
            let group1 = [];
            let group2 = [];
            let group3 = [];

<!---->

            arrays.forEach(array => {
                let sections = array.split(',');
                if (sections.length === 3) {
                    group1.push(sections[0].trim());
                    group2.push(sections[1].trim());
                    group3.push(sections[2].trim());
                } else {
                    console.warn("Error", array);
                }
            });
            return [group1, group2, group3];
        }


#### Code Rundown:<a id="code-rundown-1"></a>

- However many groups are necessary (in this case three) are formed to hold the split arrays

- For each array, the commas are found and the arrays are split at each of them into their split array groups defined previously.

- The sections are pushed into their respective groups.

- The three groups are returned to the openFile or similar function


### Uniq function<a id="uniq-function"></a>

The Uniq function was designed for the home and subject selection screens, but was first implemented into the subject selection menu. It goes through the list of subjects provided to it and pulls the unique subjects.


#### Code:<a id="code-1"></a>

    function uniq(a) {
        var seen = {};
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }


#### Code Rundown:<a id="code-rundown-2"></a>

- A variable is established for seen subjects to be held in

- The provided subjects are filtered based on whether the subject has been seen. If it has been seen, it is added to the seen variable to be checked against the future subjects.


### Subject Storage Full code:<a id="subject-storage-full-code"></a>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SubjectStorage</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
    </head>
    <body onload="loadSubjects()">
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a class="active" href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
          </div>
          <h1 class="title">Subjects</h1>
          <div id="subjectcontainer" class="subjectwrapper">
          </div>
    </body>

<!---->

    <script>
    function loadSubjects() {
        // Make subjects pull from list later
        var subjects = 'Sub1, Sub2, Sub3, Sub4, Sub5, Sub6,Create New'.split(',');
        for (var c in subjects) {
            var div = document.getElementById('subjectcontainer')
            var newElement = document.createElement('div');
            newElement.id = subjects[c]; newElement.className = "subjectstored";
            newElement.addEventListener("click", subjectClick, false);
            newElement.innerHTML = subjects[c];
            div.appendChild(newElement);
    }
    }
    </script>
    <script>
    function subjectClick() {
        if (this.id == "Create New") {
            var newSubject = prompt("Enter the name of the new subject:");
            if (newSubject != null) {
                var div = document.getElementById('subjectcontainer')
                var newElement = document.createElement('div');
                newElement.id = newSubject; newElement.className = "subjectstored";
                newElement.addEventListener("click", subjectClick, false);
                newElement.innerHTML = newSubject;
                div.appendChild(newElement);
                var newWindow = window.open();
                newWindow.document.write("test");
            }
        }
        else {
            location.replace("./subjects/subjecttemplate.html?subject=" + this.id);
        }
    }
    </script>


## Section 3 - Grade Calculator<a id="section-3---grade-calculator"></a>

The default values for the chart are set at the top of the script section to create a default graph:

        var xValues = ["A", "B", "C", "D", "E"];
        var yValues = [55, 49, 44, 24, 15];
        var barColors = ["red", "green", "blue", "orange", "brown"];
        var myChart;


### Init Function<a id="init-function"></a>

        function init() {
            var ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{ ticks: { beginAtZero: true } }]
                    },
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Grades"
                    }
                }
            });
        }

Code Rundown:

- The “mychart” element in the HTML file is found by its’ id, and the content in it is gotte nto be modified.

- The settings for the chart are filled in, such as display settings and scale types.


### Modified openTasksFile function<a id="modified-opentasksfile-function"></a>

#### Code:<a id="code-2"></a>

                // group12 is the merged groups 1 and 2 to display both the subject and task on the grade column
                const group12 = [];
                    for (let i = 0; i < group1.length; i++) {
                    group12.push(`${group1[i]} ${group2[i]}`);
                    }
                xValues = group12;
                yValues = group3.map(Number);
                updateChart();
                updateGrades(group1, group3);


#### Code Rundown:<a id="code-rundown-3"></a>

- A constant for group12 is created to hold the merged groups 1 and 2

- For the length of group1, as it is assumed that both groups are the same length, the corresponding group1 and group2 sections are merged and pushed into group12

- The x values for the chart are set to the outcome of group12

- The y values for the chart are set to a map that is created according to the number of grades in group3 and the total grades.

- The updateChart function is ran

- The updateGrades function is ran with the results of groups 1 and 3

\



### UpdateGrades Function<a id="updategrades-function"></a>

#### Code:<a id="code-3"></a>

        function updateGrades(subjects, grades) {
        const sidebar = document.getElementById('gradesSidebar');
        const subjectGradesMap = {};

<!---->

        for (let i = 0; i < subjects.length; i++) {
            const subject = subjects[i];
            const grade = Number(grades[i]);
            if (!subjectGradesMap[subject]) {
                subjectGradesMap[subject] = [];
            }
            subjectGradesMap[subject].push(grade);
        }
        for (const subject in subjectGradesMap) {
            const subjectGrades = subjectGradesMap[subject];
            const totalGrades = subjectGrades.reduce((sum, grade) => sum + grade, 0);
            const averageGrade = totalGrades / subjectGrades.length;

<!---->

            const div = document.createElement('div');
            div.textContent = `${subject}: ${averageGrade.toFixed(2)}`;
            div.classList.add('grade');
           
            sidebar.appendChild(div);
        }
    }


#### Code Rundown:<a id="code-rundown-4"></a>

- The “subjects” and “grades” inputs are taken from the previously split arrays in splitAndGroupArrays

- The sidebar is pulled from the “gradesSidebar” element in the HTML section

- An empty map constant is created to hold the created map of the grades

- For the subject length:

  - The subject constant is defined as the subject the loop is currently up to

  - The grade is set to the current grade in the loop, turned into a number instead of a string

  - If the subject isn’t already in the map, it is pushed into it.

* For each subject in the grades map:

  - The subjectGrades variable is set to the subject inside of the map

  - The totalgrades of the subject are pulled from the subjectGrades variable, with the current grade of the subject being added to the overall sum

  - The average grade is calculated by the total number of grades divided by the total length of the array of subject grades

  -


### Grade Calculator Full Code:<a id="grade-calculator-full-code"></a>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Grade Calculator</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"> </script>
    </head>
    <body onload = "init()" >
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a class="active" href="../templates/GradeCalculator.html">Grade Calculator</a>
        </div>
        <h1 class="title">Grade Calculator</h1>
        <label for="TasksInput" class="btn">Select Grades File</label>
        <input id="TasksInput" style="visibility:hidden;" type="file" onchange='openTasksFile(event)'>
        <canvas id="myChart" style="width:100%;max-width:700px"></canvas>
    </body>

<!---->

    <script>
        var xValues = ["A", "B", "C", "D", "E"];
        var yValues = [55, 49, 44, 24, 15];
        var barColors = ["red", "green", "blue", "orange", "brown"];
        var myChart;

<!---->

        function init() {
            var ctx = document.getElementById('myChart').getContext('2d');
            myChart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: xValues,
                    datasets: [{
                        backgroundColor: barColors,
                        data: yValues
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{ ticks: { beginAtZero: true } }]
                    },
                    legend: { display: false },
                    title: {
                        display: true,
                        text: "Grades"
                    }
                }
            });
        }

<!---->

        const openTasksFile = (e) => {
            e.target.files[0].text().then((t) => {
                const outcome = t.split(/\r?\n/);
                console.log("File content:", outcome);
                const dataLines = outcome.slice(1);
                const [group1, group2, group3] = splitAndGroupArrays(dataLines);
                console.log("Group 1:", group1);
                console.log("Group 2:", group2);
                console.log("Group 3:", group3);
                xValues = group2;
                yValues = group3.map(Number);
                updateChart();
            });
        };

<!---->

        function updateChart() {
            myChart.data.labels = xValues;
            myChart.data.datasets[0].data = yValues;
            myChart.update();
        }

<!---->

        function splitAndGroupArrays(arrays) {
            let group1 = [];
            let group2 = [];
            let group3 = [];

<!---->

            arrays.forEach(array => {
                let sections = array.split(',');
                if (sections.length === 3) {
                    group1.push(sections[0].trim());
                    group2.push(sections[1].trim());
                    group3.push(sections[2].trim());
                } else {
                    console.warn("Error", array);
                }
            });
            return [group1, group2, group3];
        }
    </script>


## Section 4 - Schedule Planner<a id="section-4---schedule-planner"></a>

The creation of the schedule planner was a relatively straightforward process, utilising an external library in order to form the calendar. The library fullCalender was selected, as it had the easiest integration with no server-side requirements, and could be fully implemented through a script tag. The Mantime library was also considered, being open-source and more accessible, but ultimately rejected in favour of FullCalendar due to its’ requirement to either be installed onto a backend server or the client’s system, which was deemed inefficient.


### Startup function on Document content loaded:<a id="startup-function-on-document-content-loaded"></a>

#### Code:<a id="code-4"></a>

            document.addEventListener('DOMContentLoaded', function() {
                calendarEl = document.getElementById('calendar');
                calendar = new FullCalendar.Calendar(calendarEl, {
                    events: [],
                    initialView: 'dayGridMonth',
                    selectable: true,
                    height: "auto",
                    eventMouseEnter: function(info) {
                showTaskDetails(info.event);
            },
            eventMouseLeave: function() {
                hideTaskDetails();
            }
                });
                calendar.render();

<!---->

                document.getElementById('loadFileBtn').addEventListener('click', loadSubjects);
                document.getElementById('createTaskBtn').addEventListener('click', createTask);
            });


#### Code Rundown:<a id="code-rundown-5"></a>

- An event listener is added for the page being loaded to run the function

- A variable with the calendar’s location within the site is created

- A “calendar” variable is created through a new calendar object formed through the .Calendar function in the FullCalendar library

  - The details of the task, as well as the event for a mouse hovering over the task, are inserted.

* The showTaskDetails function is run with the info of the mouse hovering over the task

* The render function in the FullCalendar library is run with the current calendar variable

* The ‘loadFileBtn’ and ‘createTaskBtn’ elements in the HTML code are located, and event listeners are added onto both to detect when they are clicked, with the loadSubjects and createTask functions respectively being run.


### eventMouseLeave function<a id="eventmouseleave-function"></a>

This function was initially stored within the previous function, but was made independent to be called separately.


#### Code:<a id="code-5"></a>

            eventMouseLeave: function() {
                hideTaskDetails();
            }
                });


#### Code Rundown:<a id="code-rundown-6"></a>

- When the mouse leaves the task and the function is run, the hideTaskDetails function is run.


### hideTaskDetails function<a id="hidetaskdetails-function"></a>

#### Code:<a id="code-6"></a>

    function hideTaskDetails() {
        const detailsDiv = document.getElementById('taskDetailsHover');
        if (detailsDiv) {
            detailsDiv.remove();
        }
    }


#### Code Rundown:<a id="code-rundown-7"></a>

- A detailsDiv constant is created to store the location of the taskDetailsHover element

- If the detailsDiv constant has anything inside of it, it is removed.


### createTask function<a id="createtask-function"></a>

#### Code:<a id="code-7"></a>

    function createTask() {
        var newTask = prompt("Enter the name of the task:");
        var startDate = prompt("Enter start date of the task (Format - YYYY:MM:DD):");
        var endDate = prompt("Enter end date of the task (Format - YYYY:MM:DD):");
        var details = prompt("Task Details:");
        if (newTask != null) {
            newTask = {
                title: newTask,
                start: startDate,
                end: endDate,
                extendedProps: { details: details }
            };
            const existingEvents = JSON.parse(localStorage.getItem('scheduleEvents')) || [];
            existingEvents.push(newTask);
            localStorage.setItem('scheduleEvents', JSON.stringify(existingEvents));
            updateCalendar();
        }
    }


#### Code Rundown:<a id="code-rundown-8"></a>

- Four message prompts in the order task name, start date, end date and details are created, with their outputs being stored in variables newTask, startDate, endDate and details respectively.

- If the name of the task is present:

  - The task is filled with the data from the four prompt variables

* A constant is created to hold the existing events already stored in the local storage of the browser

* The json of the local storage is parsed to retrieve the schedule events

* The parsed events are pushed to the existingEvents variable

* The current tasks are set into the local storage.

* The updateCalendar function is run


### updateCalendar function<a id="updatecalendar-function"></a>

#### Code:<a id="code-8"></a>

    function updateCalendar() {
        const events = JSON.parse(localStorage.getItem('scheduleEvents')) || [];
        calendar.removeAllEvents();
        events.forEach(event => {
            calendar.addEvent({
                title: event.title,
                start: event.start,
                end: event.end,
                extendedProps: { details: event.extendedProps ? event.extendedProps.details : '' } // Ensure extendedProps
            });
        });
        calendar.render();
    }


#### Code Rundown:<a id="code-rundown-9"></a>

- The events are parsed from the local storage’s scheduleEvents variable

- All of the current events are wiped through the removeAllEvents function in the FullCalendar library

- For each event in the parsed json array:

  - The addEvent function is run from the FullCalendar library

    - All of the data for the calendar is added to the created event

- Calendar.render is run from the FullCalendar library to form the updated calendar

\



### Schedule Planner Full Code:<a id="schedule-planner-full-code"></a>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SchedulePlanner</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
        <script src='https://cdn.jsdelivr.net/npm/fullcalendar@6.1.14/index.global.min.js'></script>
    </head>
    <body>
        <div class="topnav">
            <a href="../templates/home.html">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a class="active" href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
        </div>
        <h1 class="title">Schedule Planner</h1>
        <button id="loadFileBtn" class="btn">Select Schedule File</button>
        <button id="createTaskBtn" class="btn">Create New Task</button>
        <div id='calendar'></div>

<!---->

        <!-- Modal for creating new task -->
        <div id="taskModal" style="display:none;">
            <div>
                <label for="taskTitle">Title:</label>
                <input type="text" id="taskTitle">
            </div>
            <div>
                <label for="taskStart">Start Date:</label>
                <input type="date" id="taskStart">
            </div>
            <div>
                <label for="taskEnd">End Date:</label>
                <input type="date" id="taskEnd">
            </div>
            <div>
                <label for="taskDetails">Details:</label>
                <input type="text" id="taskDetails">
            </div>
            <button id="saveTaskBtn">Save Task</button>
            <button id="cancelTaskBtn">Cancel</button>
        </div>

<!---->

        <script>
            document.addEventListener('DOMContentLoaded', function() {
                // Initialize the calendar element
                calendarEl = document.getElementById('calendar');
                calendar = new FullCalendar.Calendar(calendarEl, {
                    events: [],
                    initialView: 'dayGridMonth',
                    selectable: true,
                    height: "auto"
                });
                calendar.render();

<!---->

                // Add event listeners to buttons
                document.getElementById('loadFileBtn').addEventListener('click', loadSubjects);
                document.getElementById('createTaskBtn').addEventListener('click', openTaskModal);
                document.getElementById('saveTaskBtn').addEventListener('click', saveTask);
                document.getElementById('cancelTaskBtn').addEventListener('click', closeTaskModal);
            });

<!---->

            function loadSubjects() {
                // Trigger file input to select a file
                const input = document.createElement('input');
                input.type = 'file';
                input.onchange = openSubjectsFile;
                input.click();
            }

<!---->

            const openSubjectsFile = (e) => {
                e.target.files[0].text().then((t) => {
                    const outcome = t.split(/\r?\n/);
                    console.log("File content:", outcome);
                    // Skip the header line and process the rest
                    const dataLines = outcome.slice(1);
                    const [titles, starts, ends, colors] = splitAndGroupArrays(dataLines);
                    console.log("Titles:", titles);
                    console.log("Starts:", starts);
                    console.log("Ends:", ends);
                    console.log("Colors:", colors);

<!---->

                    // Create events array
                    const events = titles.map((title, index) => ({
                        title: title,
                        start: starts[index],
                        end: ends[index],
                        color: colors[index] // Assume the fourth section is for event colors
                    }));

<!---->

                    // Save events to local storage
                    localStorage.setItem('scheduleEvents', JSON.stringify(events));

<!---->

                    // Update the calendar with new events
                    updateCalendar();
                });
            };

<!---->

            function splitAndGroupArrays(arrays) {
                // Initialize arrays to hold grouped sections
                let group1 = [];
                let group2 = [];
                let group3 = [];
                let group4 = [];

<!---->

                // Loop through each array in the input
                arrays.forEach(array => {
                    // Split the string by commas
                    let sections = array.split(',');

<!---->

                    // Add each section to its corresponding group
                    if (sections.length === 4) {
                        group1.push(sections[0].trim());
                        group2.push(sections[1].trim());
                        group3.push(sections[2].trim());
                        group4.push(sections[3].trim());
                    } else {
                        console.warn("Error", array);
                    }
                });

<!---->

                // Return the grouped arrays
                return [group1, group2, group3, group4];
            }

<!---->

            function openTaskModal() {
                document.getElementById('taskModal').style.display = 'block';
            }

<!---->

            function closeTaskModal() {
                document.getElementById('taskModal').style.display = 'none';
            }

<!---->

            function saveTask() {
                const title = document.getElementById('taskTitle').value;
                const start = document.getElementById('taskStart').value;
                const end = document.getElementById('taskEnd').value;
                const details = document.getElementById('taskDetails').value;

<!---->

                // Create new task object
                const newTask = {
                    title: title,
                    start: start,
                    end: end,
                    details: details
                };

<!---->

                // Retrieve existing events from local storage
                const existingEvents = JSON.parse(localStorage.getItem('scheduleEvents')) || [];

<!---->

                // Append new task to the existing events
                existingEvents.push(newTask);

<!---->

                // Save updated events back to local storage
                localStorage.setItem('scheduleEvents', JSON.stringify(existingEvents));

<!---->

                // Update the calendar with new events
                updateCalendar();

<!---->

                // Close the task modal
                closeTaskModal();
            }

<!---->

            function updateCalendar() {
                // Retrieve events from local storage
                const events = JSON.parse(localStorage.getItem('scheduleEvents')) || [];

<!---->

                // Update the calendar with new events
                calendar.removeAllEvents();
                events.forEach(event => calendar.addEvent(event));
                calendar.render();
            }

<!---->

            // Load existing events from local storage on page load
            document.addEventListener('DOMContentLoaded', updateCalendar);
        </script>
    </body>
    </html>


## Section 5 - Memorisation System<a id="section-5---memorisation-system"></a>

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXdAEvrDSmicHvjP_xesGYXfRid_EnGQzwjm5uLve2YW5Yh__ahmkQc-wb-6BdcKAZY-SM5Eoj6RH9F9yvpl76R8Turi7Eq-Oq4UdE9bj1fg7BZUXJpzLbhccMAGJxV_85seGRe79_l_NmkSL-70Iv5GBO7p?key=gN0_xdxwyMMxbxbHXeBexA)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXfr7kTU4LbHck9M9Wop_taGNh0gGluqudzqqfkR9nuD6oZwgma-fwVXBGJ1XH0G7XKMPB0kPvCkdmuHVuVTqfNwV9QouAteMwiInqFWJV_5Hq1OOG90cdzEOkVoOny1GH8E5F-HNVANXP7u_ciAcU0mzkC1?key=gN0_xdxwyMMxbxbHXeBexA)


### Initial code:<a id="initial-code"></a>

        let questions = [];
        let currentQuestionIndex = 0;

<!---->

        document.getElementById('startButton').addEventListener('click', function () {
            document.getElementById('questionsFile').click();
        });


#### Code Rundown:<a id="code-rundown-10"></a>

- The questions and index of questions are set to empty and zero

- The click event listener is added to the start button that runs the same function as the questions file button being clicked


### loadQuestions function<a id="loadquestions-function"></a>

#### Code:<a id="code-9"></a>

        function loadQuestions(event) {
            const file = event.target.files[0];
            if (file) {
                file.text().then((text) => {
                    const lines = text.split(/\r?\n/);
                    questions = lines.map(line => line.split(',')).filter(parts => parts.length === 5);
                    console.log(questions);
                    if (questions.length > 0) {
                        currentQuestionIndex = Math.floor(Math.random() * questions.length);
                        showQuestion(currentQuestionIndex);
                        document.querySelector('dialog').showModal();
                    }
                });
            }
        }


#### Code Rundown:<a id="code-rundown-11"></a>

- The file constant is set to the target files declared in the clicked button in the HTML code

- If the file is present:

  - The inside text of the file is collected with a .then function to account for errors

  - The text lines of the loaded questions file are split

  - The questions are split by commas, in the same method as the splitAndGroupArrays function

  - The split sections of the questions array are filtered into parts according to the length of the array

  - If the question exists:

    - The current question index, which accounts for all of the questions available to the system, is given a random number multiplied by the total length of the questions array

    - The question corresponding to the current question index is presented through the showQuestion function

    - The document selects the dialogue box through a modal created with the showModal function built into Javascript


#### Sources:<a id="sources"></a>

ChatGPT - Assistance with necessary calculations for determining the current question index


### showQuestion function’<a id="showquestion-function"></a>

#### code:<a id="code-10"></a>

        function showQuestion(index) {
            const [question, a1, a2, a3, a4] = questions[index];
            document.getElementById('questionText').textContent = question;
           
            // Randomize the order of answers
            const answers = [a1, a2, a3, a4];
            shuffleArray(answers);
           
            document.getElementById('answer1').textContent = answers[0];
            document.getElementById('answer2').textContent = answers[1];
            document.getElementById('answer3').textContent = answers[2];
            document.getElementById('answer4').textContent = answers[3];
           
            document.getElementById('result').textContent = '';
        }


#### Code Rundown:<a id="code-rundown-12"></a>

- The question and the four potential answers to the question are pulled from the index inputted to the function

- The question variable is set to the text content of the questionText element

- The four potential answers are shuffled through the shuffleArray function

- The answers and result are set to their respective elements


### checkAnswer function<a id="checkanswer-function"></a>

#### Code:<a id="code-11"></a>

        function checkAnswer(button) {
            const selectedAnswer = button.textContent.trim();
            const correctAnswer = questions[currentQuestionIndex][1]; // First answer is correct

<!---->

            const resultDiv = document.getElementById('result');
            if (selectedAnswer === correctAnswer) {
                resultDiv.textContent = 'correct';
                resultDiv.style.color = 'green';
            } else {
                resultDiv.textContent = 'incorrect';
                resultDiv.style.color = 'red';
            }
        }


#### Code Rundown:<a id="code-rundown-13"></a>

- The selected answer is set to the text content of the selected button that is inputted into the function

- The correctanswer is set to the first question in the original index of questions

- The resultDiv variable is set to the result element

- If the correct answer is selected:

  - Correct text is displayed

  - Text is styled to green

- If incorrect answer is selected

  - Incorrect text is displayed

  - Text is styled to red


### shuffleArray function<a id="shufflearray-function"></a>

#### Code:<a id="code-12"></a>

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }


#### Code Rundown:<a id="code-rundown-14"></a>

- For the array length minus one:

  - J is set to a random number multiplied by the current number plus one

  - The arrays i and j is set to be equal to each other 

Sources:

ChatGPT - Assistance with necessary calculations for randomising the array


### Memorisation System Full Code:<a id="memorisation-system-full-code"></a>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>MemorisationSystem</title>
        <link rel="stylesheet" type="text/css" href="../resources/subjects.css">
    </head>
    <body onload="">
        <div class="topnav">
            <a href="../templates/MemorisationSystem.html">Home</a>
            <a href="../templates/subjectstorage.html">Subjects</a>
            <a class="active" href="../templates/MemorisationSystem.html">Memorisation System</a>
            <a href="../templates/SchedulePlanner.html">Schedule Planner</a>
            <a href="../templates/GradeCalculator.html">Grade Calculator</a>
        </div>
        <h1 class="title">Memoriser</h1>
        <div class="flashcard-container">
            <h2>Click the "Start" button to select a flashcard file to practice</h2>
            <div class="flashcard-types">
                <button id="startButton">Start</button>
                <input id="questionsFile" type="file" style="visibility:hidden;" onchange='loadQuestions(event)'>
            </div>
            <dialog>
                <div class="flashcard" id="flashcard">
                    <span id="questionText"></span><br>
                    <button id="answer1" onclick="checkAnswer(this)"></button><br>
                    <button id="answer2" onclick="checkAnswer(this)"></button><br>
                    <button id="answer3" onclick="checkAnswer(this)"></button><br>
                    <button id="answer4" onclick="checkAnswer(this)"></button>
                </div>
                <div class="action-buttons">
                    <button onclick="nextQuestion()">Next</button>
                    <button onclick="closeDialog()">Close</button>
                </div>
                <div id="result"></div>
            </dialog>
        </div>
    </body>
    <script>
        let questions = [];
        let currentQuestionIndex = 0;

<!---->

        document.getElementById('startButton').addEventListener('click', function () {
            document.getElementById('questionsFile').click();
        });

<!---->

        function loadQuestions(event) {
            const file = event.target.files[0];
            if (file) {
                file.text().then((text) => {
                    const lines = text.split(/\r?\n/);
                    questions = lines.map(line => line.split(',')).filter(parts => parts.length === 5);
                    console.log(questions);
                    if (questions.length > 0) {
                        currentQuestionIndex = Math.floor(Math.random() * questions.length);
                        showQuestion(currentQuestionIndex);
                        document.querySelector('dialog').showModal();
                    }
                });
            }
        }

<!---->

        function showQuestion(index) {
            const [question, a1, a2, a3, a4] = questions[index];
            document.getElementById('questionText').textContent = question;
           
            // Randomize the order of answers
            const answers = [a1, a2, a3, a4];
            shuffleArray(answers);
           
            document.getElementById('answer1').textContent = answers[0];
            document.getElementById('answer2').textContent = answers[1];
            document.getElementById('answer3').textContent = answers[2];
            document.getElementById('answer4').textContent = answers[3];
           
            document.getElementById('result').textContent = '';
        }

<!---->

        function checkAnswer(button) {
            const selectedAnswer = button.textContent.trim();
            const correctAnswer = questions[currentQuestionIndex][1]; // First answer is correct

<!---->

            const resultDiv = document.getElementById('result');
            if (selectedAnswer === correctAnswer) {
                resultDiv.textContent = 'Correct! Well done!';
                resultDiv.style.color = 'green';
            } else {
                resultDiv.textContent = 'Incorrect answer!';
                resultDiv.style.color = 'red';
            }
        }

<!---->

        function nextQuestion() {
            currentQuestionIndex = Math.floor(Math.random() * questions.length);
            showQuestion(currentQuestionIndex);
        }

<!---->

        function closeDialog() {
            document.querySelector('dialog').close();
        }

<!---->

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    </script>
    </html>

Part B

**1. Legal, Social, and Ethical Considerations - Identify three potential legal, social, or ethical issues that may arise during the development of your software solution. For each issue, briefly explain how you addressed it to ensure compliance and ethical responsibility.**In the study planner app, three notable potential legal, social or ethical issues are the proper handling of a users’ data, the accessibility for all users and the legal issues over libraries.

To combat the issue of the sensitive data entered into the project, all data is stored on the front-end page on the user’s device, with no backend server to collect the users’ data. This prevents any unethical usage or potential data breaches of user data.

To ensure maximal accessibility for any users that may be using screen readers or colourblind plugins, of the elements and styling are kept to the typical guidelines for accessible sites. This includes ensuring that all text is highlightable for screen readers and styling to not be hard-coded to allow user plugins to modify the page’s appearance.

The potential for libraries to be pulled or copyrighted was combatted through the exclusive usage of open-source, free libraries. This allows for any modifications to libraries to be accounted for and avoids any potential ownership issues.

**2. User Interface Design - Describe three key principles or guidelines you would follow to ensure the user interface of the software solution is intuitive and user-friendly. Provide a brief explanation for each principle and how it contributes to improving usability.**

Consistent standards - Consistent standards must be implemented by keeping elements between pages the same in styling to ensure that their function is kept clear. 

Appropriate colour usage - Appropriate colour usage enables users to more easily grasp the important elements on a page and the likely elements to be interactive. Sparing colour use allows for those elements to stand out more and enable an easier user experience in using the application.

Simplistic font usage - The use of simplistic and clear fonts enables users to more easily read the text, potentially assisting more visually impaired users, and allows users to divert their attention to more vital sections of the site. 

**3. Documentation - List and briefly explain three types of documentation that essential for the software solution. Explain the purpose of each type of documentation and how you have implemented it.**

Code comments - Code comments assist users looking through the code in understanding the code. This can assist in the maintenance and modification of the code by ensuring that the function of each chunk of code is understood. This was implemented on each function to briefly explain its’ function, as well as more complex sections of the functions. 

Development journal - A development journal allows the process of creating the application to be communicated to the stakeholders of the project, enabling them to see the modifications and changes made to the application across the process of its’ development. 

Code explanations - Code explanations in the form of plain text explanations of the flow and function of the code assists less technically savvy users and stakeholders to further understand the application and the function of each of the segments of the code. 

**4. Project Management - Outline three key project management techniques or strategies you employed to maximize the productivity and efficiency of the software development process. Provide a brief explanation for each technique and how it contributed to successful project execution.**

The utilisation of the Agile method by splitting each of the modules into weekly segments allowed for more clear goals to be set, giving a clearer framework on the expectations for the outcomes of each time segment for the project. 

The prioritisation of vital modules in the project development allows for further modules to be tested in an easier manner and assists in the development of core functions that may be reused in further code segments. 

The utilisation of unit testing in the software development process allowed for each of the modules’ core functionality to be completed faster than they would have been otherwise. By testing each module individually through sample data, the modules could be developed without needing to make the data input functional.

**5. Collaborative Approach - Describe how you involved stakeholders in the software development process. Explain the benefits of adopting a collaborative approach and how it contributes to the success of the project.**

Stakeholders were involved in the software development process through the usage of drafted documents presented to stakeholders and research of stakeholders in the intended audience for the application. 

An initial writeup of the modules and time expectations were presented, with feedback being returned on the future development of the project. This guided much of the developmental process.

An analysis of the target audience for the project was also conducted regularly, to ensure that the functionalities of the study app stay consistent with the needs and requirements of the end users.

**6. Communication - Explain the importance of effective communication in software development, particularly when conveying technical concepts to non-technical stakeholders. Provide three examples of communication strategies or tools you used to ensure clear and concise communication throughout the project.**

Effective communication is essential in the software development process to ensure that all stakeholders have a full understanding of the processes and functionality of an application. To ensure that all stakeholders have a comprehensive grasp on the application’s state and functionality, diagrams, screenshots of working sections of the application and code explanations can assist in communicating to stakeholders in a clear and concise manner. These methods all assist users and stakeholders to better understand the functionality and usage of the code, and allows the state and functionality of each of the modules to be communicated to the stakeholders simply.
