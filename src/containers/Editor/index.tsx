/**
 * @author zhengji.su
 * @description ShareEditor
 */

import React, { useState, useEffect } from 'react'
import { Editor as WangEditor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, DomEditor, IToolbarConfig } from '@wangeditor/editor'
import { makeStyles } from '@mui/styles'
import Root from 'components/Layout/Root'
import Buttons from 'components/Buttons'
import MediaQuery from 'core/MediaQuery'
import Publish, { FormOptions } from 'containers/Editor/components/Publish'
import Fab from '@mui/material/Fab'
import Send from '@mui/icons-material/Send'
import useSharing from 'containers/Sharing/hooks/useSharing'
import type { Theme } from '@mui/material'
import '@wangeditor/editor/dist/css/style.css'

const editorHeight = (media: string) => (media === 'mobile' ? 'calc(100vh - 145px)' : 'calc(100vh - 140px)')

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		minHeight: '100vh',
		borderLeft: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
		borderRight: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
		backgroundColor: theme.colorPalette.background.main
	},
	motion: {
		height: '100vh'
	},
	header: {
		position: 'sticky',
		top: 0,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: theme.spacing(0, 3),
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
		backgroundColor: theme.colorPalette.background.main,
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
		marginLeft: theme.spacing(3)
	},
	editorContainer: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},
	toolbar: {
		position: 'sticky',
		top: 85,
		zIndex: 999,
		borderBottom: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
		borderTop: `1px solid ${theme.colorPalette.primary.colorSecondary}`,
		[theme.breakpoints.down('sm')]: {
			top: 65
		},
		'& .w-e-bar': {
			backgroundColor: theme.colorPalette.background.main
		}
	},
	editor: {
		height: 'calc(100vh - 130px)',
		'& .w-e-text-container': {
			backgroundColor: 'transparent',
			'& .w-e-scroll': {
				padding: theme.spacing(1.875, 0),
				'& [data-slate-editor]': {
					margin: theme.spacing(-1.875, 0),
					backgroundColor: theme.colorPalette.background.main
				}
			}
		},
		[theme.breakpoints.down('md')]: {
			height: 'calc(100vh - 150px)'
		}
	},
	speedDial: {
		position: 'fixed',
		right: 24,
		bottom: 24,
		transform: 'rotate(-45deg)',
		'& svg': {
			position: 'relative',
			left: 4
		},
		[theme.breakpoints.down('md')]: {
			width: 48,
			height: 48
		}
	}
}))

const excludeToolKey = [
	'|',
	'group-more-style',
	'underline',
	'italic',
	'bgColor',
	'fontFamily',
	'lineHeight',
	'bulletedList',
	'numberedList',
	'group-justify',
	'group-indent',
	'group-video',
	'insertTable',
	'todo',
	'undo',
	'redo',
	'fullScreen'
]

function Editor() {
	const classes = useStyles()
	const { addSharing, loading } = useSharing()

	const [editor, setEditor] = useState<IDomEditor | null>(null)
	const [html, setHtml] = useState<string>('')
	const [open, setOpen] = useState<boolean>(false)
	const [title, setTitle] = useState<string>('')

	const toolbarConfig: Partial<IToolbarConfig> = {} // 菜单栏配置

	// 编辑器配置
	const editorConfig = {
		placeholder: '请输入内容...',
		onCreated: (editor: IDomEditor) => {
			// 编辑器创建之后，记录 editor 实例，重要 ！！！ （有了 editor 实例，就可以执行 editor API）
			setEditor(editor)
		},
		onChange: (editor: IDomEditor) => setHtml(editor.getHtml())
	}

	// 组件销毁时，及时销毁 editor 实例，重要！！！
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
			content: html
		})

		if (result) {
			handleCloseDialog()
		}
	}

	return (
		<Root className={classes.root} classes={{ motion: classes.motion }}>
			<div className={classes.header}>
				<input placeholder="请输入文章标题..." className={classes.title} onChange={handleTitleChange} />
				<MediaQuery media={['pad', 'pc']}>
					<div className={classes.actions}>
						<Buttons variant="outlined">草稿箱</Buttons>
						<Buttons variant="contained" className={classes.submit} onClick={handleOpenPublish}>
							发布文章
						</Buttons>
					</div>
				</MediaQuery>
			</div>
			<div className={classes.editorContainer}>
				<Toolbar editor={editor} defaultConfig={toolbarConfig} className={classes.toolbar} />
				<WangEditor defaultConfig={editorConfig} className={classes.editor} />
			</div>
			<Publish open={open} onPublish={handlePublish} onClose={handleCloseDialog} />
			<MediaQuery media="mobile">
				<Fab color="primary" className={classes.speedDial} onClick={handleOpenPublish}>
					<Send />
				</Fab>
			</MediaQuery>
		</Root>
	)
}

export default Editor
