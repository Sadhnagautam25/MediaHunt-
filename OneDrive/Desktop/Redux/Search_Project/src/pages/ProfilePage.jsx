import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCamera,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { profileSubmit, updateProfile } from "../redux/features/profileSlice";

const ProfilePage = () => {
  const [profileImg, setProfileImg] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currProfile = useSelector((state) => state.profile.currentProfile);
  const currtheme = useSelector((state) => state.theme.currentTheme);

  const isDark = currtheme === "dark";

  useEffect(() => {
    if (currProfile) {
      setUsername(currProfile.username || "");
      setEmail(currProfile.email || "");
      setPhone(currProfile.phone || "");
      setLocation(currProfile.location || "");
      setProfession(currProfile.profession || "");
      setExperience(currProfile.experience || "");
      setSkills(currProfile.skills || "");
      setProfileImg(currProfile.profileImg || "");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [currProfile]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfileImg(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const profileData = {
      username,
      email,
      phone,
      location,
      profession,
      experience,
      skills,
      profileImg,
    };

    if (
      username &&
      email &&
      phone &&
      location &&
      profession &&
      experience &&
      skills &&
      profileImg
    ) {
      currProfile
        ? dispatch(updateProfile(profileData))
        : dispatch(profileSubmit(profileData));

      setIsEditing(false);
      navigate("/dashboard");
    }
  };

  const inputClass = (disabled) =>
    `w-full rounded-xl px-4 py-3 text-sm outline-none
    ${
      disabled
        ? "cursor-not-allowed bg-gray-300 opacity-70 text-gray-700"
        : isDark
          ? "bg-[#1e293b] focus:ring-2 focus:ring-indigo-500"
          : "bg-gray-100 focus:ring-2 focus:ring-indigo-400"
    }`;

  return (
    <div
      className={`h-screen w-screen flex flex-col ${
        isDark ? "bg-[#0f172a] text-white" : "bg-[#f6f7fb] text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`h-16 flex items-center justify-between px-10 shadow-md
        ${
          isDark
            ? "bg-linear-to-r from-[#1e293b] to-[#020617]"
            : "bg-linear-to-r from-indigo-600 to-purple-600"
        }`}
      >
        <h1 className="text-xl font-bold text-white">My Profile</h1>
        <a href="/" className="text-white flex items-center gap-2">
          <FaHome /> Home
        </a>
      </nav>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-10">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Card */}
          <div
            className={`rounded-3xl shadow-lg p-8 flex flex-col items-center
            ${isDark ? "bg-[#1b263b]" : "bg-white"}`}
          >
            <div className="relative mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaCamera className="text-3xl text-indigo-500" />
                )}
              </div>

              <label
                className={`absolute bottom-2 right-2 p-2 rounded-full text-white
                ${
                  currProfile && !isEditing
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-indigo-600 cursor-pointer"
                }`}
              >
                <FaCamera className="text-xs" />
                <input
                  type="file"
                  hidden
                  disabled={currProfile && !isEditing}
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <h2 className="text-xl font-semibold">{username || "Your Name"}</h2>
            <p className="text-sm text-gray-400">
              {profession || "Your Profession"}
            </p>

            {currProfile && !isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-6 px-6 py-2 rounded-xl text-sm font-medium text-white
                bg-linear-to-r from-indigo-600 to-purple-600 hover:scale-105 transition"
              >
                Edit Profile
              </button>
            )}
          </div>

          {/* Right Card */}
          <div
            className={`md:col-span-2 rounded-3xl shadow-lg p-8
            ${isDark ? "bg-[#1b263b]" : "bg-white"}`}
          >
            <h3 className="text-lg font-semibold mb-6">Personal Information</h3>

            <form
              onSubmit={handleSave}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Input
                label="Full Name"
                icon={<FaUser />}
                value={username}
                disabled={currProfile && !isEditing}
                className={inputClass(currProfile && !isEditing)}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Input
                label="Email"
                icon={<FaEnvelope />}
                value={email}
                disabled={currProfile && !isEditing}
                className={inputClass(currProfile && !isEditing)}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Phone"
                icon={<FaPhone />}
                value={phone}
                disabled={currProfile && !isEditing}
                className={inputClass(currProfile && !isEditing)}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Input
                label="Location"
                icon={<FaMapMarkerAlt />}
                value={location}
                disabled={currProfile && !isEditing}
                className={inputClass(currProfile && !isEditing)}
                onChange={(e) => setLocation(e.target.value)}
              />

              <Input
                label="Profession"
                icon={<FaBriefcase />}
                value={profession}
                disabled={currProfile && !isEditing}
                className={inputClass(currProfile && !isEditing)}
                onChange={(e) => setProfession(e.target.value)}
              />

              <div>
                <label className="text-xs font-medium text-gray-400">
                  Experience
                </label>
                <select
                  value={experience}
                  disabled={currProfile && !isEditing}
                  className={inputClass(currProfile && !isEditing)}
                  onChange={(e) => setExperience(e.target.value)}
                >
                  <option value="">Select</option>
                  <option>Fresher</option>
                  <option>1–2 Years</option>
                  <option>3–5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-medium text-gray-400">
                  Skills
                </label>
                <input
                  value={skills}
                  disabled={currProfile && !isEditing}
                  className={inputClass(currProfile && !isEditing)}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  disabled={currProfile && !isEditing}
                  className={
                    currProfile && !isEditing
                      ? "cursor-not-allowed bg-gray-400 px-10 py-3 rounded-2xl text-white"
                      : "px-10 py-3 rounded-2xl text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:scale-105 transition"
                  }
                >
                  {currProfile ? "Update Profile" : "Save Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, icon, ...props }) => (
  <div>
    <label className="text-xs font-medium text-gray-400">{label}</label>
    <div className="relative mt-1">
      <input {...props} />
      <span className="absolute right-4 top-3.5 text-gray-400">{icon}</span>
    </div>
  </div>
);

export default ProfilePage;
