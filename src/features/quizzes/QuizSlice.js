import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicSlice";

const options = {
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: []
      };
    }
  }
};

export const addQuizAddQuizId = (quiz) => {
  const { quizId, name, topicId, cardIds } = quiz;
  return (dispatch) => {
    dispatch(quizSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId: quizId, topicId: topicId }));
  };
};

export const quizSlice = createSlice(options);

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizSlice.actions;
export const quizzesReducer = quizSlice.reducer;
