/**
 * @author zhengji.su
 * @description Publish
 */

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import useNotifier from 'core/Snackbar/hooks/useNotifier'
import CenterDialog from 'components/Dialog/CenterDialog'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import FormSelect from 'components/Form/FormSelect'
import ImageUpload from 'components/Form/ImageUpload'
import FormTextarea from 'components/Form/FormTextarea'
import Form from 'core/Form'
import useForm from 'core/Form/hooks/useForm'
import type { Theme } from '@mui/material'
import FormChipSelect from 'components/Form/FormChipSelect'
import isEmpty from 'lodash/isEmpty'
import MediaQuery from 'core/MediaQuery'
import GlobalDrawer from 'components/GlobalDrawer'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { AddSharingParam } from 'containers/Sharing/types'
import useCategory from 'containers/Category/hooks/useCategory'
import useTag from 'containers/Tag/hooks/useTag'
import Buttons from 'components/Buttons'
import useFile from "hooks/useFile";

export interface CoverOption {
  key: string
  url: string
}

export interface FormOptions extends Pick<AddSharingParam, 'category' | 'description'> {
	cover: CoverOption
  tags: string
}

interface PublishProps {
	open: boolean
	onClose?: () => void
	onPublish?: (options: FormOptions) => void
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
	},
	header: {
		padding: theme.spacing(3, 2),
		textAlign: 'left'
	},
	footer: {
		padding: theme.spacing(3, 2),
		textAlign: 'right',
		'& .MuiButton-outlined': {
			marginRight: theme.spacing(3)
		}
	}
}))

function Publish({ open = false, onClose, onPublish }: PublishProps) {
	const notify = useNotifier()
	const classes = useStyles()
	const theme = useTheme()
	const { observer, handleSubmit } = useForm()
	const { category } = useCategory()
	const { tags } = useTag()
  const { uploadFile } = useFile()

	const [cover, setCover] = useState({})

	const resetForm = () => {
		observer.reset()
		setCover({})
	}

	const handlePublish = (options: any) => {
		if (isEmpty(cover)) {
			return notify('请上传文章封面', 'warning')
		}

		onPublish?.({ ...options, cover })
		resetForm()
	}

	const handleImageChange = async (files: File[]) => {
    const { key, url } = await uploadFile(files)
    setCover({ key, url })
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
						<Grid item xs={3} sm={2}>
							分类:{' '}
						</Grid>
						<Grid item xs={9} sm={10}>
							<FormChipSelect name="category" options={category} rules={{ required: '请选择文章分类' }} />
						</Grid>
					</Grid>
					<Grid container spacing={1} mt={2}>
						<Grid item xs={3} sm={2}>
							标签:{' '}
						</Grid>
						<Grid item xs={9} sm={10}>
							<FormSelect
								name="tags"
								multiple
								options={tags}
								placeholder="请选择标签"
								type="chip"
								rules={{
									required: '请选择文章标签'
								}}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={1} mt={2}>
						<Grid item xs={3} sm={2}>
							文章封面:{' '}
						</Grid>
						<Grid item xs={9} sm={10}>
							<ImageUpload onChange={handleImageChange} />
						</Grid>
					</Grid>
					<Grid container spacing={1} mt={2}>
						<Grid item xs={3} sm={2}>
							编辑摘要:{' '}
						</Grid>
						<Grid item xs={9} sm={10}>
							<FormTextarea
								name="description"
								placeholder="请输入文章摘要..."
								rules={{
									required: '请输入文章摘要'
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
				<CenterDialog open={open} onClose={handleClose} onConfirm={handleSubmit(handlePublish)} title="发布文章" confirmText="发布" actions>
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
					anchor="right"
				>
					<div className={classes.header} slot="header">
						<Typography component="span" variant="h4">
							发布文章
						</Typography>
					</div>
					<Box px={2} slot="content">
						{formNode()}
					</Box>
					<div slot="footer" className={classes.footer}>
						<Buttons variant="outlined" onClick={handleClose}>
							取消
						</Buttons>
						<Buttons variant="contained" onClick={handleSubmit(handlePublish)}>
							发布
						</Buttons>
					</div>
				</GlobalDrawer>
			</MediaQuery>
		</>
	)
}

export default Publish
