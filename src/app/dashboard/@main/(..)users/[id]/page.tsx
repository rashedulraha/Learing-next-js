interface params {
  params: {
    id: string;
  };
}

export default async function UserModal({ params }: params) {
  const { id } = await params;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded">
        <h3>User ID: {id}</h3>
        <p>User details shown here</p>
      </div>
    </div>
  );
}
