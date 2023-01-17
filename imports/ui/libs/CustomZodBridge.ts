import ZodBridge from 'uniforms-bridge-zod';
import { ZodObject, ZodRawShape } from 'zod';

export default class CustomZodBridge<T extends ZodRawShape> extends ZodBridge<T> {

  translator: (key: string) => string;

  constructor(
    schema: ZodObject<T>,
    translator: (key: string) => string
  ) {
    super(schema);
    this.translator = translator;
  }

  getProps(name: string, fieldProps?: Record<string, unknown>) {
    const props = super.getProps(name, fieldProps);

    props.label = this.translator(name + '.label');
    if (props.label === '') {
      props.label = this.translator(name + '.name');
    }

    props.placeholder = this.translator(name + '.placeholder');
    if (props.placeholder === '') {
      props.placeholder = props.label;
    }

    props.helperText = this.translator(name + '.help');
    if (props.helperText === '') {
      props.helperText = undefined;
    }

    return props;
  }
}
