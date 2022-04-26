describe("Feedback", function () {
    it("should return true for valid inputs", function () {
      let feedbackForm = {
       firstName: "Chirag",
      lastName: "dalaniya",
      email: "chirag@gmail.com",
      homeNo: "+919235096844",
      workNo: "+919235096845",
      homeNo1: "",
      workNo1: "",
      dob: "1999-08-08",
      company: "Amazon",
      jobTitle: "Developer",
      notes: "Hello",
      }
      expect(submitContact(feedbackForm)).toBeTrue();
      expect(contacts[0].firstname).toEqual('Chirag');
      expect(contacts[0].notes).toEqual('Hello')
    });
  });