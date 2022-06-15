import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const SingleComMeta: ComponentMetadata = {
  componentName: 'SingleCom',
  title: 'SingleCom',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'single-com',
    version: '0.1.0',
    exportName: 'default',
    main: 'src/index.tsx',
    destructuring: false,
    subName: '',
  },
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'title',
            'zh-CN': 'title',
          },
        },
        name: 'title',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'content',
            'zh-CN': 'content',
          },
        },
        name: 'content',
        setter: {
          componentName: 'StringSetter',
          isRequired: true,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'ref',
            'zh-CN': 'ref',
          },
        },
        name: 'ref',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'FunctionSetter',
              },
              {
                componentName: 'ObjectSetter',
                props: {
                  config: {
                    extraSetter: {
                      componentName: 'MixedSetter',
                      isRequired: false,
                      props: {},
                    },
                  },
                },
                isRequired: false,
                initialValue: {},
              },
            ],
          },
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'key',
            'zh-CN': 'key',
          },
        },
        name: 'key',
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'StringSetter',
                isRequired: false,
                initialValue: '',
              },
              {
                componentName: 'NumberSetter',
                isRequired: false,
                initialValue: 0,
              },
            ],
          },
        },
      },
    ],
    supports: {
      style: true,
    },
    component: {},
  },
  group: '精选组件',
  category: '基础元素'
};
const snippets: Snippet[] = [
  {
    title: 'SingleCom',
    screenshot: '',
    schema: {
      componentName: 'SingleCom',
      props: {},
    },
  },
];

export default {
  ...SingleComMeta,
  snippets,
};
