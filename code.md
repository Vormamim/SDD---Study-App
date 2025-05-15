---
icon: chess-board
---

# Code

```python
import tkinter as tk  # Import tkinter for GUI
from tkinter import messagebox, scrolledtext  # Import messagebox and scrolledtext for specific UI components
import winsound  # Import winsound for playing sound alerts
import json  # Import json for reading/writing JSON data
import os  # Import os for file operations

# Define the StudyApp class
class StudyApp:
    def __init__(self, root):
        # Initialize Study App
        self.root = root
        self.root.title("Study App")  # Set window title
        self.root.geometry("500x700")  # Set window dimensions
        self.current_screen = None  # Variable to hold the current screen/frame
        self.log_entries = []  # List to store study log entries
        self.tasks = []  # List to store to-do tasks
        self.load_tasks()  # Load tasks from file on initialization
        self.create_title_screen()  # Create the title screen when the app starts

    # Function to create the title screen
    def create_title_screen(self):
        self.clear_screen()  # Clear any existing screen
        self.current_screen = tk.Frame(self.root)  # Create a new frame for the current screen
        self.current_screen.pack(fill='both', expand=True)  # Expand the frame to fully fill the window

        # Creating the GUI elements for the title screen
        title_label = tk.Label(self.current_screen, text="Welcome to Study App", font=("Arial", 24))
        title_label.pack(pady=20)

        button_style = {"font": ("Arial", 18), "fg": "black", "padx": 10, "pady": 5}

        pomodoro_button = tk.Button(self.current_screen, text="Pomodoro Timer", command=self.create_pomodoro_setup_screen, **button_style)
        pomodoro_button.pack(pady=10)

        logbook_button = tk.Button(self.current_screen, text="Study Logbook", command=self.create_logbook_entry_screen, **button_style)
        logbook_button.pack(pady=10)

        todo_button = tk.Button(self.current_screen, text="To-Do List", command=self.create_todo_screen, **button_style)
        todo_button.pack(pady=10)

    # Create the Pomodoro timer setup screen
    def create_pomodoro_setup_screen(self):
        self.clear_screen()  # Clear existing screen
        self.current_screen = tk.Frame(self.root)
        self.current_screen.pack(fill='both', expand=True) 

        title_label = tk.Label(self.current_screen, text="Pomodoro Timer Setup", font=("Arial", 24))
        title_label.pack(pady=20)

        # Setting some base values for the variables for study time, break time, and cycles
        self.study_time_var = tk.StringVar(value="25")
        self.break_time_var = tk.StringVar(value="5")
        self.cycles_var = tk.StringVar(value="4")

        study_label = tk.Label(self.current_screen, text="Study Session Length (minutes):", font=("Arial", 14))
        study_label.pack(pady=5)
        study_entry = tk.Entry(self.current_screen, textvariable=self.study_time_var)
        study_entry.pack(pady=5)

        break_label = tk.Label(self.current_screen, text="Break Session Length (minutes):", font=("Arial", 14))
        break_label.pack(pady=5)
        break_entry = tk.Entry(self.current_screen, textvariable=self.break_time_var)
        break_entry.pack(pady=5)

        cycles_label = tk.Label(self.current_screen, text="Number of Cycles:", font=("Arial", 14))
        cycles_label.pack(pady=5)
        cycles_entry = tk.Entry(self.current_screen, textvariable=self.cycles_var)
        cycles_entry.pack(pady=5)

        button_style = {"font": ("Arial", 16), "fg": "black", "padx": 10, "pady": 5}

        start_button = tk.Button(self.current_screen, text="Start Pomodoro", command=self.start_pomodoro, **button_style)
        start_button.pack(pady=10)

        back_button = tk.Button(self.current_screen, text="Back to Title", command=self.create_title_screen, **button_style)
        back_button.pack(pady=10)

    # Function to start the Pomodoro timer
    def start_pomodoro(self):
        try:
            # Retrieve and convert user input for study time, break time, and cycles
            self.study_time = int(self.study_time_var.get()) * 60
            self.break_time = int(self.break_time_var.get()) * 60
            self.cycles = int(self.cycles_var.get())
            self.current_cycle = 0
            self.is_study_phase = True
            self.create_pomodoro_timer_screen()  # Create the Pomodoro timer screen
        except ValueError:
            messagebox.showerror("Invalid input", "Please enter valid numbers for the study, break times, and cycles.")

    # Function to create the Pomodoro timer screen
    def create_pomodoro_timer_screen(self):
        self.clear_screen()  
        self.current_screen = tk.Frame(self.root)  
        self.current_screen.pack(fill='both', expand=True) 

        self.time_left = self.study_time  # Initialize time left for study session
        self.timer_running = False  # This tracks if the timer is running

        # Creating GUI elements for the Pomodoro timer screen
        self.timer_label = tk.Label(self.current_screen, text=self.format_time(self.time_left), font=("Arial", 48))
        self.timer_label.pack(pady=20)

        self.state_label = tk.Label(self.current_screen, text="Study Period", font=("Arial", 18))
        self.state_label.pack(pady=10)

        self.cycles_label = tk.Label(self.current_screen, text=f"Cycles remaining: {self.cycles - self.current_cycle}", font=("Arial", 18))
        self.cycles_label.pack(pady=10)

        button_style = {"font": ("Arial", 16), "fg": "black", "padx": 10, "pady": 5}

        self.start_pause_button = tk.Button(self.current_screen, text="Start", command=self.toggle_timer, **button_style)
        self.start_pause_button.pack(pady=10)

        self.reset_button = tk.Button(self.current_screen, text="Reset", command=self.reset_timer, **button_style)
        self.reset_button.pack(pady=10)

        back_button = tk.Button(self.current_screen, text="Back to Title", command=self.create_title_screen, **button_style)
        back_button.pack(pady=10)

    # Function to format time in minutes and seconds
    def format_time(self, seconds):
        minutes = seconds // 60
        seconds = seconds % 60
        return f"{minutes:02}:{seconds:02}"

    # Function to toggle the Pomodoro timer start/pause/resume
    def toggle_timer(self):
        if not self.timer_running:
            self.timer_running = True
            self.start_pause_button.config(text="Pause")
            self.run_timer()
        else:
            self.timer_running = False
            self.start_pause_button.config(text="Resume")

    # Function to run the Pomodoro timer countdown
    def run_timer(self):
        if self.timer_running and self.time_left > 0:
            self.time_left -= 1
            self.timer_label.config(text=self.format_time(self.time_left))
            self.root.after(1000, self.run_timer)
        elif self.time_left == 0:
            winsound.Beep(1000, 500)  # Play a beep sound when the timer is finisehd
            if self.is_study_phase:
                # Transition to break period
                self.is_study_phase = False
                self.time_left = self.break_time
                self.state_label.config(text="Break Period")
            else:
                # Transition to next study cycle
                self.current_cycle += 1
                self.cycles_label.config(text=f"Cycles remaining: {self.cycles - self.current_cycle}")
                if self.current_cycle >= self.cycles:
                    messagebox.showinfo("Pomodoro Timer", "All cycles complete!")
                    self.reset_timer()
                    return
                self.is_study_phase = True
                self.time_left = self.study_time
                self.state_label.config(text="Study Period")
            self.run_timer()

    # Function to reset the Pomodoro timer
    def reset_timer(self):
        self.timer_running = False
        self.current_cycle = 0
        self.is_study_phase = True
        self.time_left = self.study_time
        self.timer_label.config(text=self.format_time(self.time_left))
        self.state_label.config(text="Study Period")
        self.cycles_label.config(text=f"Cycles remaining: {self.cycles - self.current_cycle}")
        self.start_pause_button.config(text="Start")

    # Function to create the logbook entry screen
    def create_logbook_entry_screen(self):
        self.clear_screen()  
        self.current_screen = tk.Frame(self.root) 
        self.current_screen.pack(fill='both', expand=True)  

        # Creating GUI elements for logging study sessions
        title_label = tk.Label(self.current_screen, text="Log Study Session", font=("Arial", 24))
        title_label.pack(pady=20)

        # Creating the variables for subject, date, length, and description for the logbook
        self.subject_var = tk.StringVar()
        self.length_var = tk.StringVar()
        self.description_var = tk.StringVar()
        self.date_var = tk.StringVar()

        subject_label = tk.Label(self.current_screen, text="Subject:", font=("Arial", 14))
        subject_label.pack(pady=5)
        subject_entry = tk.Entry(self.current_screen, textvariable=self.subject_var)
        subject_entry.pack(pady=5)

        date_label = tk.Label(self.current_screen, text="Date:", font=("Arial", 14))
        date_label.pack(pady=5)
        date_entry = tk.Entry(self.current_screen, textvariable=self.date_var)
        date_entry.pack(pady=5)

        length_label = tk.Label(self.current_screen, text="Length of Study (minutes):", font=("Arial",14))
        length_label.pack(pady=5)
        length_entry = tk.Entry(self.current_screen, textvariable=self.length_var)
        length_entry.pack(pady=5)

        description_label = tk.Label(self.current_screen, text="Description:", font=("Arial", 14))
        description_label.pack(pady=5)
        description_entry = tk.Entry(self.current_screen, textvariable=self.description_var, width=40)
        description_entry.pack(pady=5)

        button_style = {"font": ("Arial", 16), "fg": "black", "padx": 10, "pady": 5}

        save_button = tk.Button(self.current_screen, text="Save Log", command=self.save_log, **button_style)
        save_button.pack(pady=10)

        view_logs_button = tk.Button(self.current_screen, text="View Logs", command=self.create_logbook_view_screen, **button_style)
        view_logs_button.pack(pady=10)

        back_button = tk.Button(self.current_screen, text="Back to Title", command=self.create_title_screen, **button_style)
        back_button.pack(pady=10)

    # Function to save a log entry to a file (.get the information)
    def save_log(self):
        subject = self.subject_var.get()
        date = self.date_var.get()
        length = self.length_var.get()
        description = self.description_var.get()

        # Check if all fields are filled and valid
        if subject and length and description and date:
            try:
                length = int(length)
                log_entry = f"Date: {date}\nSubject: {subject}\nLength: {length} minutes\nDescription: {description}\n{'-'*40}\n"
                self.log_entries.append(log_entry)  # Append log entry to list following this date, subject, length, description format to 
                with open("logbook.txt", "a") as file:
                    file.write(log_entry)  # Write log entry to file
                messagebox.showinfo("Save Log", "Log saved successfully!")  # Show success message
                # Clear input fields after saving
                self.subject_var.set("")
                self.date_var.set("")
                self.length_var.set("")
                self.description_var.set("")
            except ValueError:
                messagebox.showerror("Invalid Input", "Please enter a valid number for the length.")
        else:
            messagebox.showerror("Missing Information", "Please fill in all fields.")

    # Function to create the logbook view screen
    def create_logbook_view_screen(self):
        self.clear_screen()  
        self.current_screen = tk.Frame(self.root) 
        self.current_screen.pack(fill='both', expand=True)  

        # Create and pack GUI elements for viewing study logs using scrolledtext
        title_label = tk.Label(self.current_screen, text="View Study Logs", font=("Arial", 24))
        title_label.pack(pady=20)

        log_text = scrolledtext.ScrolledText(self.current_screen, wrap=tk.WORD, width=60, height=20, font=("Arial", 12))
        log_text.pack(pady=20)

        try:
            with open("logbook.txt", "r") as file:
                log_entries = file.read()  # Read log entries from file
            if log_entries:
                log_text.insert(tk.END, log_entries)  # Insert log entries into scrolledtext
            else:
                log_text.insert(tk.END, "No logs available.")
        except FileNotFoundError:
            log_text.insert(tk.END, "No logs available.")

        log_text.config(state=tk.DISABLED)  # Disable editing of scrolledtext

        button_style = {"font": ("Arial", 16), "fg": "black", "padx": 10, "pady": 5}

        clear_button = tk.Button(self.current_screen, text="Clear Log", command=self.clear_log, **button_style)
        clear_button.pack(pady=10)

        back_button = tk.Button(self.current_screen, text="Back to Log Entry", command=self.create_logbook_entry_screen, **button_style)
        back_button.pack(pady=10)

        back_to_title_button = tk.Button(self.current_screen, text="Back to Title", command=self.create_title_screen, **button_style)
        back_to_title_button.pack(pady=10)

    # Function to clear the logbook
    def clear_log(self):
        if messagebox.askyesno("Clear Log", "Are you sure you want to clear the logbook?"):
            with open("logbook.txt", "w") as file:
                file.write("")  # Clear logbook file
            self.log_entries.clear()  
            messagebox.showinfo("Clear Log", "Logbook cleared successfully!")
            self.create_logbook_view_screen()  

    # Function to create the to-do list screen
    def create_todo_screen(self):
        self.clear_screen()  
        self.current_screen = tk.Frame(self.root) 
        self.current_screen.pack(fill='both', expand=True)  

        # Create and pack GUI elements for the to-do list screen
        title_label = tk.Label(self.current_screen, text="To-Do List", font=("Arial", 24))
        title_label.pack(pady=20)

        self.task_frame = tk.Frame(self.current_screen)
        self.task_frame.pack(pady=10)

        self.update_task_list()  

        add_task_frame = tk.Frame(self.current_screen)
        add_task_frame.pack(pady=10)

        self.new_task_entry = tk.Entry(add_task_frame, width=40)
        self.new_task_entry.pack(side='left')

        button_style = {"font": ("Arial", 16), "fg": "black", "padx": 10, "pady": 5}

        add_task_button = tk.Button(add_task_frame, text="Add Task", command=self.add_task, **button_style)
        add_task_button.pack(side='left', padx=5)

        back_button = tk.Button(self.current_screen, text="Back to Title", command=self.create_title_screen, **button_style)
        back_button.pack(pady=10)

    # Function to add a new task to the to-do list
    def add_task(self):
        task_text = self.new_task_entry.get()
        if task_text:
            self.tasks.append({"text": task_text, "completed": False})  # Append new task to tasks list
            self.new_task_entry.delete(0, tk.END)  
            self.update_task_list() 
            self.save_tasks()  

    # Function to update the displayed to-do task list
    def update_task_list(self):
        for widget in self.task_frame.winfo_children():
            widget.destroy()  # Clear existing task widgets

        # Creating GUI elements for each task in the tasks list
        for idx, task in enumerate(self.tasks):
            task_frame = tk.Frame(self.task_frame)
            task_frame.pack(fill='x', pady=2)

            task_var = tk.StringVar(value=task['text'],)
            task_check = tk.Checkbutton(task_frame, textvariable=task_var, onvalue=1, offvalue=0, command=lambda idx=idx: self.toggle_task(idx),font = ("Arial", 16))
            task_check.pack(side='left')

            if task["completed"]:
                task_check.select()

            button_style = {"font": ("Arial", 12), "fg": "black", "padx": 10, "pady": 5}

            delete_button = tk.Button(task_frame, text="Delete", command=lambda idx=idx: self.delete_task(idx), **button_style)
            delete_button.pack(side='right')

    # Function to toggle the completion status of a task
    def toggle_task(self, idx):
        self.tasks[idx]['completed'] = not self.tasks[idx]['completed']
        self.update_task_list()  
        self.save_tasks()  

    # Function to delete a task from the to-do list
    def delete_task(self, idx):
        del self.tasks[idx]  # Delete task from tasks list
        self.update_task_list() 
        self.save_tasks()  

    # Function to save tasks to a file
    def save_tasks(self):
        with open("Todo.txt", "w") as file:
            json.dump(self.tasks, file)  # Write tasks list to JSON file

    # Function to load tasks from a file
    def load_tasks(self):
        if os.path.exists("Todo.txt"):
            with open("Todo.txt", "r") as file:
                try:
                    self.tasks = json.load(file)  # Load tasks from JSON file
                except json.JSONDecodeError:
                    self.tasks = []  # This handles an error I had with JSON decoding without a file by initializing with an empty list

    # Function to clear the current screen/frame
    def clear_screen(self):
        if self.current_screen is not None:
            self.current_screen.destroy()  # Destroy current screen/frame

# Main program execution starts here
if __name__ == "__main__":
    root = tk.Tk()  # Create the main tkinter window
    app = StudyApp(root)  # Create an instance of the StudyApp
    root.mainloop()  # Enter the main tkinter event loop
```
