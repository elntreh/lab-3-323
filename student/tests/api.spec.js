/**
 * API Endpoint Tests for GitHub Classroom Autograding
 *
 * Total Points: 100
 * - GET endpoints: 8 points each (6 × 8 = 48 points)
 * - POST endpoints: ~8-9 points each (52 points total)
 */

import { test, expect } from "@playwright/test";

// ==================== STUDENTS ENDPOINTS ====================

test.describe("Students API", () => {
  // @points: 8
  test("GET /students - should return all students", async ({ request }) => {
    const response = await request.get("/students");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThanOrEqual(1);

    // Check student structure
    const student = body.data[0];
    expect(student).toHaveProperty("id");
    expect(student).toHaveProperty("firstName");
    expect(student).toHaveProperty("lastName");
    expect(student).toHaveProperty("email");
  });

  // @points: 9
  test("POST /students - should create a new student", async ({ request }) => {
    const newStudent = {
      id: 10,
      firstName: "Test",
      lastName: "Student",
      email: "test.student@university.edu",
      enrollmentDate: "2025-01-15",
      major: "Computer Science",
      gpa: 3.5,
      year: "Freshman",
      active: true,
    };

    const response = await request.post("/students", {
      data: newStudent,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("id");
    expect(body.data.firstName).toBe(newStudent.firstName);
    expect(body.data.lastName).toBe(newStudent.lastName);
    expect(body.data.email).toBe(newStudent.email);
  });
});

// ==================== INSTRUCTORS ENDPOINTS ====================

test.describe("Instructors API", () => {
  // @points: 8
  test("GET /instructors - should return all instructors", async ({
    request,
  }) => {
    const response = await request.get("/instructors");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThanOrEqual(1);

    // Check instructor structure
    const instructor = body.data[0];
    expect(instructor).toHaveProperty("id");
    expect(instructor).toHaveProperty("firstName");
    expect(instructor).toHaveProperty("lastName");
    expect(instructor).toHaveProperty("email");
    expect(instructor).toHaveProperty("department");
  });

  // @points: 9
  test("POST /instructors - should create a new instructor", async ({
    request,
  }) => {
    const newInstructor = {
      id: 106,
      firstName: "Dr. Test",
      lastName: "Instructor",
      email: "test.instructor@university.edu",
      department: "Computer Science",
      hireDate: "2025-01-15",
      officeLocation: "Tech Building 100",
      specialty: "Software Engineering",
    };

    const response = await request.post("/instructors", {
      data: newInstructor,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("id");
    expect(body.data.firstName).toBe(newInstructor.firstName);
    expect(body.data.lastName).toBe(newInstructor.lastName);
  });
});

// ==================== ENROLLMENTS ENDPOINTS ====================

test.describe("Enrollments API", () => {
  // @points: 8
  test("GET /enrollments - should return all enrollments", async ({
    request,
  }) => {
    const response = await request.get("/enrollments");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThanOrEqual(1);

    // Check enrollment structure
    const enrollment = body.data[0];
    expect(enrollment).toHaveProperty("id");
    expect(enrollment).toHaveProperty("studentId");
    expect(enrollment).toHaveProperty("courseId");
    expect(enrollment).toHaveProperty("status");
  });

  // @points: 8
  test("POST /enrollments - should create a new enrollment", async ({
    request,
  }) => {
    const newEnrollment = {
      id: 315,
      studentId: 1,
      courseId: 201,
      enrollmentDate: "2025-01-15",
      grade: null,
      status: "enrolled",
      semester: "Spring 2025",
    };

    const response = await request.post("/enrollments", {
      data: newEnrollment,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("id");
    expect(body.data.studentId).toBe(newEnrollment.studentId);
    expect(body.data.courseId).toBe(newEnrollment.courseId);
  });
});

// ==================== COURSES ENDPOINTS ====================

test.describe("Courses API", () => {
  // @points: 8
  test("GET /courses - should return all courses", async ({ request }) => {
    const response = await request.get("/courses");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThanOrEqual(1);

    // Check course structure
    const course = body.data[0];
    expect(course).toHaveProperty("id");
    expect(course).toHaveProperty("code");
    expect(course).toHaveProperty("name");
    expect(course).toHaveProperty("credits");
    expect(course).toHaveProperty("department");
  });

  // @points: 9
  test("POST /courses - should create a new course", async ({ request }) => {
    const newCourse = {
      id: 208,
      code: "CS400",
      name: "Test Course",
      credits: 3,
      department: "Computer Science",
      instructorId: 101,
      capacity: 30,
      schedule: {
        days: ["Monday", "Wednesday"],
        time: "10:00-11:00",
        room: "Tech 100",
      },
      prerequisites: [],
    };

    const response = await request.post("/courses", {
      data: newCourse,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("id");
    expect(body.data.code).toBe(newCourse.code);
    expect(body.data.name).toBe(newCourse.name);
  });
});

// ==================== ASSIGNMENTS ENDPOINTS ====================

test.describe("Assignments API", () => {
  // @points: 8
  test("GET /assignments - should return all assignments", async ({
    request,
  }) => {
    const response = await request.get("/assignments");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThanOrEqual(1);

    // Check assignment structure
    const assignment = body.data[0];
    expect(assignment).toHaveProperty("id");
    expect(assignment).toHaveProperty("courseId");
    expect(assignment).toHaveProperty("title");
    expect(assignment).toHaveProperty("maxPoints");
  });

  // @points: 9
  test("POST /assignments - should create a new assignment", async ({
    request,
  }) => {
    const newAssignment = {
      id: 407,
      courseId: 201,
      title: "Test Assignment",
      description: "This is a test assignment",
      dueDate: "2025-03-01",
      maxPoints: 100,
      type: "homework",
    };

    const response = await request.post("/assignments", {
      data: newAssignment,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("id");
    expect(body.data.title).toBe(newAssignment.title);
    expect(body.data.courseId).toBe(newAssignment.courseId);
  });
});

// ==================== GRADES ENDPOINTS ====================

test.describe("Grades API", () => {
  // @points: 8
  test("GET /grades - should return all grades", async ({ request }) => {
    const response = await request.get("/grades");

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThanOrEqual(1);

    // Check grade structure
    const grade = body.data[0];
    expect(grade).toHaveProperty("id");
    expect(grade).toHaveProperty("enrollmentId");
    expect(grade).toHaveProperty("assignmentId");
    expect(grade).toHaveProperty("score");
  });

  // @points: 8
  test("POST /grades - should create a new grade", async ({ request }) => {
    const newGrade = {
      id: 507,
      enrollmentId: 1,
      assignmentId: 1,
      score: 95,
      submittedDate: "2025-02-01",
      feedback: "Excellent work!",
    };

    const response = await request.post("/grades", {
      data: newGrade,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty("data");
    expect(body.data).toHaveProperty("id");
    expect(body.data.score).toBe(newGrade.score);
    expect(body.data.enrollmentId).toBe(newGrade.enrollmentId);
  });
});
