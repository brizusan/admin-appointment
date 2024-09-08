export const ErrorMessage = ({ children }: React.PropsWithChildren) => {
  return <div className="pt-1 text-sm text-red-600 font-semibold text-right">{children}</div>;
};
