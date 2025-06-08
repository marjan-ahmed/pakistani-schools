
import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Page content */}
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to the Homepage</h1>
      </main>
    </>
  );
}
