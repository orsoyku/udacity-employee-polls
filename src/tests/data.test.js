import { _saveQuestion, _saveQuestionAnswer } from "../utils/data";

describe("data js test", () => {
  it("will true if formatted question is passed", async () => {
    const item = {
      author: "lokum123",
      optionOneText: "Üç renkli kediler dişidir.",
      optionTwoText: "Üç renkli kediler erkekdir.",
    };
    var result = await _saveQuestion(item);
    expect(result.id).not.toBeNull();
    expect(result.author).toBe(item.author);
    expect(result.optionOne.text).toBe(item.optionOneText);
    expect(result.optionTwo.text).toBe(item.optionTwoText);
  });

  it("Return an error is returned if incorrect data is passed to the function.", async () => {
    const item = {};
    await expect(_saveQuestion(item)).rejects.toEqual(
      "Please enter the fields correctly."
    );
  });

  it("Return an error is returned if incorrect data is passed to the function-2.", async () => {
    const item = {
      author: "lokum123",
      optionOneText: "Üç renkli kediler dişidir.",
    };
    await expect(_saveQuestion(item)).rejects.toEqual(
      "Please enter the fields correctly."
    );
  });
  it("Return an error is returned if incorrect data is passed to the function-3.", async () => {
    const item = {
      optionOneText: "Üç renkli kediler dişidir.",
      optionTwoText: "Üç renkli kediler erkekdir.",
    };
    await expect(_saveQuestion(item)).rejects.toEqual(
      "Please enter the fields correctly."
    );
  });

  it("should save the given answer", async () => {
    const answer = {
      authedUser: "lokum123",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    const res = await _saveQuestionAnswer(answer);
    expect(res).toBeTruthy();
  });

  it("should not save the given invalid answer", async () => {
    const item = { authedUser: "lokum123"};
    await expect(_saveQuestionAnswer(item)).rejects.toEqual(
      "Please enter the fields correctly."
    );
  });
});
