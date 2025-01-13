// // let data = [
// //     { id: 1, name: "a" },
// //     { id: 2, name: "b" },
// //     { id: 3, name: "c" },
// //     { id: 4, name: "d" },
// //     { id: 5, name: "e" },
// //     { id: 6, name: "f" },
// // ];

// // let idsYouWant = [1,2, 3,4, ,6,5]; // List of IDs you want
// // let propertyYouWant = "name"; // The property to extract

// // let res = data
// //     .filter((item) => idsYouWant.includes(item.id)) // Filter items with matching IDs
// //     .map((item) => ({ id: item.id, [propertyYouWant]: item[propertyYouWant] })); // Map to desired properties

// // console.log(res);


// // const data = [
// //     { id: 1, name: "Alice", age: 25 },
// //     { id: 2, name: "Bob", age: 30 },
// //     { id: 3, name: "Charlie", age: 35 }
// // ];

// // // Transform the data
// // const transformedData = data.map(person => ({
// //     fullName: person.name,
// //     yearsOld: person.age
// // }));

// // console.log(transformedData); 


// // Constants
// const CourseInfo = {
//     courseId: 451,
//     name: "Introduction to JavaScript"
//   };
  
//   const AssignmentGroup = {
//     groupId: 12345,
//     groupName: "Fundamentals of JavaScript",
//     courseId: 451,
//     groupWeight: 25,
//     assignments: [
//       {
//         assignmentId: 1,
//         assignmentName: "Declare a Variable",
//         dueDate: "2023-01-25",
//         maxPoints: 50
//       },
//       {
//         assignmentId: 2,
//         assignmentName: "Write a Function",
//         dueDate: "2023-02-27",
//         maxPoints: 150
//       },
//       {
//         assignmentId: 3,
//         assignmentName: "Code the World",
//         dueDate: "3156-11-15",
//         maxPoints: 500
//       }
//     ]
//   };
  
//   const LearnerSubmissions = [
//     {
//       learnerId: 125,
//       assignmentId: 1,
//       submissionDetails: {
//         submittedAt: "2023-01-25",
//         score: 47
//       }
//     },
//     {
//       learnerId: 125,
//       assignmentId: 2,
//       submissionDetails: {
//         submittedAt: "2023-02-12",
//         score: 150
//       }
//     },
//     {
//       learnerId: 125,
//       assignmentId: 3,
//       submissionDetails: {
//         submittedAt: "2023-01-25",
//         score: 400
//       }
//     },
//     {
//       learnerId: 132,
//       assignmentId: 1,
//       submissionDetails: {
//         submittedAt: "2023-01-24",
//         score: 39
//       }
//     },
//     {
//       learnerId: 132,
//       assignmentId: 2,
//       submissionDetails: {
//         submittedAt: "2023-03-07",
//         score: 140
//       }
//     }
//   ];
  
//   // Helper functions
//   const isPastDue = (dueDate) => new Date(dueDate) <= new Date();
  
//   const calculateWeightedAverage = (scores) => {
//     const totalWeightedScore = scores.reduce((sum, { score, maxPoints }) => sum + score, 0);
//     const totalMaxPoints = scores.reduce((sum, { maxPoints }) => sum + maxPoints, 0);
//     return totalMaxPoints ? (totalWeightedScore / totalMaxPoints) * 100 : 0;
//   };
  
//   // Main transformation logic
//   const transformData = (assignments, submissions) => {
//     const pastDueAssignments = assignments.filter((assignment) => isPastDue(assignment.dueDate));
  
//     // Group submissions by learnerId
//     const learners = {};
//     submissions.forEach((submission) => {
//       const { learnerId, assignmentId, submissionDetails } = submission;
//       const { score } = submissionDetails;
  
//       // Find corresponding assignment
//       const assignment = pastDueAssignments.find((a) => a.assignmentId === assignmentId);
  
//       if (assignment) {
//         if (!learners[learnerId]) {
//           learners[learnerId] = { id: learnerId, avg: 0, scores: [] };
//         }
//         learners[learnerId].scores.push({ score, maxPoints: assignment.maxPoints, assignmentId });
//       }
//     });
  
//     // Calculate averages and format the output
//     return Object.values(learners).map((learner) => {
//       const scoresObj = {};
//       learner.scores.forEach(({ assignmentId, score, maxPoints }) => {
//         scoresObj[assignmentId] = (score / maxPoints) * 100;
//       });
  
//       return {
//         id: learner.id,
//         avg: calculateWeightedAverage(learner.scores),
//         ...scoresObj
//       };
//     });
//   };
  
//   // Execute the transformation
//   const result = transformData(AssignmentGroup.assignments, LearnerSubmissions);
//   console.log(result);
  

////////////////////////////////////////////////////////
// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
};
  
// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
    {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
    },
    {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
    },
    {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
    }
    ]
};
  
// The provided learner submission data.
const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
];

// Check if the assignment group belongs to the course.
function isValidCourseAssignmentGroup(CourseInfo, AssignmentGroup) {
  return CourseInfo.id === AssignmentGroup.course_id;
}

// Check if a learner's submission is valid.
function isValidSubmission(submission, assignment) {
  const score = submission.submission.score;
  const pointsPossible = assignment.points_possible;

  if (pointsPossible === 0 || typeof score !== "number" || isNaN(score)) {
    return false;
  } else { 
    return true;
  }
}

// Calculate the weighted average of a learner's scores.
function calculateWeightedAverage(learnerData) {
  return (learnerData.totalScore / learnerData.totalWeight) * 100;
}

// Process learner data, calculate scores, and return the results.
function processLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  if (!isValidCourseAssignmentGroup(CourseInfo, AssignmentGroup)) {
    throw new Error("Invalid input: AssignmentGroup does not belong to the course.");
  }

  const assignments = AssignmentGroup.assignments;
  const assignmentScores = {};
  const learnerData = {};

  for (const submission of LearnerSubmissions) {
    const learnerID = submission.learner_id;
    const assignmentID = submission.assignment_id;
    const assignment = assignments.find((a) => a.id === assignmentID);

    if (!assignment || new Date(submission.submission.submitted_at) > new Date(assignment.due_at)) {
      continue;
    }

    if (isValidSubmission(submission, assignment)) {
      if (!learnerData[learnerID]) {
        learnerData[learnerID] = {
          id: learnerID,
          totalScore: 0,
          totalWeight: 0,
        };
      }

      const score = submission.submission.score;
      const pointsPossible = assignment.points_possible;
      learnerData[learnerID].totalScore += (score / pointsPossible) * pointsPossible;
      learnerData[learnerID].totalWeight += pointsPossible;
      assignmentScores[assignmentID] = (score / pointsPossible) * 100;
    }
  }

  return { learnerData, assignmentScores };
}

// Get and format learner data, including scores and averages.
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  try {
    const { learnerData, assignmentScores } = processLearnerData(
      CourseInfo,
      AssignmentGroup,
      LearnerSubmissions
    );
  
    const results = [];
  
    for (const learnerID in learnerData) {
      const learner = learnerData[learnerID];
      const weightedAverage = calculateWeightedAverage(learner);
  
      const learnerResult = {
        id: learner.id,
        avg: weightedAverage,
      };
  
      for (const assignmentID in assignmentScores) {
        learnerResult[assignmentID] = assignmentScores[assignmentID];
      }
  
      results.push(learnerResult);
    }
  
    return results;
    
  } catch(error) {
    console.error(error.message);
  }
 
}

// Get learner data and handle potential errors.
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);

