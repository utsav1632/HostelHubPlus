
# HostelHubPlus

HostelHubPlus is a MERN stack project meticulously crafted to optimize hostel operations. It offers hostel administrators a powerful platform to manage tasks like Hostel Allotment,Room allocation ,leave management, complaint handling, notice board management, Fine and inventory tracking with ease. 

Designed for four key actors—Students, Caretakers, Wardens, and Hostel Admins—each plays a crucial role in ensuring the system's efficient operation. 




## Features

- ***Actor 1*** :- ****STUDENT****
    
    - **Notice Board** - Access important announcements and updates.
    - **View Rooms** - view available rooms and check their own allocated room.
    - **Complaint Registration** - Register complaints and track resolution status
    - **Leave Management** - Submit leave applications and track approval status
    - **View Fines** - View fines imposed on him
     - **View Attendance**

    Receive ***notifications*** for Hostel Allotment, Room allocation, leave approval or rejection, complaint resolution, and fines imposed.
    

- ***Actor 2*** :- ****CARETAKER****
    
    - **Room Management** - Allocate rooms to students, manually or randomly, and update room status as needed. Additionally, caretakers can facilitate room changes for students who wish to swap rooms and allocate vacant rooms to new students as required.
    - **Attendance Management** - Manage student attendance records efficiently.
    - **Inventory Management** - Track inventory levels, add new inventory items, and  warden get notify when items fall below a certain threshold.
    - **Notice Board Management** - Create ,Update and manage hostel notices for students.
    - **Student Information** - Access info about the students in the hostel.
    - **Fines Management** - Impose fines on students as necessary and maintain records of fines imposed.
    - **Complaint Resolution** - Address and resolve complaints lodged by students in a timely manner.
    - **View Leave** - view student leave approved or rejected by warden
    - **Manage Staff** - Organize and manage staff schedules effectively.
    Receive ***notifications*** for changes in role of caretaker , new complaints, and fines paid.



- ***Actor 3*** :- ****WARDEN****
    
    - **Manage Notice Board**
    - **View Rooms**
    - **View Complaints**
    - **Leave Management** - view and manage student leave applications, including updating leave statuses.
    - **View Fines** -  fines imposed on student
    - **Inventory Management** - View Inventory  get notify when items fall below a certain threshold.
    - **Student Information**


   Receive ***notifications*** for inventory thresholds, leave applications, changes in hostel allocation (warden in another hostel),


- ***Actor 4*** :- ****HOSTEL-ADMIN****
    
    - **Hostel Allocation** -Allocate hostels to students dynamically and manually
    - **Add hostel** - room configuration, specifying the number of single-seater, double-seater, and triple-seater rooms,
    - **Room Allocationt** -  Oversee and manage the allocation of rooms
    - **Assign Warden** 
    - **Assign Caretaker**
    - **Student Information**
## Installation

Clone the repository:

```bash
git clone  https://github.com/Rahulk977/HostelHubPlus.git  
```

Go to the project directory

```bash
  cd HostelHubPlus
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
backened: npm run dev
frontened: npm start
```

Before running npm run dev, you will need the following environment variables:

```bash

just make a config.env file in config folder with these environment variables:-

MONGODB_URL= <This is your MongoDb URI>
JWT_KEY =<This is your access token secret>

```
For inserting dummy data of student I have kept the students_data.json file you just have to run

```bash
  node insert_data.js
```
## Live Demo


Live link for this project :[click here](https://hostel-hub-plus-three.vercel.app/)



### Login Credentials

To log in as a student, use the following credentials:
- **Username**: `dummy_Student`
- **Password**: `dummy`


Please note that login credentials for other roles (caretaker, warden, hostel admin) are not provided. You can create these users by own for your database.
Screenshots for respective users are provided for reference



## Screenshots
Some screenshots are provided for reference

#### Home Page

[![Screenshot-2025-08-06-at-4-36-39-PM.png](https://i.postimg.cc/NM6kZ9Nd/Screenshot-2025-08-06-at-4-36-39-PM.png)](https://postimg.cc/HcLMyx1M)

### Login Page

[![Screenshot-2025-08-06-at-4-37-26-PM.png](https://i.postimg.cc/5ypq2cWv/Screenshot-2025-08-06-at-4-37-26-PM.png)](https://postimg.cc/GT8sX52h)

#### Manual Room Allocation

[![Screenshot-2025-08-06-at-4-44-23-PM.png](https://i.postimg.cc/nh9R0ztP/Screenshot-2025-08-06-at-4-44-23-PM.png)](https://postimg.cc/87DmCTcR)

### Admin Dashboard

[![Screenshot-2025-08-06-at-4-31-47-PM.png](https://i.postimg.cc/Rh1p1b5V/Screenshot-2025-08-06-at-4-31-47-PM.png)](https://postimg.cc/FkRxNpH2)

#### Student Dashboard

[![Screenshot-2025-08-06-at-4-49-19-PM.png](https://i.postimg.cc/cHLfk9nL/Screenshot-2025-08-06-at-4-49-19-PM.png)](https://postimg.cc/06h6bCnT)

#### Hostel Allotment (only access to Hostel Admin)

[![Screenshot-2025-08-06-at-4-32-47-PM.png](https://i.postimg.cc/C1qQ5xc8/Screenshot-2025-08-06-at-4-32-47-PM.png)](https://postimg.cc/MMzDrq2Z)



#### Specific Hostel Details and Random Room Allotment
[![Screenshot-2025-08-06-at-4-44-23-PM.png](https://i.postimg.cc/nh9R0ztP/Screenshot-2025-08-06-at-4-44-23-PM.png)](https://postimg.cc/87DmCTcR)


#### Marking Attendance
[![Screenshot-2025-08-06-at-4-44-51-PM.png](https://i.postimg.cc/jd5knc3K/Screenshot-2025-08-06-at-4-44-51-PM.png)](https://postimg.cc/RqkTj7zb)

#### Manage Staff schedule

[![Screenshot-2025-08-06-at-4-52-08-PM.png](https://i.postimg.cc/ydDyYpYr/Screenshot-2025-08-06-at-4-52-08-PM.png)](https://postimg.cc/KkyM0NTn)


### Stff Registration

[![Screenshot-2025-08-06-at-4-45-06-PM.png](https://i.postimg.cc/RVDp7t2t/Screenshot-2025-08-06-at-4-45-06-PM.png)](https://postimg.cc/9ryBVDmX)


#### Assign caretaker
[![Screenshot-2025-08-06-at-4-33-05-PM.png](https://i.postimg.cc/SK5PmMfq/Screenshot-2025-08-06-at-4-33-05-PM.png)](https://postimg.cc/wtX2V3rb)

#### Hall/Hostel caretaker


[![Screenshot-2025-08-06-at-4-42-56-PM.png](https://i.postimg.cc/hG7kzsjh/Screenshot-2025-08-06-at-4-42-56-PM.png)](https://postimg.cc/d7wHg8GK)



