import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [{
    id: 1,
    title: 'falcon 1',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae rerum earum ad blanditiis dolor suscipit laboriosam explicabo magnam vero, porro  mollitia aut ratione iure ducimus quod provident aliquid reiciendis.',
  },
  {
    id: 2,
    title: 'falcon 1',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae rerum earum ad blanditiis dolor suscipit laboriosam explicabo magnam vero, porro  mollitia aut ratione iure ducimus quod provident aliquid reiciendis.',
  },
  {
    id: 3,
    title: 'falcon 1',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae rerum earum ad blanditiis dolor suscipit laboriosam explicabo magnam vero, porro  mollitia aut ratione iure ducimus quod provident aliquid reiciendis.',
  },
  {
    id: 4,
    title: 'falcon 1',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae rerum earum ad blanditiis dolor suscipit laboriosam explicabo magnam vero, porro  mollitia aut ratione iure ducimus quod provident aliquid reiciendis.',
  }],
};
const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {

  },
});

export default rocketSlice.reducer;
