import {NavigateItemOption} from "components/Navigation/types";
import routes from "@/src/routes";

export const options = [
  {
    id: 'frontEnd',
    label: '前端',
    child: [
      {
        id: 'react',
        label: 'react'
      },
      {
        id: 'vue',
        label: 'vue'
      }
    ]
  },
  {
    id: 'backEnd',
    label: '后端',
    child: [
      {
        id: 'java',
        label: 'java'
      },
      {
        id: 'go',
        label: 'go'
      }
    ]
  },
  {
    id: 'opex',
    label: '运维',
    child: [
      {
        id: 'k8s',
        label: 'k8s'
      },
      {
        id: 'docker',
        label: 'docker'
      }
    ]
  },
  {
    id: 'ai',
    label: '人工智能',
    child: [
      {
        id: 'machineLearning',
        label: '机器学习'
      },
      {
        id: 'algorithm',
        label: '算法导论'
      }
    ]
  },
  {
    id: 'bigData',
    label: '大数据',
    child: [
      {
        id: 'theory',
        label: '大数据理论'
      },
      {
        id: '2',
        label: '算法导论'
      }
    ]
  }
]

export const blogList = [
  {
    id: 1,
    title: '前端性能优化',
    description: '前端性能优化是前端中必不可少的部分',
    content: '前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？'
  },
  {
    id: 2,
    title: 'Go高并发',
    description: '测试一下',
    content: '前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？Go语言中的高并发是与生俱来的Go语言中的高并发是与生俱来的Go语言中的高并发是与生俱来的'
  },
  {
    id: 3,
    title: 'CSS加载顺序',
    description: 'CSS加载顺序',
    content: '前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？Go语言中的高并发是与生俱来的'
  },
  {
    id: 4,
    title: 'java设计模式',
    description: 'java设计模式java设计模式java设计模式',
    content: '前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？java设计模式java设计模式'
  },
  {
    id: 5,
    title: 'JS设计模式',
    description: '前端性能优化是前端中必不可少的部分',
    content: '前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？'
  },
  {
    id: 6,
    title: '前端性能优化',
    description: '前端性能优化是前端中必不可少的部分',
    content: '前端性能优化是前端中必不可少的部分,那么前端性能优化该从何处下手呢？'
  }
]

export const navigateList: NavigateItemOption[] = [
  {
    id: 'category',
    label: '归档',
    route: routes.category
  },
  {
    id: 'tag',
    label: '标签',
    route: routes.tags
  },
]
