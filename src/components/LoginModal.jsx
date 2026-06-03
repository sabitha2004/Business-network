import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function LoginModal({ open, setOpen }) {
  const [mode, setMode] = useState("login"); // login | signup

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setForm({ name: "", email: "", password: "" });
      setOpen(false);
    }, 1000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 relative">

        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 text-gray-500"
        >
          <FiX size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-center mb-4">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        {/* Success */}
        {success ? (
          <div className="text-green-600 text-center py-10 font-medium">
            Successfully Completed ✅
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">

            {/* ✅ NAME only for SIGN UP */}
            {mode === "signup" && (
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            )}

            {/* EMAIL (both login & signup) */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {/* PASSWORD (both login & signup) */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg"
            >
              {mode === "login" ? "Login" : "Sign Up"}
            </button>

            {/* Switch */}
            <p className="text-center text-sm mt-3">
              {mode === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className="text-red-600 font-medium"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-red-600 font-medium"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}