export default function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  users,
  login
} : {
  children: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
      <div>{children}</div>
      <div>{notifications}</div>
      <div>{users}</div>
      <div>{revenue}</div>
    </>
  ) : (
    login
  )
}