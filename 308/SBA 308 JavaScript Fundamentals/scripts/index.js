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
const LearnerSubmissions = [
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
function isValidCourseAssignmentGroup(CourseInfo, AssignmentGroup) {
  try {
    // Check if the course_id matches
    if (CourseInfo.id === AssignmentGroup.course_id) {
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

isValidCourseAssignmentGroup(CourseInfo, AssignmentGroup);

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
function logLearnerAverages(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  // Process each learner's average score
  const learnerIds = [...new Set(LearnerSubmissions.map(submission => submission.learner_id))];

  learnerIds.forEach(learnerId => {
    const averageScore = getLearnerAverageScore(learnerId, AssignmentGroup.assignments, LearnerSubmissions);
    console.log(`Learner ID: ${learnerId}, Average Score: ${(averageScore * 100).toFixed(2)}%`);
  });
}

// Call the function to log the learner averages
logLearnerAverages(CourseInfo, AssignmentGroup, LearnerSubmissions);