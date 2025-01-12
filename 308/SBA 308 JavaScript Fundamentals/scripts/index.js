// The provided course information.
const CourseInfo = {
  courseId: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  groupId: 12345,
  groupName: "Fundamentals of JavaScript",
  courseId: 451,
  groupWeight: 25,
  assignments: [
    {
      assignmentId: 1,
      assignmentName: "Declare a Variable",
      dueDate: "2023-01-25",
      maxPoints: 50
    },
    {
      assignmentId: 2,
      assignmentName: "Write a Function",
      dueDate: "2023-02-27",
      maxPoints: 150
    },
    {
      assignmentId: 3,
      assignmentName: "Code the World",
      dueDate: "3156-11-15",
      maxPoints: 500
    }
  ]
};


// The provided learner submission data.
const LearnerSubmissions = [
  {
    learnerId: 125,
    assignmentId: 1,
    submissionDetails: {
      submittedAt: "2023-01-25",
      score: 47
    }
  },
  {
    learnerId: 125,
    assignmentId: 2,
    submissionDetails: {
      submittedAt: "2023-02-12",
      score: 150
    }
  },
  {
    learnerId: 125,
    assignmentId: 3,
    submissionDetails: {
      submittedAt: "2023-01-25",
      score: 400
    }
  },
  {
    learnerId: 132,
    assignmentId: 1,
    submissionDetails: {
      submittedAt: "2023-01-24",
      score: 39
    }
  },
  {
    learnerId: 132,
    assignmentId: 2,
    submissionDetails: {
      submittedAt: "2023-03-07",
      score: 140
    }
  }
];


function calculateLearnerData(course, assignmentGroup, submissions) {
  // Here, we would process this data to achieve the desired result.
  const result = [
    {
      learnerId: 125,
      averageScore: 0.985, // (47 + 150) / (50 + 150)
      assignmentScores: {
        1: 0.94, // 47 / 50
        2: 1.0 // 150 / 150
      }
    },
    {
      learnerId: 132,
      averageScore: 0.82, // (39 + 125) / (50 + 150)
      assignmentScores: {
        1: 0.78, // 39 / 50
        2: 0.833 // late: (140 - 15) / 150
      }
    }
  ];

  return result;
}

const learnerResults = calculateLearnerData(courseDetails, assignmentGroupDetails, learnerSubmissions);

console.log(learnerResults);
