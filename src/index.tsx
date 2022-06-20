import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface ComponentProps {
  title: string;
  content: string;
}
// const ExampleComponent = (props: ComponentProps, ref: any) => {
//   const { title, content, ...others } = props;

//   return (
//     <div ref={ref} className="ExampleComponent" {...others}>
//       <h1>{title}</h1>
//       {content || 'Hello ExampleComponent'}
//     </div>
//   );
// };

// const RefExampleComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);
// RefExampleComponent.displayName = 'ExampleComponent';

// export default RefExampleComponent;

export default class ExampleComponent extends React.Component<ComponentProps, any> {
  static defaultProps = {
    disabled: false,
    
  }
  // static displayName = 'ExampleComponen' /// 修改 displayName 生产不同的 meta？？
  state = { text: 'state' }
  render() {
    const { title, content, ...others } = this.props;
    return (
      <div className="ExampleComponent" {...others}>
        <h1>{title}</h1>
        <h2>{this.state.text}</h2>
        {content || 'Hello ExampleComponent'}
      </div>
    );
  }
}
