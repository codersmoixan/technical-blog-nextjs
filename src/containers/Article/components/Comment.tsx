/**
 * @author zhengji.su
 * @description Comment
 */

import React, { useState, useEffect } from 'react'
import {ArticleComment} from "containers/Article/types";
import {makeStyles} from "@mui/styles";
import type {Theme} from "@mui/material";
import CommentItem from "containers/Article/components/CommentItem";

const useStyles = makeStyles((theme: Theme) => ({
  root: {

  }
}))

interface CommentProps {
  list: ArticleComment[]
}

function Comment({ list = [], ...other }: CommentProps) {
  const classes = useStyles(other)
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue('Index')
  }, [])

  console.log(list, 22);

  return (
    <div className={classes.root}>
      {list.map(comment => (
        <CommentItem key={comment.commentInfo.id} comment={comment} />
      ))}
    </div>
  )
}

export default Comment
