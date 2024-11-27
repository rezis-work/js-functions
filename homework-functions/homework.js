// Commented functions are Named Function Expresions or Declarations
// current ones are anonymous arrow functions solutions

var getStudentFromIds = (studentId) =>
  studentRecords.find((record) => record.id == studentId);

// function getStudentFromIds(studentId) {
//   return studentRecords.find(function matchId(record) {
//     return record.id == studentId;
//   });
// }

var printRecords = (recordIds) =>
  recordIds
    .map(getStudentFromIds)
    .sort((record1, record2) =>
      record1.name < record2.name ? -1 : record1.name > record2.name ? 1 : 0
    )
    .forEach((record) =>
      console.log(
        `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
      )
    );

// function printRecords(recordIds) {
//   var records = recordIds.map(getStudentFromIds);

//   records.sort(function sortbynameAsc(record1, record2) {
//     if (record1.name < record2.name) return -1;
//     else if (record1.name > record2.name) return 1;
//     else return 0;
//   });

//   records.forEach(function printRecord(record) {
//     console.log(
//       `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
//     );
//   });
// }

var paidStudentsToEnroll = () => [
  ...currentEnrollment,
  ...studentRecords
    .filter((record) => record.paid && !currentEnrollment.includes(record.id))
    .map((record) => record.id),
];

// function paidStudentsToEnroll() {
//   var recordsToEnroll = studentRecords.filter(function needToEnroll(record) {
//     return record.paid && !currentEnrollment.includes(record.id);
//   });

//   var idsToEnroll = recordsToEnroll.map(function getStudentsId(record) {
//     return record.id;
//   });

//   return [...currentEnrollment, ...idsToEnroll];
// }

var remindUnpaid = (recodsId) =>
  printRecords(
    recodsId.filter((studentId) => !getStudentFromIds(studentId).paid)
  );

// function remindUnpaid(recordIds) {
//   var unpaidIds = recordIds.filter(function notYetPaid(studentId) {
//     var record = getStudentFromIds(studentId);
//     return !record.paid;
//   });

//   printRecords(unpaidIds);
// }

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
