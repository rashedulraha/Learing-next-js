import Link from "next/link";

export default function MainContent() {
  return (
    <div>
      <h2>User List</h2>

      <Link href="/dashboard/users/1">User 1</Link>
      <br />
      <Link href="/dashboard/users/2">User 2</Link>
    </div>
  );
}
