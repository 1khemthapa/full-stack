import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

// Helper: calculate age from YYYY‑MM‑DD
const getAge = (dob) => {
  if (!dob) return "";
  const diff = Date.now() - new Date(dob).getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
};

const MyProfile = () => {
  /* ---------------- initial data (could come from props / API) ---------------- */
  const initialUser = {
    avatarUrl: "https://via.placeholder.com/150",
    fullName: "John Doe",
    dateOfBirth: "1995-07-04",
    gender: "Male",
    bloodGroup: "O+",
    phone: "+1 555‑123‑4567",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield",
    medicalHistory: [
      "Diabetes – Diagnosed 2020",
      "Allergic to Penicillin",
      "Appendix surgery 2018",
    ],
  };

  /* ---------------- state ---------------- */
  const [user, setUser] = useState(initialUser);
  const [age, setAge] = useState(getAge(initialUser.dateOfBirth));
  const [avatarFile, setAvatarFile] = useState(null); // keep the File for upload
  const [isEditing, setIsEditing] = useState(false);

  /* ---------------- recompute age when DOB changes ---------------- */
  useEffect(() => {
    setAge(getAge(user.dateOfBirth));
  }, [user.dateOfBirth]);

  /* ---------------- handlers ---------------- */
  const handleField = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setAvatarFile(file);
    setUser((prev) => ({ ...prev, avatarUrl: URL.createObjectURL(file) }));
  };

  const addMedicalItem = () =>
    setUser((prev) => ({ ...prev, medicalHistory: [...prev.medicalHistory, ""] }));

  const handleHistoryChange = (idx, value) =>
    setUser((prev) => {
      const copy = [...prev.medicalHistory];
      copy[idx] = value;
      return { ...prev, medicalHistory: copy };
    });

  const saveProfile = async () => {
    try {
      const body = new FormData();
      Object.entries(user).forEach(([k, v]) =>
        k === "medicalHistory"
          ? body.append(k, JSON.stringify(v))
          : body.append(k, v)
      );
      if (avatarFile) body.append("avatar", avatarFile);

      await fetch("/api/patient/profile", {
        method: "POST",
        body,
      });
      // success UI feedback could go here (toast, etc.)
      setIsEditing(false);
    } catch (err) {
      console.error("Save failed:", err);
    }
  };

  const toggleEdit = () => (isEditing ? saveProfile() : setIsEditing(true));

  /* ---------------- UI ---------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex justify-center py-12 px-4">
      <div className="w-full max-w-2xl space-y-8">
        {/* ───── Profile Card ───── */}
        <div className="bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <label className="relative cursor-pointer">
                <img
                  src={assets.ProfileIcon}
                  alt="avatar"
                  className="w-24 h-24 rounded-full border-4 border-white shadow"
                />
                {isEditing && (
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 opacity-0"
                    onChange={handleAvatarChange}
                  />
                )}
              </label>
              <div>
                {isEditing ? (
                  <input
                    className="text-2xl font-bold text-blue-800 w-full focus:outline-none"
                    name="fullName"
                    value={user.fullName}
                    onChange={handleField}
                  />
                ) : (
                  <h2 className="text-2xl font-bold text-blue-800">{user.fullName}</h2>
                )}
                <p className="text-sm text-gray-600">
                  {user.gender}, {age && `${age} years`}
                </p>
                <div className="text-sm text-gray-700 mt-1">
                  <strong>Blood Group:</strong> {user.bloodGroup}
                </div>
              </div>
            </div>

            <button
              onClick={toggleEdit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>

        {/* ───── Contact Info ───── */}
        <div className="bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl p-6 shadow-lg">
          <h3 className="text-blue-700 font-semibold text-lg mb-4">📞 Contact Information</h3>

          {/* Email */}
          <div className="mb-3 text-sm">
            <label className="block text-gray-500">Email</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleField}
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p>{user.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-3 text-sm">
            <label className="block text-gray-500">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleField}
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p>{user.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="text-sm">
            <label className="block text-gray-500">Address</label>
            {isEditing ? (
              <textarea
                name="address"
                value={user.address}
                onChange={handleField}
                className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p>{user.address}</p>
            )}
          </div>
        </div>

        {/* ───── Date of Birth ───── */}
        <div className="bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl p-6 shadow-lg">
          <h3 className="text-blue-700 font-semibold text-lg mb-4">🎂 Date of Birth</h3>
          {isEditing ? (
            <input
              type="date"
              name="dateOfBirth"
              value={user.dateOfBirth}
              onChange={handleField}
              className="border px-3 py-2 rounded focus:ring-2 focus:ring-blue-300"
            />
          ) : (
            <p className="text-sm text-gray-700">{user.dateOfBirth}</p>
          )}
        </div>

        {/* ───── Medical History ───── */}
        <div className="bg-white/60 backdrop-blur-lg border border-blue-100 rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-blue-700 font-semibold text-lg">📋 Medical History</h3>
            {isEditing && (
              <button
                onClick={addMedicalItem}
                className="text-blue-600 font-bold text-xl leading-none"
                title="Add new item"
              >
                +
              </button>
            )}
          </div>

          {user.medicalHistory.map((item, idx) =>
            isEditing ? (
              <input
                key={idx}
                value={item}
                onChange={(e) => handleHistoryChange(idx, e.target.value)}
                className="w-full mb-2 border px-3 py-1 text-sm rounded focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p key={idx} className="text-sm text-gray-700 mb-1">
                • {item}
              </p>
            )
          )}
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
