import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Signup submitted:", { email, password });
    // Backend connection will be added in Phase 2
  }

  return (
    <div className="max-w-sm mx-auto mt-16">
      <h1 className="text-2xl font-bold text-slate-800 mb-1">Create Account</h1>
      <p className="text-slate-500 text-sm mb-6">Save alerts and sightings tied to your own account.</p>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
        <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mb-4"
          placeholder="you@example.com"
        />

        <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-slate-300 rounded-md px-3 py-2 text-sm mb-6"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="w-full bg-slate-900 text-white rounded-md py-2 text-sm font-medium hover:bg-slate-800 transition-colors"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm text-slate-500 mt-4 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-slate-800 font-medium underline">
          Log in
        </a>
      </p>
    </div>
  );
}