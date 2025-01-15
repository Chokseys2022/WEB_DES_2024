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
function isValidCourseAssignmentGroup(courseInfo, assignmentGroup) {
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
isValidCourseAssignmentGroup(courseInfo, assignmentGroup);

//Check if an assignment is past due
function isPastDue(dueAt) {
  return new Date() >= new Date(dueAt);
}

//function to calculate percentage
function calculatePercentage(score, pointsPossible) {
  if (pointsPossible === 0) return 0;
  return score / pointsPossible;
}

//filter assignments with their due dates and points
const validAssignments = assignmentGroup.assignments.filter((assignment) =>
  isPastDue(assignment.due_at)
);

//get map of valid assignments with points and due dates
const assignmentMap = new Map(
  validAssignments.map((assignment) => [
    assignment.id,
    { pointsPossible: assignment.points_possible, dueAt: assignment.due_at },
  ])
);
console.log("Valid Assignments:", validAssignments);
console.log("Assignment Map:", Array.from(assignmentMap.entries()));


// Process each learner's submission to get id, and submission details
learnerSubmissions.forEach((submission) => {
    const { learner_id, assignment_id, submission: sub } = submission;
    //get the submission's submission time  and score
    const { submitted_at, score } = sub;
  
    // Find the assignment details
    const assignment = assignmentMap.get(assignment_id);
    if (assignment) {
      const { pointsPossible, dueAt } = assignment;
  
      let finalScore = score;
  
      // Check if submission is late and deduct points
      const submittedAt = new Date(submitted_at);
      if (submittedAt > new Date(dueAt)) {
        finalScore = Math.max(0, finalScore - 0.1 * pointsPossible); // Deduct 10% if late
      }
  
      console.log(
        `Score for learner ${learner_id} on assignment ${assignment_id}:`,
        finalScore
      );
    }
  });

  const getLearnerAverageScore = (learnerId, assignments, submissions) => {
    const learnerSubmissions = submissions.filter(
      (submission) => submission.learner_id === learnerId
    );
  
    let totalScore = 0;
    let totalPointsPossible = 0;
  
    assignments.forEach((assignment) => {
      const submission = learnerSubmissions.find(
        (sub) => sub.assignment_id === assignment.id
      );
  
      if (submission) {
        totalScore += submission.submission.score;
        totalPointsPossible += assignment.points_possible;
      }
    });
  
    return totalPointsPossible > 0 ? totalScore / totalPointsPossible : 0;}