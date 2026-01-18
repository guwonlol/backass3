# Assignment 3 — MongoDB CRUD Backend with Simple Frontend

## Project Overview
This project is a full-stack web application developed as part of **Assignment 3**.  
The goal of the assignment is to migrate from a local JSON-based storage to a **MongoDB database** and implement a fully functional **CRUD REST API**, along with a simple frontend interface.

The chosen topic for the Final Project is a **Task Manager**, which allows users to create, view, update, and delete tasks.

---

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose (ODM)**
- **HTML, CSS, JavaScript**
- **Postman (API testing)**

---

## Data Model (Schema Design)

### Primary Object: WorkItem (Task)

The application uses a MongoDB collection called `workitems`.  
The schema is defined using Mongoose and includes the following fields:

| Field | Type | Description |
|------|-----|------------|
| title | String | Task title (required) |
| description | String | Task description (required) |
| status | String | Task status (`pending`, `in_progress`, `completed`) |
| priority | Number | Priority level (1–5) |
| createdAt | Date | Automatically generated timestamp |
| updatedAt | Date | Automatically generated timestamp |

Validation rules are applied at the schema level using Mongoose.

---

## API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/tasks` | Create a new task |
| GET | `/tasks` | Retrieve all tasks |
| GET | `/tasks/:id` | Retrieve a task by ID |
| PUT | `/tasks/:id` | Update a task by ID |
| DELETE | `/tasks/:id` | Delete a task by ID |

All endpoints return appropriate HTTP status codes such as `201`, `200`, `400`, and `404`.

---

## Database Integration
MongoDB Atlas is used as a cloud database solution.  
The database connection is established using Mongoose and environment variables stored in a `.env` file.

Collections and documents are created **automatically** when data is inserted via the API.

---

## Frontend Interface
A simple frontend interface was implemented using **HTML, CSS, and JavaScript**.

### Features:
- View a list of existing tasks
- Submit new tasks using a form
- Automatically updates the task list after submission

The frontend is served as a static file using Express:
```js
app.use(express.static("public"));
