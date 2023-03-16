import { createSlice } from '@reduxjs/toolkit'
import type { EmptyObject } from "@/src/tb.types"
import type { RootState } from "@/src/store";

type ArticleState = {
  article: EmptyObject
}

const initialState: ArticleState = {
  article: {}
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    changeArticle(state, action) {
      state.article = action.payload
    },
  }
})

export const { changeArticle } = articlesSlice.actions

export const selectArticle = (state: RootState) => state.articles.article

export default articlesSlice
