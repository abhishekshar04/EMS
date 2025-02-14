const admin = {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
}
const employees = {
  "employees": [
      {
          "id": 1,
          "firstName": "Aarav",
          "email": "employee1@example.com",
          "password": "123",
          "tasks": [
              {
                  "taskTitle": "Complete Project Report",
                  "taskDescription": "Prepare the final report for the ongoing project.",
                  "taskDate": "2025-02-15",
                  "category": "Documentation",
                  "active": true,
                  "newTask": false,
                  "completed": false,
                  "failed": false
              },
              {
                  "taskTitle": "Fix CSS Bugs",
                  "taskDescription": "Resolve UI inconsistencies in the dashboard.",
                  "taskDate": "2025-02-12",
                  "category": "Development",
                  "active": true,
                  "newTask": true,
                  "completed": false,
                  "failed": false
              },
              {
                  "taskTitle": "Review API Integration",
                  "taskDescription": "Test and validate API responses.",
                  "taskDate": "2025-02-18",
                  "category": "Testing",
                  "active": false,
                  "newTask": false,
                  "completed": true,
                  "failed": false
              },
              {
                  "taskTitle": "Write Unit Tests",
                  "taskDescription": "Improve test coverage for backend services.",
                  "taskDate": "2025-02-16",
                  "category": "Testing",
                  "active": true,
                  "newTask": true,
                  "completed": false,
                  "failed": false
              }
          ],
          "taskCount": {
              "active": 2,
              "newTask": 2,
              "completed": 1,
              "failed": 0
          }
      },
      {
          "id": 2,
          "firstName": "Vihaan",
          "email": "employee2@example.com",
          "password": "123",
          "tasks": [
              {
                  "taskTitle": "Optimize Database Queries",
                  "taskDescription": "Improve the database queries for faster response.",
                  "taskDate": "2025-02-14",
                  "category": "Optimization",
                  "active": true,
                  "newTask": true,
                  "completed": false,
                  "failed": false
              },
              {
                  "taskTitle": "Implement JWT Authentication",
                  "taskDescription": "Enhance system security using JWT.",
                  "taskDate": "2025-02-20",
                  "category": "Security",
                  "active": false,
                  "newTask": false,
                  "completed": false,
                  "failed": true
              },
              {
                  "taskTitle": "Create Dashboard Charts",
                  "taskDescription": "Visualize data using charts and graphs.",
                  "taskDate": "2025-02-22",
                  "category": "Development",
                  "active": true,
                  "newTask": false,
                  "completed": false,
                  "failed": false
              }
          ],
          "taskCount": {
              "active": 2,
              "newTask": 1,
              "completed": 0,
              "failed": 1
          }
      },
      {
          "id": 3,
          "firstName": "Ishaan",
          "email": "employee3@example.com",
          "password": "123",
          "tasks": [
              {
                  "taskTitle": "Design New UI",
                  "taskDescription": "Create wireframes for the upcoming dashboard redesign.",
                  "taskDate": "2025-02-18",
                  "category": "Design",
                  "active": true,
                  "newTask": true,
                  "completed": false,
                  "failed": false
              },
              {
                  "taskTitle": "Client Feedback Review",
                  "taskDescription": "Analyze feedback from the last product demo.",
                  "taskDate": "2025-02-16",
                  "category": "Feedback",
                  "active": false,
                  "newTask": false,
                  "completed": true,
                  "failed": false
              }
          ],
          "taskCount": {
              "active": 1,
              "newTask": 1,
              "completed": 1,
              "failed": 0
          }
      },
      {
          "id": 4,
          "firstName": "Kabir",
          "email": "employee4@example.com",
          "password": "123",
          "tasks": [
              {
                  "taskTitle": "Code Review",
                  "taskDescription": "Review and approve pull requests.",
                  "taskDate": "2025-02-11",
                  "category": "Code Review",
                  "active": false,
                  "newTask": false,
                  "completed": true,
                  "failed": false
              },
              {
                  "taskTitle": "Prepare Presentation",
                  "taskDescription": "Create slides for the quarterly review meeting.",
                  "taskDate": "2025-02-13",
                  "category": "Presentation",
                  "active": true,
                  "newTask": false,
                  "completed": false,
                  "failed": false
              }
          ],
          "taskCount": {
              "active": 1,
              "newTask": 0,
              "completed": 1,
              "failed": 0
          }
      },
      {
          "id": 5,
          "firstName": "Ayaan",
          "email": "employee5@example.com",
          "password": "123",
          "tasks": [
              {
                  "taskTitle": "Security Patch Update",
                  "taskDescription": "Apply security patches to the server.",
                  "taskDate": "2025-02-19",
                  "category": "Security",
                  "active": true,
                  "newTask": true,
                  "completed": false,
                  "failed": false
              },
              {
                  "taskTitle": "Monitor Server Logs",
                  "taskDescription": "Analyze logs for security vulnerabilities.",
                  "taskDate": "2025-02-14",
                  "category": "Security",
                  "active": false,
                  "newTask": false,
                  "completed": false,
                  "failed": true
              }
          ],
          "taskCount": {
              "active": 1,
              "newTask": 1,
              "completed": 0,
              "failed": 1
          }
      }
  ]
};


  
export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
}