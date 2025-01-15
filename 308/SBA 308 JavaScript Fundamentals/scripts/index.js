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
    if (courseInfo.id === assignmentGroup.course_id) {
      console.log("ID matches");
    } else {
      // error msg if no match
      throw new Error(
        "The assignment group does not belong to the specified course."
      );
    }
  } catch (error) {
    console.error(error.message);
  }
}
isValidCourseassignmentGroup(courseInfo, assignmentGroup);

// Calculate the learner's total score based on submissions.
function getLearnerAverageScore(learnerId, assignments, submissions) {
  let totalScore = 0;
  let totalPointsPossible = 0;

  // Filter submissions for the specific learner
  const learnerSubmissions = submissions.filter(
    (submission) => submission.learner_id === learnerId
  );

  // Loop through each assignment and calculate score
  assignments.forEach((assignment) => {
    const submission = learnerSubmissions.find(
      (sub) => sub.assignment_id === assignment.id
    );

    if (submission) {
      totalScore += submission.submission.score; // Add the score for the assignment.
      totalPointsPossible += assignment.points_possible;
    }
  });

  // calculate the average if score is higher than 0
  return totalPointsPossible > 0 ? totalScore / totalPointsPossible : 0;
}

// get average score for each learner
function getLearnerAvg(courseInfo, assignmentGroup, learnerSubmissions) {
  const learnerIds = [
    ...new Set(learnerSubmissions.map((submission) => submission.learner_id)),
  ];

  learnerIds.forEach((learnerId) => {
    const averageScore = getLearnerAverageScore(
      learnerId,
      assignmentGroup.assignments,
      learnerSubmissions
    );
    console.log(
      `Learner ID: ${learnerId}, Average Score: ${(averageScore * 100).toFixed(
        2
      )}%` //Format the percentage to two decimal places
    );
  });
}

// Call the function to log the learner averages
getLearnerAvg(courseInfo, assignmentGroup, learnerSubmissions);

// Function to check if submissions were turned in on time
function submissionTimeline(assignments, submissions) {
  submissions.forEach((submission) => {
    const assignment = assignments.find(
      (assignment) => assignment.id === submission.assignment_id
    );
    if (assignment) {
      const dueDate = new Date(assignment.due_at);
      const submittedDate = new Date(submission.submission.submitted_at);

      if (submittedDate <= dueDate) {
        console.log(`Assignment ID ${assignment.id}: Turned in on time.`);
      } else {
        console.log(`Assignment ID ${assignment.id}: Late submission.`);
      }
    } else {
      console.log(`Assignment ID ${submission.assignment_id}: Not found.`);
    }
  });
}

submissionTimeline(assignmentGroup.assignments, learnerSubmissions);

//deduct 10% if late sub
function deductPercentageFromScore(submissions, percentage) {
  return submissions.map((submission) => {
    const deduction = submission.submission.score * (percentage / 100);
    const updatedScore = submission.submission.score - deduction;
    submission.submission.score = updatedScore < 0 ? 0 : updatedScore; // Prevent negative scores
    return submission;
  });
}

//call function to minus 10% from learner scores
const updatedSubmissions = deductPercentageFromScore(learnerSubmissions, 10);
console.log(updatedSubmissions);
