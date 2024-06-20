### 1. Implementation Planning:<a id="1-implementation-planning"></a>

- Review your project proposal and identify at **least three key modules** required for your software project. 

Subject Storage

Memorisation System

Schedule Planner

Study Material Organiser

Grade Calculator

Subject Creator

Javascript to Python module

- Analyse the dependencies between these modules.

The subject creator module would be dependent on the subject creator, as it would pull from and store the created subjects here. 

Most modules would also rely on this subject storage module, as they require somewhere to pull their data regarding the content in the courses, the grades achieved, or the schedule of the courses from.

 All of the modules would be reliant on the module that transfers data between the Javascript and Python files, as some of the databasing would be made much more convoluted if done through Javascript, and so would be easier to do through Python. 

The Memorisation System would be reliant on the Study Material Organiser, as this stores most of the content to be memorised. 

Most of these modules are independent of each other, only relying on the subject storage system and the Javascript to Python module. 

- Considering the identified dependencies, propose a detailed implementation plan **outlining the order** in which you will develop and integrate these modules.

The first module that would be integrated into the base framework of the system would be the Subject Storage module, as this module is what most other modules rely on to gather their information and course content. 

After this module, the Javascript to Python module would be developed to ensure that this module can transfer the information to the other modules and the user interface. 

The Subject Creation module would then be built on top of this, as it would be reliant on the Subject Storage module to put the created subjects into, and would be largely UI-based, relying on the Javascript to Python module to send data to the subject storage module. 

Most of the other modules would draw from these three base modules, allowing them to be created in any order, with the likely order being the Study Material Organiser, as the framework for this would already exist with the Subject Storage and Creation modules. 

This would be followed by the Memorisation system, which still largely utilises the subject storage module, and would rely on the Study Material Organiser in part to store the content to be memorised. 

The schedule planner would then be implemented, drawing from the Subject Storage module to assign the time in each day. 

The Grade Calculator Module would be the last made, as it may implement some information from the Memorisation System Module, and would be reliant on the Subject Storage System to view the subjects to calculate the grades for. 

- Create a **GANTT chart** over 8 weeks to implement this. Assume a maximum of **50 hours** development time (_avoid taking on completely new learning overheads_)

![](https://lh7-us.googleusercontent.com/docsz/AD_4nXeR6oqplK_Iiky3YwBM6T9MIHKz5yVaNhwAZuZqCxQeTRhjXtufTgcCWHRw7PElOFHIP53razmmQlT52_HXSrr7hpTzazcigW4woKVnjco5P4c6L6Gc3TNBH4nMY4HGYrmjtO0g_C_SeCb6w16n_I2wIuET?key=gN0_xdxwyMMxbxbHXeBexA)


### 2. Testing Strategies:<a id="2-testing-strategies"></a>

- **Referencing your project proposal, discuss two different testing strategies you will employ during the implementation phase.**

- **Unit testing:** How will you test individual modules, such as the \[module name] module, to ensure \[desired functionality]?

Unit testing will be implemented by creating a set of test data for each function that can accept it, and running the module through an onload function in the body with some logging to ensure that its’ functionality and results are as expected. For example, a smaller part of the subject storage module to open a subject can be provided with the subject’s data, and set to run upon the page body loading to ensure it is correctly parsing and reading the data for its expected functionality.

Issues:

- Unit testing can be implemented to ensure that the correct data is being recieved from data creating modules such as subject creation and grade calculation

- Unit testing can ensure that the grades for a subject are being correctly calculated before passing that data to other modules

- Unit testing can ensure that flashcards in the memorisation module are being correctly processed before they are read and displayed

* **Integration testing:** How will you test how different modules interact, for instance, how data from the \[module name] module is used by the \[module name] module?

Integration testing will be implemented through creating similar modules that accept or give data to each other alongside each other so that they can be tested together. This could be utilised alongside unit testing by getting test data for modules, then using the output data of those modules to test the following module that interacts with the original module. For example, the subject creation module could be provided with test data, with the created subject’s data being passed onto the subject loading module to test the interaction of these modules.

- Integration testing can ensure that functions within the project are correctly interacting with each other, especially functions stored in other pages or js files

- Integration testing can ensure that modules are being processed in the correct order and not flowing incorrectly into each other

* **For each strategy, explain how it will be specifically tailored to address potential issues within the context of your project.**


### 3. Maintenance Considerations:<a id="3-maintenance-considerations"></a>

- **\[Consider the nature of your project and propose a scenario where future functionalities might be needed].**

The nature of my project means that the project’s required functionality may vary depending on both the types of subjects and the types of grades, and other forms of inputs put into the project. For example, if number grades were made obsolete and letter grades were made the primary form of giving results to students, the functionality to accept and calculate letter instead of number grades would need to be implemented. Similarly, if subjects had branching subjects coming off of them, such as universities offering a subject that has a smaller subject under it.

- **Critically evaluate your project proposal to identify areas where improvements can be made to enhance the system's maintainability.**

The modules could be divided further to ensure that any individual section of code or function breaking would be easily identifiable or fixable. A backend data storage system would make the data more reliable, but this is not practical for this project. Extra error logging and reporting to the user would allow for future issues to be rooted out.

- **Suggest two specific design practices you can incorporate during development to make the software easier to modify and adapt in the future. Explain how these practices would benefit future maintenance efforts.**

Utilising directly written code and libraries developed and stored within the project itself would allow more functions and sections of the project to be modified and adapted to future requirements. This would assist future maintenance efforts by ensuring that none of the libraries can change, which may affect the project’s functionality.

Utilising standardised code throughout the system would allow for the project to be modified and adapted in a more simplified manner, with the same function being able to be adapted if it breaks or a piece of functionality changes. This would assist future maintenance efforts by significantly reducing the amount of code required to be changed in the event of a function breaking or needing to be replaced. 


### 4. Social and Ethical<a id="4-social-and-ethical"></a>

- Considering your software project, discuss one potential social or ethical issue that could arise from the implementation of such software.

One potential social and ethical issue arising from the development of a study planner app is the issue of an individual potentially gaining toxic studying patterns from the usage of the app. As the application presents statistics and deadlines, as well as grades to a user, a user may attain some excessive studying habits to meet these requirements.

- Explain how you would address this issue during the development phase, referencing a specific aspect of your project proposal (e.g., data storage practices, user interface design).

To combat this, a kind of expectation or reminder to take breaks could be implemented into the software to ensure a healthy balance.
