var myResume={
    "contact": {
      "name": "Kavitha Balasundaram",
      "email": "kavitha.smb@gamil.com",
      "phone": 7708863271,
      "degree": "B.Tech(IT)",
      "location": {
            "address":{
                "address-line-1": "1/47, Pillayar Kovil Street",
                "address-line-2":"Thirupulivanam & Post",                
                "city": "Kanchipuram",
                "state": "Tamilnadu",
                "country": "India",
                "postalCode": 603406

            },
        },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/kavithasmb/",
        }
      ]
    },
    "experience": {
      "job-1":{
        "company": "Tech Mahindra Ltd, Sholinganallur, Chennai, India",
        "role": "Senior Software Engineer",
        "domain":"Telecom",
        "start": "October-2014",
        "end": "December-2015",
        "summary": "Associated with NMS domain specifically Cisco-PrimeHome Projects and involved in all activies of development lifecycle.",
      },
      "job-2":{
        "company": "HCL Infosystems LTD, Pondicherry, India",
        "role": "Research and Development Engineer (Java Development)",
        "domain":"Telecom",
        "start": "October-2014",
        "end": "August-2011",
        "summary": "Associated with NMS/OSS Projects and involved in all activies of development lifecycle of Automation Framework development",
      }
    },
    "education": [
      {
        "institution": "SRR Engineering College, Anna University",
        "degree":"B.Tech (Information Technology)",
        "mode": "fulltime",
        "start": 2008,
        "end": 2011,
        "percentage": 79,
      }
    ],
    "skills": [
        "Java",
        "Javascript",
        "Selenium",
    ],
    "languages": [
     "English",
     "Tamil"
    ],
    "interests": [    
        "research",
        "development",
        "testing",
        "deployement",
        "support"
      
    ]
}
//console.log(JSON.stringify(myResume));
  

var resumeContent = document.querySelector('#resumeContent');
resumeContent.appendChild(document.createElement('p'));

resumeContent.textContent=JSON.stringify(myResume);