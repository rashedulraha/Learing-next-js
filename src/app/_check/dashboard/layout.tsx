export default function DashboardLayout({
  sidebar,
  main,
  notifications,
}: {
  sidebar: React.ReactNode;
  main: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-4 h-screen">
      <aside className="col-span-1 text-white bg-zinc-900">{sidebar}</aside>

      <main className="col-span-2 text-black bg-zinc-300">{main}</main>

      <section className="col-span-1 text-white bg-zinc-900">
        {notifications}
      </section>
    </div>
  );
}
