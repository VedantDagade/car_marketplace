import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div className="pt-50 text-center">
      <SignedIn>
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p>Browse your saved cars or reservations.</p>
      </SignedIn>

      <SignedOut>
        <h1 className="text-3xl font-bold">Welcome to VeHiQL 🚗</h1>
        <p className="text-gray-600 mt-2">Please log in to get started.</p>
      </SignedOut>
    </div>
  );
}
