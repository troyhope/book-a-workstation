# Workstation-App

## User Interface

1. I would probably have a day/date carousel at the top. The user can select a day they wish to reserve a workstation.

A list of workstations will be shown, with a green/red light indicating available/unavailable workstations. The user can select a time slot from a dropdown. The user can select the reverse button on a workstation if it's available.

I would probably have an alternative view, where the user can see the layout of the computer lab, with the green/red lights workstation availability mapped over an image of the lab.

I might have a separate calendar view section showing the days and times the user has reserved workstations.

2. -
3. -

## REST API

4. Method: GET (can be excluded from the fetch request shorthand), URI: http://api.example.com/workstations/w1/schedule
5. Method: PUT -- to update the existing resource? URI: http://api.example.com/workstations
   body: JSON.stringify(workstations)

## Data Persistence

6. User data. Admin data. Workstation data.

## Other

7. How many labs, workstations to expect?
   Which delivery model will the project use?
   If Agile, How long are sprints/iterations? Project Milestones?
