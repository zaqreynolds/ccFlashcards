import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
};

export const topicSlice = createSlice(options);

// console.log(topicSlice);

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicSlice.actions;
// export const addTopic = topicSlice.actions.addTopic
export const topicsReducer = topicSlice.reducer;
