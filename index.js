var workshop = {
  teacher: "Rezi",
  ask: (question) => {
    console.log(this.teacher, question);
  },
};

workshop.ask("What about this");

workshop.ask.call(workshop, "And what about here?");
