'use client';

export default function ForDevs() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">For Developers</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">API Overview</h2>
        <p>
          Welcome! This API allows you to register schools and fetch the list of registered schools.
          No authentication required — just send requests to the endpoints below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Available Endpoints</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>POST /register-school</strong><br />
            Register a new school by sending JSON data:<br />
            <code>
              {"{"}<br />
              &nbsp;&nbsp;"name": "School Name",<br />
              &nbsp;&nbsp;"email": "email@example.com",<br />
              &nbsp;&nbsp;"phone": "1234567890",<br />
              &nbsp;&nbsp;"address": "School address",<br />
              &nbsp;&nbsp;"principal": "Principal name"<br />
              {"}"}
            </code>
          </li>
          <li>
            <strong>GET /schools</strong><br />
            Retrieve the list of all registered schools.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Example Fetch Request</h2>
        <pre className="bg-gray-100 p-4 rounded">
{`fetch('http://localhost:8000/register-school', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "My School",
    email: "school@example.com",
    phone: "1234567890",
    address: "123 Main St",
    principal: "Jane Doe"
  })
})
.then(res => res.json())
.then(data => console.log(data));`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Notes & Tips</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>No authentication needed, so please use responsibly.</li>
          <li>Make sure your requests have the proper <code>Content-Type: application/json</code> header.</li>
          <li>Server runs on <code>http://localhost:8000</code> by default.</li>
          <li>This is a simple demo API, so data is stored in memory and resets on server restart.</li>
        </ul>
      </section>
    </div>
  );
}
