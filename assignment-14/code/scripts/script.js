const dummyData =  {
    "alice@example.com": {
      firstName: "Alice",
      lastName: "Smith",
      mobile: "555-123-4567",
      age: 28,
      city: "San Francisco"
    },
    "jack@example.com": {
      firstName: "Jack",
      lastName: "Johnson",
      mobile: "555-867-5309",
      age: 33,
      city: "Seattle"
    },
    "olivia@example.com": {
      firstName: "Olivia",
      lastName: "Garcia",
      mobile: "555-555-1212",
      age: 45,
      city: "Miami"
    },
    "emma@example.com": {
      firstName: "Emma",
      lastName: "Taylor",
      mobile: "555-123-4567",
      age: 22,
      city: "Los Angeles"
    },
    "ethan@example.com": {
      firstName: "Ethan",
      lastName: "Martinez",
      mobile: "555-867-5309",
      age: 29,
      city: "Chicago"
    },
    "noah@example.com": {
      firstName: "Noah",
      lastName: "Lee",
      mobile: "555-555-1212",
      age: 36,
      city: "New York"
    },
    "mia@example.com": {
      firstName: "Mia",
      lastName: "Davis",
      mobile: "555-123-4567",
      age: 27,
      city: "San Francisco"
    },
    "amelia@example.com": {
      firstName: "Amelia",
      lastName: "Rodriguez",
      mobile: "555-867-5309",
      age: 38,
      city: "Miami"
    },
    "logan@example.com": {
      firstName: "Logan",
      lastName: "Gonzalez",
      mobile: "555-555-1212",
      age: 41,
      city: "Los Angeles"
    },
    "harper@example.com": {
      firstName: "Harper",
      lastName: "Hernandez",
      mobile: "555-123-4567",
      age: 26,
      city: "Chicago"
    },
    "robert.johnson@example.com": {
        firstName: "Robert",
        lastName: "Johnson",
        mobile: "555-123-4567",
        age: 43,
        city: "Memphis"
      },
      "ella.fitzgerald@example.com": {
        firstName: "Ella",
        lastName: "Fitzgerald",
        mobile: "555-867-5309",
        age: 36,
        city: "Newport News"
      },
      "ray.charles@example.com": {
        firstName: "Ray",
        lastName: "Charles",
        mobile: "555-555-1212",
        age: 50,
        city: "Albany"
      },
      "billie.holiday@example.com": {
        firstName: "Billie",
        lastName: "Holiday",
        mobile: "555-123-4567",
        age: 34,
        city: "Baltimore"
      },
      "james.brown@example.com": {
        firstName: "James",
        lastName: "Brown",
        mobile: "555-867-5309",
        age: 47,
        city: "Augusta"
      },
      "aretha.franklin@example.com": {
        firstName: "Aretha",
        lastName: "Franklin",
        mobile: "555-555-1212",
        age: 52,
        city: "Detroit"
      },
      "nat.king.cole@example.com": {
        firstName: "Nat",
        lastName: "King Cole",
        mobile: "555-123-4567",
        age: 41,
        city: "Chicago"
      },
      "diana.ross@example.com": {
        firstName: "Diana",
        lastName: "Ross",
        mobile: "555-867-5309",
        age: 38,
        city: "Detroit"
      },
      "stevie.wonder@example.com": {
        firstName: "Stevie",
        lastName: "Wonder",
        mobile: "555-555-1212",
        age: 49,
        city: "Saginaw"
      },
      "bob.marley@example.com": {
        firstName: "Bob",
        lastName: "Marley",
        mobile: "555-123-4567",
        age: 36,
        city: "Kingston"
      },
      "linda.jones@example.com": {
        firstName: "Linda",
        lastName: "Jones",
        mobile: "555-123-4567",
        age: 29,
        city: "Atlanta"
        },
        "jackson.smith@example.com": {
        firstName: "Jackson",
        lastName: "Smith",
        mobile: "555-867-5309",
        age: 36,
        city: "Dallas"
        },
        "sharon.baker@example.com": {
        firstName: "Sharon",
        lastName: "Baker",
        mobile: "555-555-1212",
        age: 44,
        city: "Houston"
        },
        "tom.carter@example.com": {
        firstName: "Tom",
        lastName: "Carter",
        mobile: "555-123-4567",
        age: 33,
        city: "Seattle"
        },
        "natalie.wilson@example.com": {
        firstName: "Natalie",
        lastName: "Wilson",
        mobile: "555-867-5309",
        age: 27,
        city: "San Francisco"
        }        
  };

const loadData = ()=>{  
    console.log("jello");
    data = JSON.parse(localStorage.getItem('students'));
    if(data===null){
        localStorage.setItem('students',JSON.stringify(dummyData));
        data=JSON.parse(localStorage.getItem('students'));
    }
    const container = document.getElementById('container');
    content = '<div class="row">';
    const keys = Object.keys(data);
    for(i in data[keys[0]]){
        content+=`<div class="col heading">${i}</div>`;
    }
    cnt =0;
    content+='</div>'
    for(i in data){
        content+=`<div class="row">`;
        cnt++;
        for(j in data[i]){
            content+=`<div class="col">${data[i][j]}</div>`;
        }
        content+='</div>';
    }
    container.innerHTML=content;
} 
