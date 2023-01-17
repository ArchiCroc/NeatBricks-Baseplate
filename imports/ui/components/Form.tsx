import React from 'react';
import { AutoForm } from 'uniforms-mui';
import { AutoFormProps } from 'uniforms';
import { z, ZodObject, ZodRawShape } from "zod";
import CustomZodBridge from '../libs/CustomZodBridge';
import useI18n from '../hooks/useI18n';

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

  const { __ } = useI18n(i18nModule);

  // @ todo would it be better to compute the bridge's ahead of time as part of the schema exports? MD: No we may need to adjust what language is used
  const bridgedSchema = new CustomZodBridge(schema, __);

  return (
    <AutoForm placeholder={placeholder} schema={bridgedSchema} showInlineError={showInlineError} {...props} />
  );
  ;
}