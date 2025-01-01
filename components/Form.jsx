import { useState } from "react";
import FileUpload from "./FileUpload";
import InputField from "./InputField";
import Button from "./Button";

const Form = ({ formData, setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Clear field error
  };

  const handleFileChange = (file, error) => {
    setFormData((prev) => ({ ...prev, avatar: file }));
    setErrors((prev) => ({ ...prev, avatar: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      setFormData((prev) => ({ ...prev, currentStep: 2 }));
      console.log("Form Submitted:", formData);
    }
  };

  const validateFields = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Github Username validation
    if (!formData.githubUsername) {
      newErrors.githubUsername = "Github Username is required.";
    }

    // Github Username validation
    if (!formData.avatar) {
      newErrors.avatar = "Avatar is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    githubUsername: "",
    avatar: "",
  });

  return (
    <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
      <h1 className="max-w-lg text-center text-3xl font-extrabold lg:text-4xl">
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <h2 className="mx-auto mt-4 w-full text-center text-lg">
        Secure your spot at next year's biggest coding conference.
      </h2>

      <FileUpload onFileChange={handleFileChange} error={errors.avatar} />
      <InputField
        label="Full Name"
        placeholder=""
        value={formData.fullName}
        onChange={(e) => handleInputChange("fullName", e.target.value)}
        error={errors.fullName}
      />
      <InputField
        label="Email Address"
        placeholder="example@email.com"
        value={formData.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
        error={errors.email}
      />
      <InputField
        label="Github Username"
        placeholder="@yourusername"
        value={formData.githubUsername}
        onChange={(e) => handleInputChange("githubUsername", e.target.value)}
        error={errors.githubUsername}
      />

      <Button title="Generate My Ticket" />
    </form>
  );
};

export default Form;
