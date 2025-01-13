// The provided course information. 
const courseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15", // future date - testing purposes.
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const learnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// Check if the assignment group belongs to the course.
function isValidCourseassignmentGroup(courseInfo, assignmentGroup) {
  try {
    // Check if the course_id matches
    if (courseInfo.id === assignmentGroup.course_id) {
      // If IDs match, log success message
      console.log("ID matches");
    } else {
      // If they don't match, throw an error
      throw new Error("The assignment group does not belong to the specified course.");
    }
  } catch (error) {
    // Catch the error and log it
    console.error(error.message);
  }
}

isValidCourseassignmentGroup(courseInfo, assignmentGroup);

// Calculate the learner's total score based on submissions.
function  getLearnerAverageScore(learnerId, assignments, submissions) {
  let totalScore = 0;
  let totalPointsPossible = 0;

  // Filter submissions for the specific learner
  const learnerSubmissions = submissions.filter(submission => submission.learner_id === learnerId);

  // Loop through each assignment and calculate score
  assignments.forEach(assignment => {
    const submission = learnerSubmissions.find(sub => sub.assignment_id === assignment.id);

    if (submission) {
      totalScore += submission.submission.score;
      totalPointsPossible += assignment.points_possible;
    }
  });


   // If there were any valid submissions, calculate the average
   return totalPointsPossible > 0 ? totalScore / totalPointsPossible : 0;
  }

// Log the learner's ID and average score for each learner
function logLearnerAverages(courseInfo, assignmentGroup, learnerSubmissions) {
  // Process each learner's average score
  const learnerIds = [...new Set(learnerSubmissions.map(submission => submission.learner_id))];

  learnerIds.forEach(learnerId => {
    const averageScore = getLearnerAverageScore(learnerId, assignmentGroup.assignments, learnerSubmissions);
    console.log(`Learner ID: ${learnerId}, Average Score: ${(averageScore * 100).toFiresultsed(2)}%`);
  });
}

// Call the function to log the learner averages
logLearnerAverages(courseInfo, assignmentGroup, learnerSubmissions);


//**********************OLD CODE******************************/
// The provided course information.
// const courseInfo = {
//   id: 451,
//   name: "Introduction to JavaScript"
//   };
  
//   // The provided assignment group.
//   const assignmentGroup = {
//   id: 12345,
//   name: "Fundamentals of JavaScript",
//   course_id: 451,
//   group_weight: 25,
//   assignments: [
//   {
//   id: 1,
//   name: "Declare a Variable",
//   due_at: "2023-01-25",
//   points_possible: 50
//   },
//   {
//   id: 2,
//   name: "Write a Function",
//   due_at: "2023-02-27",
//   points_possible: 150
//   },
//   {
//   id: 3,
//   name: "Code the World",
//   due_at: "3156-11-15",
//   points_possible: 500
//   }
//   ]
//   };
  
//   // The provided learner submission data.
//   const learnerSubmissions = [
//   {
//   learner_id: 125,
//   assignment_id: 1,
//   submission: {
//   submitted_at: "2023-01-25",
//   score: 47
//   }
//   },
//   {
//   learner_id: 125,
//   assignment_id: 2,
//   submission: {
//   submitted_at: "2023-02-12",
//   score: 150
//   }
//   },
//   {
//   learner_id: 125,
//   assignment_id: 3,
//   submission: {
//   submitted_at: "2023-01-25",
//   score: 400
//   }
//   },
//   {
//   learner_id: 132,
//   assignment_id: 1,
//   submission: {
//   submitted_at: "2023-01-24",
//   score: 39
//   }
//   },
//   {
//   learner_id: 132,
//   assignment_id: 2,
//   submission: {
//   submitted_at: "2023-03-07",
//   score: 140
//   }
//   }
//   ];
    

// // Adding functions here:
// // Function to process learner data: we factor in the late assignments manually
// function getLearnerData(course, ag, submissions) {
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0, // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833, // late: (140 - 15) / 150
//     },
//   ];

//   return result;
// }

// const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);

// console.log(result);

// // check if assignmentGroup is valid for specified course
// function getLearnerData(course, ag, submissions) {
//   if (ag.course_id !== course.id) {
//     throw new Error(
//       "Invalid input: assignmentGroup does not belong to the specified course."
//     );
//   }
//   const result = [];

//   //Iterate thru each learner and get the assignment num
//   submissions.forEach((submission) => {
//     const learnerId = submission.learner_id;
//     const assignment = ag.assignments.find(
//       (assignment) => assignment.id === submission.assignment_id
//     );

//     // Check if assignment is due yet, if not skip
//     if (new Date(assignment.due_at) > new Date()) {
//       return;
//     }
//     // Score is initialized with sub score
//     let score = submission.submission.score;

//     // Calc score based on late penalty - deduct 10 percent
//     if (new Date(submission.submission.submitted_at) > new Date(assignment.due_at)
//     ) {
//       const latePenalty = Math.min(0.1 * assignment.points_possible, score);
//       score -= latePenalty;
//     }

//     // If points are zero, it will show an error message
//     if (assignment.points_possible === 0) {
//       throw new Error("Possible points cannot be zero");
//     }

//     // Calc average and assignment scores for each learner
//     const avg = result[learnerId]?.avg || 0;
//     const count = result[learnerId]?.count || 0;
//     const assignmentScore = score / assignment.points_possible;

//     results.push({
//       id: learnerId,
//       avg: (avg * count + assignmentScore) / (count + 1),
//       ...(result[learnerId] || {}),
//       [assignment.id]: assignmentScore,
//     });
//     console.log(results);


