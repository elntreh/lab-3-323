# API Building Practice Dataset

This dataset contains realistic university data for practicing API development. The data includes students, instructors, courses, enrollments, assignments, and grades with relationships between entities.

## Getting Started

After cloning this repository, follow these steps:

```bash
# Navigate to the student directory
cd student

# Install dependencies
npm install

# Install Playwright and browsers for testing
npx playwright install --with-deps

# Start the development server
npm start
```

The server will run on `http://localhost:3000`

## Running Tests Locally

To verify your implementation, run the tests:

```bash
# Run all tests
npm test

# Run specific endpoint tests
npm run test:students:get      # Test GET /students
npm run test:students:post     # Test POST /students
npm run test:instructors:get   # Test GET /instructors
npm run test:instructors:post  # Test POST /instructors
npm run test:enrollments:get   # Test GET /enrollments
npm run test:enrollments:post  # Test POST /enrollments
npm run test:courses:get       # Test GET /courses
npm run test:courses:post      # Test POST /courses
npm run test:assignments:get   # Test GET /assignments
npm run test:assignments:post  # Test POST /assignments
npm run test:grades:get        # Test GET /grades
npm run test:grades:post       # Test POST /grades
```

---

## Entities

1. **Students** (8 records)
   - id, firstName, lastName, email, enrollmentDate, major, gpa, year, active

2. **Instructors** (5 records)
   - id, firstName, lastName, email, department, hireDate, officeLocation, specialty

3. **Courses** (7 records)
   - id, code, name, credits, department, instructorId, capacity, schedule, prerequisites

4. **Enrollments** (14 records)
   - id, studentId, courseId, enrollmentDate, grade, status, semester

5. **Assignments** (6 records)
   - id, courseId, title, description, dueDate, maxPoints, type

6. **Grades** (6 records)
   - id, enrollmentId, assignmentId, score, submittedDate, feedback

---

## Practice Exercises

### Basic CRUD Operations

Build RESTful endpoints for each entity in `student/index.js`:

**Students**

- `GET /students` - Get all students
- `POST /students` - Create a new student

**Instructors**

- `GET /instructors` - Get all instructors
- `POST /instructors` - Create a new instructor

**Enrollments**

- `GET /enrollments` - Get all enrollments
- `POST /enrollments` - Create a new enrollment

**Courses**

- `GET /courses` - Get all courses
- `POST /courses` - Create a new course

**Assignments**

- `GET /assignments` - Get all assignments
- `POST /assignments` - Create a new assignment

**Grades**

- `GET /grades` - Get all grades
- `POST /grades` - Create a new grade

---

## Point Distribution (100 total)

| Endpoint          | Points |
| ----------------- | ------ |
| GET /students     | 8      |
| POST /students    | 9      |
| GET /instructors  | 8      |
| POST /instructors | 9      |
| GET /enrollments  | 8      |
| POST /enrollments | 8      |
| GET /courses      | 8      |
| POST /courses     | 9      |
| GET /assignments  | 8      |
| POST /assignments | 9      |
| GET /grades       | 8      |
| POST /grades      | 8      |

---

## Response Format

All endpoints should return JSON in this format:

```json
{
  "status": "success",
  "data": { ... }
}
```

For GET requests, `data` should be an array. For POST requests, `data` should be the created object with an `id`.
