import React, { ClassAttributes, HTMLAttributes } from 'react';
import CodeWiggle from '@/components/code/CodeWiggle';
import CodeHighlight from '@/components/code/CodeHighlight';

export const components: Record<string, React.ReactNode> = {
  pre: (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>
  ) => (
    <div
      {...props}
      className="mt-1 overflow-auto border-8 rounded border-primary-900"
    />
  ),
  code: (
    props: JSX.IntrinsicAttributes & { children: string; className: string }
  ) => <CodeHighlight {...props} />,
  Code: (
    props: JSX.IntrinsicAttributes & {
      children: string;
      className: string;
      dir: string;
      lang: string;
    }
  ) => (
    <div className="flex flex-col mt-1">
      {props.dir && (
        <div className="flex">
          <div className="p-2 text-xl rounded-t bg-primary-900 text-primary-50">
            {props.dir}
          </div>
        </div>
      )}
      <div className="overflow-auto border-8 border-primary-900">
        <CodeHighlight {...props} lang={props.lang} />
      </div>
    </div>
  ),
  CodeWiggle: (
    props: JSX.IntrinsicAttributes & {
      children: string;
      className?: string | undefined;
    }
  ) => <CodeWiggle {...props} />,
};
