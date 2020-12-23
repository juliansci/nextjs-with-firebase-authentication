import AuthenticatedLayout from "../components/AuthenticatedLayout";
export function withAuthComponent(Component: any) {
  return (props) => {
    if (!props.user) return <h1>Access Denied</h1>;
    return <AuthenticatedLayout user={props.user}>
      <Component {...props} />
    </AuthenticatedLayout>;
  }
}