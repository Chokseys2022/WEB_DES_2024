# Skill-Based Assessment for JavaScript Fundamentals

## Overview

This repository contains functions designed to analyze learner submissions, calculate average scores, and handle late submissions with penalties within a course. The code is structured around key components of course information, assignment groups, assignments, and learner submissions.

## Course Information

- **id**
- **name**

### Assignment Group:

- **Assignment Group id**
- **name**
- **course_id**
- **group_weight**

### Assignments:

- **id**
- **name**
- **due_at**
- **points_possible**

### Learner Submissions:

- **learner_id**
- **assignment_id**
- **submission**
- **submitted_at**
- **score**

## Learner Submissions

The data includes the learners' submissions for the assignments, including the date submitted and the score they received. This helps in tracking their progress in the course.

## Available Functions

- **isValidCourseassignmentGroup(courseInfo, assignmentGroup)**  
  This function checks if the assignment group belongs to the correct course by matching the `course_id`.

- **getLearnerAverageScore(learnerId, assignments, submissions)**  
  This function calculates the average score of a learner based on their submissions, considering all assignments and the total points possible.

- **getLearnerAvg(courseInfo, assignmentGroup, learnerSubmissions)**  
  This function calculates and logs the average score for each learner in the course based on their individual assignment scores.

- **submissionTimeline(assignments, submissions)**  
  This function checks whether each assignment was submitted on time or late, comparing the submission dates to the assignment due dates.

- **deductPercentageFromScore(submissions, percentage)**  
  This function deducts a specified percentage from the score of late submissions, ensuring that learners are penalized for submitting work after the due date.

## Usage

To use these functions, define the required data structures (`courseInfo`, `assignmentGroup`, `learnerSubmissions`) and call the functions as needed to track learner progress, calculate averages, and handle late submissions.

## Notes

- Ensure the course id matches the id in learner submissions.
- Late submissions are penalized by deducting 10 percent of the assignment's points possible.

## Assignment Instructions

[Download the Assignment PDF](./SBA.pdf)

## Github Link

[Visit the GitHub Repository](https://github.com/Chokseys2022/WEB_DES_2024/tree/main/308/SBA%20308%20JavaScript%20Fundamentals)
