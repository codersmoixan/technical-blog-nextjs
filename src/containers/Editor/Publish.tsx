/**
 * @author zhengji.su
 * @description Publish
 */

import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import useNotifier from "core/Snackbar/hooks/useNotifier";
import CenterDialog from "components/Dialog/CenterDialog";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import FormSelect from "components/Form/FormSelect";
import ImageUpload from "components/Form/ImageUpload";
import FormTextarea from "components/Form/FormTextarea";
import Form from "@/src/core/Form";
import useForm from "@/src/core/Form/hooks/useForm";
import type { Theme } from "@mui/material";
import FormChipSelect from "components/Form/FormChipSelect";
import isEmpty from "lodash/isEmpty";
import MediaQuery from "components/MediaQuery";
import GlobalDrawer from "components/GlobalDrawer";
import {useTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {AddSharingParam} from "containers/Sharing/types";
import useCategory from "containers/Category/hooks/useCategory";
import useTag from "containers/Tag/hooks/useTag";

export interface FormOptions extends Pick<AddSharingParam, 'category' | 'tag' | 'description'> {
  cover: File[]
}

interface PublishProps {
  open: boolean;
  onClose?: () => void;
  onPublish?: (options: FormOptions) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 700,
    [theme.breakpoints.down('md')]: {
      minWidth: 'auto'
    }
  },
  drawerHeader: {
    textAlign: 'center',
    '& > button.MuiButtonBase-root': {
      color: theme.colorPalette.text.dark
    }
  },
  drawerPaper: {
    '&.MuiPaper-root': {
      boxShadow: 'none'
    }
  }
}))

function Publish({ open = false, onClose, onPublish }: PublishProps) {
  const notify = useNotifier()
  const classes = useStyles()
  const theme = useTheme()
  const { observer, handleSubmit, watch } = useForm()
  const { categories } = useCategory()
  const { tags } = useTag()

  const [cover, setCover] = useState<File[]>([])

  const tag = watch('tag')

  console.log(tag, 365665);

  const resetForm = () => {
    observer.reset()
    setCover([])
  }

  const handlePublish = (options: any) => {
    if (isEmpty(cover)) {
      return notify('?????????????????????', 'warning')
    }

    onPublish?.({ ...options, cover })
    resetForm()
  }

  const handleImageChange = (files: File[]) => {
    setCover(files)
  }

  const handleClose = () => {
    onClose?.()
    resetForm()
  }

  function formNode() {
    return (
      <Form observer={observer}>
        <Box className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={3} sm={2}>??????: </Grid>
            <Grid item xs={9} sm={10}>
              <FormChipSelect name="category" options={categories} rules={{ required: '?????????????????????' }} />
            </Grid>
          </Grid>
          <Grid container spacing={1} mt={2}>
            <Grid item xs={3} sm={2}>??????: </Grid>
            <Grid item xs={9} sm={10}>
              <FormSelect
                name="tag"
                multiple
                options={tags}
                placeholder="???????????????"
                type="chip"
                rules={{
                  required: '?????????????????????'
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} mt={2}>
            <Grid item xs={3} sm={2}>????????????: </Grid>
            <Grid item xs={9} sm={10}>
              <ImageUpload onChange={handleImageChange} />
            </Grid>
          </Grid>
          <Grid container spacing={1} mt={2}>
            <Grid item xs={3} sm={2}>????????????: </Grid>
            <Grid item xs={9} sm={10}>
              <FormTextarea
                name="description"
                placeholder="?????????????????????..."
                rules={{
                  required: '?????????????????????'
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Form>
    )
  }

  return (
    <>
      <MediaQuery media={['pad', 'pc']}>
        <CenterDialog
          open={open}
          onClose={handleClose}
          onConfirm={handleSubmit(handlePublish)}
          title="????????????"
          confirmText="??????"
          actions
        >
          {formNode()}
        </CenterDialog>
      </MediaQuery>
      <MediaQuery media="mobile">
        <GlobalDrawer
          open={open}
          bgColor={theme.colorPalette.background.main}
          classes={{
            header: classes.drawerHeader,
            paper: classes.drawerPaper
          }}
          confirmText="????????????"
          cancelText="??????"
          onClose={handleClose}
          onConfirm={handleSubmit(handlePublish)}
        >
          <Typography component="span" variant="h4" slot="head">????????????</Typography>
          <Box px={2} slot="content">
            {formNode()}
          </Box>
        </GlobalDrawer>
      </MediaQuery>
    </>
  )
}

export default Publish
