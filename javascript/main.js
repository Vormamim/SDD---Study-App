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
        }
    }
    else {
        location.replace("./subjects/subjecttemplate.html?subject=" + this.id);
    }
}
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
function splitAndGroupArrays(arrays, targetSubject) {
    // Initialize arrays to hold grouped sections
    let tasks = [];
    let grades = [];
    
    // Loop through each array in the input
    arrays.forEach(array => {
        // Split the string by commas
        let sections = array.split(',');
        
        // Check if the subject matches the target subject
        if (sections.length === 3 && sections[0].trim() === targetSubject) {
            // Add each section to its corresponding group
            tasks.push(sections[1].trim());
            grades.push(sections[2].trim());
        }
    });
    
    // Return the grouped arrays
    return [tasks, grades];
}