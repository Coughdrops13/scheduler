# Scheduler project breakdown

## Components

- Button
- DayList
- DayListItem
- InterviewerList
- InterviewerListItem
- Appointment
- Appointment/Header
- Appointment/Empty
- Appointment/Show
- Appointment/Form
- Appointment/Status
- Appointment/Error
- Appointment/Confirm

### Button

- State:
- Props:
    buttonClass
    onClick
    disabled
- Used by:

### DayList

- State: 
- Props:
    days- Array
    day- String
    setDay- Function
- Used by:

### DayListItem

- State:
    unselected
    selected
    full
    clickable
- Props:
    name- String
    spots- Number
    selected- boolean
    setDay- Function
    key- String
- Used by:

### InterviewerList

- State:
- Props:
    interviewers- Array
    setInterviewer- Function
    interviewer- Number
- Used by:

### InterviewerListItem

- State:
    selected
    unselected
- Props:
    id- Number
    name- String
    avater- URL
    selected- boolean
    setInterviewer- Function
- Used by:

### Appointment

- State:
- Props:
    time- String
- Used by:

### Appointment/Header

- State:
- Props:
    time- String
- Used by:

### Appointment/Empty

- State:
- Props:
    onAdd- Function
- Used by:

### Appointment/Show

- State:
- Props:
    student- String
    interviewer- Object
    onEdit- Function
    onDelete- Function
- Used by:

### Appointment/Form

- State:
    student- String
    interviewer- Number
- Actions:
    SetStudent- Function
    SetInterviewer- Function
- Props:
    student- String
    interviewers- Array
    interviewer- Number
    onSave- Function
    onCancel- Function
- Used by:

### Appointment/Status

- State:
- Props:
    message- String
- Used by:

### Appointment/Error

- State:
- Props:
    message- String
    onClose- Function
- Used by:

### Appointment/Confirm

- State:
- Props:
    message- String
    onConfirm- Function
    onCancel- Function
- Used by: