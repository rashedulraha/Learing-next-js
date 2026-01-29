import Link from "next/link";

export default function MainContent() {
  return (
    <div>
      <h2>User List</h2>

      <Link href="/dashboard/users">User 1</Link>
      <br />
      <Link href="/dashboard/users">User 2</Link>
    </div>
  );
}
