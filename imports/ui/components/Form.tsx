import React from 'react';
import { AutoForm } from 'uniforms-mui';
import { AutoFormProps } from 'uniforms';
import ZodBridge from 'uniforms-bridge-zod';
import { z, ZodObject, ZodRawShape } from "zod";

interface FormProps<T extends ZodRawShape> extends Partial<Omit<AutoFormProps<T>, 'schema'>> {
  children: React.ReactNode;
  schema: ZodObject<T>;
  i18nModule?: string;
}

export default function Form<T extends ZodRawShape>({
  i18nModule = '',
  placeholder = true,
  schema,
  showInlineError = true,
  ...props }: FormProps<T>) {

  // @ todo would it be better to compute the bridge's ahead of time as part of the schema exports?
  const bridgedSchema = new ZodBridge(schema);

  return (
    <AutoForm placeholder={placeholder} schema={bridgedSchema} showInlineError={showInlineError} {...props} />
  );
  ;
}