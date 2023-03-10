/**
 * @author zhengji.su
 * @description ShareEditor
 */

import React, { useState, useEffect } from 'react'
import { Editor as WangEditor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, DomEditor, IToolbarConfig } from '@wangeditor/editor'
import { makeStyles } from "@mui/styles";
import Root from "components/Layout/Root";
import Box from "@mui/material/Box";
import Buttons from "components/Buttons";
import MediaQuery from "components/MediaQuery";
import Publish, { FormOptions } from "containers/Editor/Publish";
import Fab from "@mui/material/Fab";
import Send from "@mui/icons-material/Send"
import useSharing from "containers/Sharing/hooks/useSharing";
import type { Theme } from "@mui/material";
import '@wangeditor/editor/dist/css/style.css'

const editorHeight = (media: string) => media === 'mobile' ? 'calc(100vh - 145px)' : 'calc(100vh - 140px)'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    borderLeft: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
    borderRight: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
  },
  header: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing( 0, 3),
    height: 85,
    backgroundColor: 'rgb(252, 252, 252)',
    zIndex: 999,
    [theme.breakpoints.down('sm')]: {
      height: 65
    }
  },
  title: {
    width: '70%',
    height: 49,
    fontWeight: 700,
    fontSize: 24,
    outline: 'none',
    border: 'none',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  actions: {
    display: 'flex',
    '& .MuiButton-outlined': {
      color: theme.palette.primary.main
    }
  },
  submit: {
    marginLeft: theme.spacing(3),
  },
  editorContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  toolbar: {
    position: 'sticky',
    top: 85,
    zIndex: 999,
    borderBottom: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
    borderTop: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
    [theme.breakpoints.down('sm')]: {
      top: 65
    }
  },
  editor: {
    minHeight: editorHeight('pc'),
    '& .w-e-text-container': {
      minHeight: editorHeight('pc')
    },
    '& .w-e-scroll': {
      overflowY: 'inherit !important',
      minHeight: editorHeight('pc'),
      '& > div': {
        minHeight: editorHeight('pc'),
      }
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: editorHeight('mobile'),
      '& .w-e-text-container': {
        minHeight: editorHeight('mobile')
      },
      '& .w-e-scroll': {
        overflowY: 'inherit !important',
        minHeight: editorHeight('mobile'),
        '& > div': {
          minHeight: editorHeight('mobile'),
        }
      }
    },
  },
  speedDial: {
    position: 'fixed',
    right: 24,
    bottom: 24,
    transform: 'rotate(-45deg)',
    '& svg': {
      position: 'relative',
      left: 4,
    }
  }
}))

const excludeToolKey = [
  '|', 'group-more-style', 'underline', 'italic', 'bgColor', 'fontFamily', 'lineHeight', 'bulletedList',
  'numberedList', 'group-justify', 'group-indent', 'group-video', 'insertTable', 'todo', 'undo', 'redo', 'fullScreen'
]

function Editor() {
  const classes = useStyles()
  const { addSharing, loading } = useSharing()

  const [editor, setEditor] = useState<IDomEditor | null>(null)
  const [html, setHtml] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const toolbarConfig: Partial<IToolbarConfig> = {

  } // ???????????????

  // ???????????????
  const editorConfig = {
    placeholder: '???????????????...',
    onCreated: (editor: IDomEditor) => {
      // ?????????????????????????????? editor ??????????????? ????????? ????????? editor ???????????????????????? editor API???
      setEditor(editor)
    },
    onChange: (editor: IDomEditor) => setHtml(editor.getHtml())
  }

  // ?????????????????????????????? editor ????????????????????????
  useEffect(() => {
    if (editor !== null) {
      const toolbarConfig = DomEditor.getToolbar(editor)?.getConfig()
      if (toolbarConfig) {
        toolbarConfig.excludeKeys = excludeToolKey
      }
    }

    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  const handleCloseDialog = () => setOpen(false)

  const handleOpenPublish = () => setOpen(true)

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handlePublish = async ({ cover, ...other }: FormOptions) => {
    const result = await addSharing({
      ...other,
      blogImage: '111',
      name: title,
      content: html,
    })

    if (result) {
      handleCloseDialog()
    }
  }

  return (
    <Root className={classes.root}>
      <Box className={classes.header}>
        <input placeholder="?????????????????????..." className={classes.title} onChange={handleTitleChange} />
        <MediaQuery media={['pad', 'pc']}>
          <Box className={classes.actions}>
            <Buttons variant="outlined">?????????</Buttons>
            <Buttons variant="contained" className={classes.submit} onClick={handleOpenPublish}>????????????</Buttons>
          </Box>
        </MediaQuery>
      </Box>
      <Box className={classes.editorContainer}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          className={classes.toolbar}
        />
        <WangEditor
          defaultConfig={editorConfig}
          className={classes.editor}
        />
      </Box>
      <Publish
        open={open}
        onPublish={handlePublish}
        onClose={handleCloseDialog}
      />
      <MediaQuery media="mobile">
        <Fab color="primary" className={classes.speedDial} onClick={handleOpenPublish}>
          <Send />
        </Fab>
      </MediaQuery>
    </Root>
  )
}

export default Editor
