const employees = [
    [
      {
        "id": 1,
        "email": "johndoe@example.com",
        "password": "12345",
        "tasks": [
          {
            "taskTitle": "Complete onboarding",
            "taskDescription": "Finish all onboarding tasks",
            "taskDate": "2024-10-30",
            "category": "Onboarding",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Update project report",
            "taskDescription": "Prepare weekly status report",
            "taskDate": "2024-11-01",
            "category": "Reporting",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Code review",
            "taskDescription": "Review code for module A",
            "taskDate": "2024-10-31",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "janesmith@example.com",
        "password": "12345",
        "tasks": [
          {
            "taskTitle": "Plan product launch",
            "taskDescription": "Coordinate with marketing for product launch",
            "taskDate": "2024-11-02",
            "category": "Management",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Client meeting",
            "taskDescription": "Meet with client to discuss requirements",
            "taskDate": "2024-11-05",
            "category": "Client Relations",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Feedback review",
            "taskDescription": "Go through feedback from last sprint",
            "taskDate": "2024-10-30",
            "category": "Management",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "michaelbrown@example.com",
        "password": "12345",
        "tasks": [
          {
            "taskTitle": "Data analysis",
            "taskDescription": "Analyze Q3 sales data",
            "taskDate": "2024-10-29",
            "category": "Analytics",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Prepare data visualization",
            "taskDescription": "Create graphs for report presentation",
            "taskDate": "2024-11-01",
            "category": "Analytics",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Weekly data sync",
            "taskDescription": "Update data warehouse",
            "taskDate": "2024-10-31",
            "category": "Data Management",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "lisawhite@example.com",
        "password": "12345",
        "tasks": [
          {
            "taskTitle": "Design wireframes",
            "taskDescription": "Create wireframes for new feature",
            "taskDate": "2024-11-02",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Client feedback",
            "taskDescription": "Incorporate feedback from UX testing",
            "taskDate": "2024-10-29",
            "category": "UX",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "Update prototype",
            "taskDescription": "Refine prototype based on latest specs",
            "taskDate": "2024-10-30",
            "category": "Design",
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "jamesgreen@example.com",
        "password": "12345",
        "tasks": [
          {
            "taskTitle": "Create ad campaign",
            "taskDescription": "Launch new product ads on social media",
            "taskDate": "2024-10-30",
            "category": "Marketing",
            "active": true,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "taskTitle": "SEO optimization",
            "taskDescription": "Optimize blog content for search engines",
            "taskDate": "2024-11-04",
            "category": "SEO",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "taskTitle": "Market research",
            "taskDescription": "Compile report on competitors",
            "taskDate": "2024-11-01",
            "category": "Research",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "12345"
    }
  ];
  

  export const setLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () => {
        const employees = JSON.parse(localStorage.getItem('employees'))
        const admin = JSON.parse(localStorage.getItem('admin'))
        console.log(employees,admin);
        
  }